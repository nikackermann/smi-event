"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { sendConfirmationEmail } from "@/lib/email";
import { unstable_noStore as noStore } from "next/cache";

const SPRING_END_GRINDING_2025 = {
  id: "spring-end-grinding-2025",
  name: "Spring End Grinding Training Course",
  date: new Date("2025-09-23T10:00:00Z"),
  location: "WAFIOS Machinery Corporation, Branford, CT",
};

export async function registerForEvent(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  title: string;
  photoRelease: boolean;
}) {
  try {
    // Ensure the event exists
    const event = await prisma.event.upsert({
      where: { id: SPRING_END_GRINDING_2025.id },
      update: {
        name: SPRING_END_GRINDING_2025.name,
        date: SPRING_END_GRINDING_2025.date,
        location: SPRING_END_GRINDING_2025.location,
      },
      create: {
        id: SPRING_END_GRINDING_2025.id,
        name: SPRING_END_GRINDING_2025.name,
        date: SPRING_END_GRINDING_2025.date,
        location: SPRING_END_GRINDING_2025.location,
      },
    });

    // Create the registration
    const registration = await prisma.eventRegistration.create({
      data: {
        eventId: event.id,
        ...data,
      },
    });

    // Send confirmation email
    try {
      await sendConfirmationEmail({
        to: data.email,
        firstName: data.firstName,
      });
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError);
      // Don't fail the registration if email fails
    }

    revalidatePath("/");
    revalidatePath("/event-signups");
    return { success: true, data: registration };
  } catch (error) {
    console.error("Failed to register:", error);
    return { success: false, error: "Failed to register. Please try again." };
  }
}

export async function getEventRegistrations(eventId?: string) {
  noStore();
  try {
    if (eventId) {
      return await prisma.eventRegistration.findMany({
        where: { eventId },
        include: {
          event: true,
        },
        orderBy: { createdAt: "desc" },
      });
    }

    // Get all registrations
    return await prisma.eventRegistration.findMany({
      include: {
        event: true,
      },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Failed to fetch registrations:", error);
    return [];
  }
}

export async function exportRegistrationsToCSV(eventId?: string) {
  noStore();
  try {
    const registrations = await getEventRegistrations(eventId);

    // CSV header
    let csvContent =
      "ID,First Name,Last Name,Email,Phone,Company,Title,Event,Date Registered,Last Updated\n";

    // Add data rows
    registrations.forEach((registration: any) => {
      csvContent += `${registration.id},${escapeCSV(
        registration.firstName
      )},${escapeCSV(registration.lastName)},${escapeCSV(
        registration.email
      )},${escapeCSV(registration.phone)},${escapeCSV(
        registration.company
      )},${escapeCSV(registration.title)},${escapeCSV(
        registration.event.name
      )},${registration.createdAt.toISOString()},${registration.updatedAt.toISOString()}\n`;
    });

    return csvContent;
  } catch (error) {
    console.error("Failed to export registrations:", error);
    throw new Error("Failed to export registrations");
  }
}

// Helper function to escape and quote CSV fields if necessary
function escapeCSV(field: string | null): string {
  if (field == null) return "";
  if (field.includes(",") || field.includes('"') || field.includes("\n")) {
    return `"${field.replace(/"/g, '""')}"`;
  }
  return field;
}

// Backward compatibility functions
export async function getAttendees() {
  return getEventRegistrations();
}

export async function addAttendee(attendee: any) {
  const formData = {
    firstName: attendee.first_name || attendee.firstName,
    lastName: attendee.last_name || attendee.lastName,
    email: attendee.email,
    phone: attendee.phone || "",
    company: attendee.company || "",
    title: attendee.job_title || attendee.title || "",
    photoRelease: true,
  };

  return registerForEvent(formData);
}

// Legacy types for backward compatibility
export type AttendeeState = "REGISTERED" | "INVOICED" | "PAID";
export type Attendee = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: string;
  job_title: string;
  state: AttendeeState;
  createdAt: Date;
  updatedAt: Date;
};

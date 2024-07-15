'use server';

import { revalidatePath } from 'next/cache';
import { sql } from '@vercel/postgres';
import { EmailTemplate } from '@/emails';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export type AttendeeState = 'REGISTERED' | 'INVOICED' | 'PAID';

export type Attendee = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    company: string;
    job_title: string;
    tickets_purchased: number;
    state: AttendeeState;
};

export async function getAttendees(): Promise<Attendee[]> {
    try {
        const { rows } = await sql`
        SELECT * FROM spring_end_grinding_course
        ORDER BY id ASC
      `;
        return rows as Attendee[];
    } catch (error) {
        console.error('Failed to fetch attendees:', error);
        return [];
    }
}

export async function addAttendee(attendee: Omit<Attendee, 'id' | 'state'>) {
    try {
        const { rows } = await sql`
        INSERT INTO spring_end_grinding_course (
          first_name, last_name, email, phone, company, job_title, 
          tickets_purchased, state
        ) VALUES (
          ${attendee.first_name}, ${attendee.last_name}, ${attendee.email}, 
          ${attendee.phone || null}, ${attendee.company || null}, ${
            attendee.job_title || null
        }, 
          ${attendee.tickets_purchased || null}, 'REGISTERED'
        )
        RETURNING id
      `;

        const newId = rows[0].id;

        // Send confirmation email
        await resend.emails.send({
            from: 'WAFIOS | Training Course <event@updates.wafios.online>', // Replace with your verified domain
            to: [attendee.email],
            subject: 'Welcome to the Spring End Grinding Training Course',
            react: EmailTemplate({
                first_name: attendee.first_name,
                last_name: attendee.last_name,
            }),
        });
        revalidatePath('/event-signups');
        return newId;
    } catch (error) {
        console.error('Failed to add attendee:', error);
        throw new Error('Failed to add attendee');
    }
}

export async function updateAttendeeStatus(
    id: number,
    newState: AttendeeState
) {
    try {
        await sql`
        UPDATE spring_end_grinding_course
        SET state = ${newState}
        WHERE id = ${id}
      `;
        revalidatePath('/event-signups');
    } catch (error) {
        console.error('Failed to update attendee status:', error);
        throw new Error('Failed to update attendee status');
    }
}

export async function exportRegistrationsToCSV() {
    try {
        const { rows } = await sql`
        SELECT * FROM spring_end_grinding_course
        ORDER BY id ASC
      `;

        const attendees = rows as Attendee[];

        // CSV header
        let csvContent =
            'ID,First Name,Last Name,Email,Phone,Company,Job Title,Tickets Purchased,State\n';

        // Add data rows
        attendees.forEach((attendee) => {
            csvContent += `${attendee.id},${attendee.first_name},${attendee.last_name},${attendee.email},${attendee.phone},${attendee.company},${attendee.job_title},${attendee.tickets_purchased},${attendee.state}\n`;
        });

        return csvContent;
    } catch (error) {
        console.error('Failed to export registrations:', error);
        throw new Error('Failed to export registrations');
    }
}

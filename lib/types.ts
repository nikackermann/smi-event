import { Event, EventRegistration } from "@prisma/client";

export type RegistrationStatus = "REGISTERED" | "INVOICED" | "PAID";

export type EventWithRegistrations = Event & {
  registrations: EventRegistration[];
};

export type EventRegistrationWithEvent = EventRegistration & {
  event: Event;
};

export type RegistrationFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  title: string;
  photoRelease?: boolean; // Made optional since it's always defaulted to true
};

export type { Event, EventRegistration };

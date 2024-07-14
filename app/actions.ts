'use server';

import { revalidatePath } from 'next/cache';
import { sql } from '@vercel/postgres';

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

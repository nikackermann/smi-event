import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { CheckCircle2, Clock, CreditCard } from 'lucide-react';
import { getAttendees } from '@/app/actions';
import { AttendeeActionMenu } from './AttendeeActionMenu';
import { Toaster } from 'sonner';

export async function EventSignupTable() {
    const attendees = await getAttendees();

    return (
        <>
            <Toaster />
            <Table>
                <TableCaption>
                    Spring End Grinding Course Attendees
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>First Name</TableHead>
                        <TableHead>Last Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Job Title</TableHead>
                        <TableHead>Tickets</TableHead>
                        <TableHead className="w-40">State</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {attendees.map((attendee) => (
                        <TableRow key={attendee.id}>
                            <TableCell>{attendee.first_name}</TableCell>
                            <TableCell>{attendee.last_name}</TableCell>
                            <TableCell>{attendee.email}</TableCell>
                            <TableCell>{attendee.phone}</TableCell>
                            <TableCell>{attendee.company}</TableCell>
                            <TableCell>{attendee.job_title}</TableCell>
                            <TableCell>{attendee.tickets_purchased}</TableCell>
                            <TableCell className="w-40">
                                <div className="flex items-center space-x-2">
                                    {attendee.state === 'PAID' && (
                                        <>
                                            <CheckCircle2 className="text-green-500 h-5 w-5 flex-shrink-0" />
                                            <span className="text-green-600 font-medium">
                                                Paid
                                            </span>
                                        </>
                                    )}
                                    {attendee.state === 'INVOICED' && (
                                        <>
                                            <CreditCard className="text-yellow-500 h-5 w-5 flex-shrink-0" />
                                            <span className="text-yellow-600 font-medium">
                                                Invoiced
                                            </span>
                                        </>
                                    )}
                                    {attendee.state === 'REGISTERED' && (
                                        <>
                                            <Clock className="text-blue-500 h-5 w-5 flex-shrink-0" />
                                            <span className="text-blue-600 font-medium">
                                                Registered
                                            </span>
                                        </>
                                    )}
                                </div>
                            </TableCell>
                            <TableCell>
                                <AttendeeActionMenu
                                    attendeeId={attendee.id}
                                    currentState={attendee.state}
                                    attendeeName={`${attendee.first_name} ${attendee.last_name}`}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}

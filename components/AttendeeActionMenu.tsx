'use client';

import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import { updateAttendeeStatus } from '@/app/actions';
import { AttendeeState } from '@/app/actions';
import { toast } from 'sonner';

interface AttendeeActionMenuProps {
    attendeeId: number;
    currentState: AttendeeState;
    attendeeName: string;
}

export function AttendeeActionMenu({
    attendeeId,
    currentState,
    attendeeName,
}: AttendeeActionMenuProps) {
    const handleUpdateStatus = async (newState: AttendeeState) => {
        try {
            await updateAttendeeStatus(attendeeId, newState);
            toast.success(`${attendeeName}'s status updated to ${newState}`);
        } catch (error) {
            toast.error(`Failed to update ${attendeeName}'s status`);
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {currentState !== 'REGISTERED' && (
                    <DropdownMenuItem
                        onClick={() => handleUpdateStatus('REGISTERED')}
                    >
                        Mark as Registered
                    </DropdownMenuItem>
                )}
                {currentState !== 'INVOICED' && (
                    <DropdownMenuItem
                        onClick={() => handleUpdateStatus('INVOICED')}
                    >
                        Mark as Invoiced
                    </DropdownMenuItem>
                )}
                {currentState !== 'PAID' && (
                    <DropdownMenuItem
                        onClick={() => handleUpdateStatus('PAID')}
                    >
                        Mark as Paid
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

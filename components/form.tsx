'use client';

import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { useTransition } from 'react';
import { addAttendee } from '@/app/actions';
import { toast } from 'sonner';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { InfoCircledIcon } from '@radix-ui/react-icons';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useServerAction } from 'zsa-react';

const formSchema = z.object({
    first_name: z.string().min(2, {
        message: 'Must be at least 2 characters.',
    }),
    last_name: z.string().min(2, {
        message: 'Must be at least 2 characters.',
    }),
    email: z.string().email(),
    phone: z.string().min(10, {
        message: 'Invalid phone number.',
    }),
    company: z.string().min(2, {
        message: 'Must be at least 2 characters.',
    }),
    job_title: z.string().min(2, {
        message: 'Must be at least 2 characters.',
    }),
    tickets_purchased: z.coerce
        .number()
        .int()
        .positive()
        .min(1, {
            message: 'Must be at least 1 ticket.',
        })
        .max(10, {
            message: 'Max purchasable tickets is 10.',
        }),
});

export default function ReactHookForm() {
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            company: '',
            job_title: '',
            tickets_purchased: 1,
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        startTransition(async () => {
            try {
                await addAttendee(values);
                form.reset();
                toast.success('Registration successful!', {
                    description:
                        'You will receive an email with more information shortly. Our accounts department will contact you regarding the invoice for your ticket purchase.',
                    duration: 10000, // Display for 10 seconds
                });
            } catch (error) {
                console.error('Failed to add attendee:', error);
                toast.error('Registration failed. Please try again.');
            }
        });
    }

    return (
        <div className="col-span-2 md:col-span-1 space-y-6">
            <div>
                <h2 className="text-2xl md:text-3xl font-bold">Register</h2>
                <p className="text-muted-foreground mt-2">
                    Fill out the form below to secure your spot.
                </p>
            </div>
            <Card className="space-y-4 bg-background p-6 rounded-lg border">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <FormField
                                    control={form.control}
                                    name="first_name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>First Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="First Name"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div>
                                <FormField
                                    control={form.control}
                                    name="last_name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Last Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Last Name"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <div>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Company Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Company Email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Phone Number"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <FormField
                                    control={form.control}
                                    name="company"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Company</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Company"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div>
                                <FormField
                                    control={form.control}
                                    name="job_title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Job Title</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Job Title"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <div>
                            <FormField
                                control={form.control}
                                name="tickets_purchased"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Number of Tickets</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Number of Tickets"
                                                type="number"
                                                min="1"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Alert>
                            <InfoCircledIcon className="h-4 w-4" />
                            <AlertTitle>Payment Process</AlertTitle>
                            <AlertDescription>
                                After registration, you will receive an email
                                with further details. Our accounts department
                                will contact you regarding the invoice for your
                                ticket purchase. Payment is due within 30 days
                                of invoice receipt.
                            </AlertDescription>
                        </Alert>
                        <Button
                            disabled={isPending}
                            type="submit"
                            className="w-full"
                        >
                            {isPending ? 'Submitting...' : 'Submit'}
                        </Button>
                    </form>
                </Form>
            </Card>
        </div>
    );
}

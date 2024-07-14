/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lRlOs5CNlxp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/ui/card';

export default function Component() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl md:text-3xl font-bold">Pricing</h2>
                <p className="text-muted-foreground mt-2">
                    The pricing breakdown for the training course.
                </p>
            </div>
            <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                <Card className="bg-card text-card-foreground">
                    <CardHeader>
                        <CardTitle>Non-SMI Member</CardTitle>
                        <CardDescription>
                            For companies not part of the SMI program.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-1">
                            <div className="text-4xl font-bold">$500</div>
                            <div className="text-sm text-muted-foreground">
                                First Company Registration
                            </div>
                        </div>
                        <div className="grid gap-1">
                            <div className="text-4xl font-bold">$300</div>
                            <div className="text-sm text-muted-foreground">
                                Additional Company Registrations
                            </div>
                        </div>
                        <div className="grid gap-1">
                            <div className="text-sm font-medium">
                                Lunch Provided
                            </div>
                            <div className="text-sm text-muted-foreground">
                                50% of revenue goes to SMI educational programs
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-card text-card-foreground">
                    <CardHeader>
                        <CardTitle>SMI Member</CardTitle>
                        <CardDescription>
                            For companies part of the SMI program.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-1">
                            <div className="text-4xl font-bold">$250</div>
                            <div className="text-sm text-muted-foreground">
                                First Company Registration
                            </div>
                        </div>
                        <div className="grid gap-1">
                            <div className="text-4xl font-bold">$150</div>
                            <div className="text-sm text-muted-foreground">
                                Additional Company Registrations
                            </div>
                        </div>
                        <div className="grid gap-1">
                            <div className="text-sm font-medium">
                                Lunch Provided
                            </div>
                            <div className="text-sm text-muted-foreground">
                                50% of revenue goes to SMI educational programs
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

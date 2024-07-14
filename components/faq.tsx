import { Card } from './ui/card';

export default function Component() {
    return (
        <div className="col-span-2 space-y-6">
            <div>
                <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
                <p className="text-muted-foreground mt-2">
                    Frequently asked questions about the training course.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-background p-6 rounded-lg border shadow-md">
                    <h3 className="text-xl font-bold">
                        What is the format of the course?
                    </h3>
                    <p className="text-muted-foreground mt-2">
                        The seminar will consist of a mix of keynote addresses,
                        panel discussions, and hands-on workshops. Attendees
                        will have the opportunity to learn from industry
                        experts, network with peers, and participate in
                        interactive sessions.
                    </p>
                </Card>
                <Card className="bg-background p-6 rounded-lg border shadow-md">
                    <h3 className="text-xl font-bold">
                        Who should attend the course?
                    </h3>
                    <p className="text-muted-foreground mt-2">
                        The seminar is open to web developers, designers, and
                        anyone interested in staying up-to-date with the latest
                        trends and best practices in web development. Whether
                        you&apos;re a seasoned professional or just starting
                        out, this event has something for everyone.
                    </p>
                </Card>
                <Card className="bg-background p-6 rounded-lg border shadow-md">
                    <h3 className="text-xl font-bold">
                        How does the purchasing process work?
                    </h3>
                    <p className="text-muted-foreground mt-2">
                        After you register for the seminar, we will send you a
                        bill via bill.com for the total amount of the purchased
                        tickets within 24 hours. Once the payment is processed,
                        your registration will be confirmed.
                    </p>
                </Card>
            </div>
        </div>
    );
}

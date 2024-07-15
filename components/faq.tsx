import { Card } from './ui/card';
/* eslint-disable react/no-unescaped-entities */

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
                    <div className="space-y-4 text-muted-foreground mt-4">
                        <p>
                            Our course is designed to provide a comprehensive
                            learning experience, balancing theoretical knowledge
                            with hands-on practice. The format is structured as
                            follows:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <span className="font-semibold">
                                    Theoretical Content (2/3 of the course):
                                </span>{' '}
                                Covering in-depth knowledge of spring end
                                grinding processes, machinery, technology, and
                                automation.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Practical Application (1/3 of the course):
                                </span>{' '}
                                Participants get hands-on experience with our
                                state-of-the-art grinder and loading system.
                            </li>
                        </ul>
                        <p>
                            This balanced approach ensures that attendees not
                            only understand the principles behind spring end
                            grinding but also gain valuable practical skills
                            they can apply in their work environments.
                        </p>
                    </div>
                </Card>
                <Card className="bg-background p-6 rounded-lg border shadow-md">
                    <h3 className="text-xl font-bold">
                        Who should attend the course?
                    </h3>
                    <div className="space-y-4 text-muted-foreground mt-4">
                        <p>
                            The Spring End Grinding Training Course is designed
                            to be relevant and valuable for all professionals
                            involved in the grinding process, including:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {[
                                'Operators',
                                'Engineers',
                                'Technicians',
                                'Quality Control Specialists',
                                'Production Managers',
                                'R&D Personnel',
                                'Process Improvement Specialists',
                            ].map((role) => (
                                <li
                                    key={role}
                                    className="flex items-center space-x-2"
                                >
                                    <svg
                                        className="w-5 h-5 text-green-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span>{role}</span>
                                </li>
                            ))}
                        </ul>
                        <p>
                            Whether you're hands-on with the machinery or
                            overseeing operations, this course offers insights
                            and skills that can enhance your understanding and
                            contribution to the grinding process.
                        </p>
                    </div>
                </Card>
                <Card className="bg-background p-6 rounded-lg border shadow-md">
                    <h3 className="text-xl font-bold">
                        Where can I book accommodation for the course?
                    </h3>
                    <div className="text-muted-foreground mt-4 rounded-lg">
                        <h3 className="text-muted-foreground mb-3">
                            We've partnered with a nearby hotel for your
                            convenience:
                        </h3>

                        <p className="mb-2">
                            <strong>Partner Hotel:</strong> EVEN Hotel
                            Chicago-Tinley Park Conv Center
                        </p>

                        <p className="mb-2">
                            <strong>WAFIOS Rate:</strong> $112++ per night
                            (Jan-Dec 2024)
                        </p>

                        <p className="mb-2">
                            <strong>Amenities:</strong> Free Wi-Fi, Parking, 5.9
                            miles from WAFIOS
                        </p>

                        <p className="mb-2">
                            <strong>Booking:</strong>{' '}
                            <a
                                href="https://www.ihg.com/evenhotels/hotels/us/en/tinley-park/chitn/hoteldetail?fromRedirect=true&qSrt=sBR&qIta=99502056&icdv=99502056&qSlH=CHITN&qCpid=100269073&qAAR=IP7WM&qRtP=IP7WM&setPMCookies=true&qSHBrC=VN&qDest=18501%20Convention%20Center%20Drive%2C%20Tinley%20Park%2C%20IL%2C%20US&srb_u=1"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Click here to book with WAFIOS rate
                            </a>
                        </p>

                        <p>
                            <strong>Contact:</strong> 1-708-444-1100 or{' '}
                            <a
                                href="mailto:evenhotel@eventpcc.com"
                                className="text-blue-600 hover:underline"
                            >
                                evenhotel@eventpcc.com
                            </a>
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
}

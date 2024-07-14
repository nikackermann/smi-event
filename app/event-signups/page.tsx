import { EventSignupTable } from '@/components/EventSignupTable';
import EventHeader from '@/components/EventHeader';

export default function EventSignups() {
    return (
        <div>
            <EventHeader />
            <div className="container mx-auto py-2">
                <EventSignupTable />
            </div>
        </div>
    );
}

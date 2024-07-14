import Link from 'next/link';

export default function EventHeader() {
    return (
        <div className="bg-brand-500 text-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                    Spring End Grinding Course Signups
                </h1>
                <Link
                    href="/api/export-data"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-brand-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-400"
                >
                    Export Data
                </Link>
            </div>
        </div>
    );
}

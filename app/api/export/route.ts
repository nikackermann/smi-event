// app/api/export-registrations/route.ts
import { NextResponse } from 'next/server';
import { exportRegistrationsToCSV } from '@/app/actions'; // Adjust the import path as needed

export async function GET() {
    try {
        const csvContent = await exportRegistrationsToCSV();

        return new NextResponse(csvContent, {
            status: 200,
            headers: {
                'Content-Type': 'text/csv',
                'Content-Disposition': 'attachment; filename=registrations.csv',
            },
        });
    } catch (error) {
        console.error('Export failed:', error);
        return new NextResponse('Export failed', { status: 500 });
    }
}

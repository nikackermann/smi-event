import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';

interface Props {
    first_name: string;
    last_name: string;
}

const main = {
    backgroundColor: '#ffffff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
    width: '580px',
};

const logo = {
    margin: '0 auto',
};

const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
};

const heading = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '48px',
    marginBottom: '16px',
};

const button = {
    backgroundColor: '#15458E',
    borderRadius: '3px',
    color: '#fff',
    fontSize: '16px',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
    padding: '12px',
};

const hr = {
    borderColor: '#cccccc',
    margin: '20px 0',
};
/* eslint-disable react/no-unescaped-entities */
export const EmailTemplate = ({ first_name, last_name }: Props) => (
    <Html>
        <Head />
        <Preview>
            Welcome to the Spring End Grinding Training Course! Here's what you
            need to know.
        </Preview>
        <Body style={main}>
            <Container style={container}>
                <Img
                    src="https://sagd.wafios.online/static/logo.png"
                    width="170"
                    alt="WAFIOS"
                    style={logo}
                />
                <Text style={paragraph}>
                    Dear {first_name} {last_name},
                </Text>
                <Text style={paragraph}>
                    Thank you for registering for the Spring End Grinding
                    Training Course. We're excited to have you join us for this
                    comprehensive learning experience.
                </Text>
                <Hr style={hr} />
                <Heading style={heading}>Event Details</Heading>
                <Text style={paragraph}>
                    <strong>Date:</strong> September 23rd, 2025
                    <br />
                    <strong>Time:</strong> 9 AM - 5 PM
                    <br />
                    <strong>Location:</strong> WAFIOS Machinery Corporation,
                    Branford, CT
                </Text>
                <Hr style={hr} />
                <Heading style={heading}>What to Expect</Heading>
                <Text style={paragraph}>
                    During this course, you'll gain in-depth knowledge on:
                </Text>
                <ul>
                    <li>Spring end grinding machinery</li>
                    <li>Process optimization</li>
                    <li>Latest technology and automation</li>
                    <li>Software applications in grinding</li>
                </ul>
                <Text style={paragraph}>
                    Lunch will be provided, and you'll receive a certificate of
                    completion at the end of the course.
                </Text>
                <Hr style={hr} />
                <Heading style={heading}>Payment Information</Heading>
                <Text style={paragraph}>
                    Our accounts department will be in touch shortly with an
                    invoice for your course registration. Payment is due upon
                    invoice receipt and prior to event.
                </Text>
                <Hr style={hr} />
                <Heading style={heading}>Getting There</Heading>
                <Text style={paragraph}>
                    The event is located at WAFIOS Machinery Corporation in
                    Branford, CT. Ample parking is available at the venue.
                </Text>
                <Text style={paragraph}>
                    <strong>Recommended Accommodation:</strong> Holiday Inn Express,
                    309 E Main St, Branford, CT for convenient lodging near the venue.
                </Text>
                <Hr style={hr} />
                <Heading style={heading}>Contact Information</Heading>
                <Text style={paragraph}>
                    If you have any questions, please don't hesitate to reach
                    out:
                </Text>
                <Text style={paragraph}>
                    <strong>Name:</strong> Brian Davi
                    <br />
                    <strong>Email:</strong>{' '}
                    <Link href="mailto:BrianD@wafios.us">BrianD@wafios.us</Link>
                    <br />
                    <strong>Phone:</strong> 203-871-2072
                </Text>
                <Hr style={hr} />
                <Text style={paragraph}>
                    We look forward to seeing you at the Spring End Grinding
                    Training Course!
                </Text>
                <Text style={paragraph}>
                    Best regards,
                    <br />
                    The WAFIOS Team
                </Text>
            </Container>
        </Body>
    </Html>
);

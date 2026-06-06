import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Log the form submission (in production, you would send an email here)
        console.log('📧 Contact Form Submission:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        console.log('Timestamp:', new Date().toISOString());
        console.log('---');

        // TODO: In production, integrate with an email service like:
        // - Resend (https://resend.com)
        // - SendGrid
        // - Nodemailer with SMTP
        // 
        // Example with Resend:
        // const resend = new Resend(process.env.RESEND_API_KEY);
        // await resend.emails.send({
        //   from: 'portfolio@zunedaalim.com',
        //   to: 'your-email@example.com',
        //   subject: `New Contact Form Submission from ${name}`,
        //   html: `
        //     <h2>New Contact Form Submission</h2>
        //     <p><strong>Name:</strong> ${name}</p>
        //     <p><strong>Email:</strong> ${email}</p>
        //     <p><strong>Message:</strong></p>
        //     <p>${message}</p>
        //   `
        // });

        return NextResponse.json(
            {
                success: true,
                message: 'Message received successfully'
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

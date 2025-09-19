import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';


export async function POST(request: NextRequest) {
const resend = new Resend("re_5zLhjnSP_5qZv4MxKZkpUoZzecTG2y4th");
try {
    const { name, email, subject, message, service, company, captchaToken } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate CAPTCHA
    if (!captchaToken) {
      return NextResponse.json(
        { error: 'CAPTCHA verification is required' },
        { status: 400 }
      );
    }

    // Verify CAPTCHA with Google
    const secretKey = process.env.RECAPTCHA_SECRET_KEY || '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe';
    
    // Log warning if using test key
    if (!process.env.RECAPTCHA_SECRET_KEY || process.env.RECAPTCHA_SECRET_KEY === 'your_secret_key_here') {
      console.warn('⚠️ Using test reCAPTCHA secret key. Configure RECAPTCHA_SECRET_KEY for production.');
    }
    
    const captchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${captchaToken}`,
    });

    const captchaResult = await captchaResponse.json();
    
    if (!captchaResult.success) {
      console.error('CAPTCHA verification failed:', captchaResult);
      return NextResponse.json(
        { error: 'CAPTCHA verification failed. Please try again.' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    // if (!process.env.RESEND_API_KEY) {
    //   console.error('RESEND_API_KEY is not configured');
    //   console.log(process.env.RESEND_API_KEY);
    //   return NextResponse.json(
    //     { error: 'Email service not configured' },
    //     { status: 500 }
    //   );
    // }

    // Log the form submission
    console.log('Contact Form Submission:', {
      name,
      email,
      company,
      subject,
      service,
      message,
      timestamp: new Date().toISOString()
    });

    // Create HTML email template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #FFD700, #FFA500); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">eVALaunch Website</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 25px;">
              <h2 style="color: #2563eb; margin: 0 0 15px 0; font-size: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Contact Information</h2>
              <p style="margin: 8px 0; font-size: 16px;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 8px 0; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
              ${company ? `<p style="margin: 8px 0; font-size: 16px;"><strong>Company:</strong> ${company}</p>` : ''}
            </div>

            <div style="margin-bottom: 25px;">
              <h2 style="color: #2563eb; margin: 0 0 15px 0; font-size: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Message Details</h2>
              ${subject ? `<p style="margin: 8px 0; font-size: 16px;"><strong>Subject:</strong> ${subject}</p>` : ''}
              ${service ? `<p style="margin: 8px 0; font-size: 16px;"><strong>Service Interest:</strong> ${service}</p>` : ''}
            </div>

            <div style="margin-bottom: 25px;">
              <h2 style="color: #2563eb; margin: 0 0 15px 0; font-size: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Message</h2>
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb;">
                <p style="margin: 0; font-size: 16px; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border: 1px solid #bae6fd; margin-top: 25px;">
              <p style="margin: 0; color: #0369a1; font-size: 14px;">
                <strong>📧 Reply directly to this email to respond to ${name}</strong><br>
                <strong>🕒 Received:</strong> ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'eVALaunch Contact Form <onboarding@resend.dev>',
      to: ['ashish.amrev@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: htmlContent,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);

    return NextResponse.json(
      { message: 'Form submitted successfully. We will contact you soon!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
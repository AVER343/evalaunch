import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const {
      name,
      email,
      phone,
      projectType,
      budget,
      timeline,
      description,
      captchaToken
    } = await request.json();

    // Validate required fields
    if (!name || !email || !projectType || !budget || !timeline || !description) {
      return NextResponse.json(
        { error: 'All fields are required' },
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

    // Send email with project details
    const { data, error } = await resend.emails.send({
      from: 'eVALaunche <noreply@eVALaunche.com>',
      to: ['ashish.amrev@gmail.com'],
      subject: `New Project Quote Request - ${projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">New Project Quote Request</h1>
            <p style="color: white; margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">eVALaunche Tech Solutions</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 24px; border-bottom: 2px solid #fbbf24; padding-bottom: 10px;">Project Information</h2>
            
            <div style="margin-bottom: 25px;">
              <h3 style="color: #374151; margin: 0 0 10px 0; font-size: 18px;">Contact Details</h3>
              <div style="background: #f3f4f6; padding: 15px; border-radius: 8px;">
                <p style="margin: 5px 0; color: #1f2937;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 5px 0; color: #1f2937;"><strong>Email:</strong> ${email}</p>
                ${phone ? `<p style="margin: 5px 0; color: #1f2937;"><strong>Phone:</strong> ${phone}</p>` : ''}
              </div>
            </div>
            
            <div style="margin-bottom: 25px;">
              <h3 style="color: #374151; margin: 0 0 10px 0; font-size: 18px;">Project Requirements</h3>
              <div style="background: #f3f4f6; padding: 15px; border-radius: 8px;">
                <p style="margin: 5px 0; color: #1f2937;"><strong>Project Type:</strong> ${projectType}</p>
                <p style="margin: 5px 0; color: #1f2937;"><strong>Budget Range:</strong> ${budget}</p>
                <p style="margin: 5px 0; color: #1f2937;"><strong>Timeline:</strong> ${timeline}</p>
              </div>
            </div>
            
            <div style="margin-bottom: 25px;">
              <h3 style="color: #374151; margin: 0 0 10px 0; font-size: 18px;">Project Description</h3>
              <div style="background: #f3f4f6; padding: 15px; border-radius: 8px;">
                <p style="margin: 0; color: #1f2937; line-height: 1.6;">${description}</p>
              </div>
            </div>
            
            <div style="background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); padding: 20px; border-radius: 8px; text-align: center; margin-top: 30px;">
              <h3 style="color: white; margin: 0 0 10px 0; font-size: 20px;">Ready to Get Started?</h3>
              <p style="color: white; margin: 0; font-size: 16px; opacity: 0.9;">This client is interested in a ${projectType} project with a ${budget} budget. Contact them within 24 hours for the best conversion rate!</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; margin: 0; font-size: 14px;">
                This quote request was submitted through the eVALaunche website contact form.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    console.log('Project details email sent successfully:', data);
    return NextResponse.json({ message: 'Project details sent successfully' });

  } catch (error) {
    console.error('Error processing project details:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
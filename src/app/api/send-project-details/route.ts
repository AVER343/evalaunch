import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const {
      name,
      email,
      company,
      phone,
      projectName,
      projectType,
      projectCategory,
      description,
      goals,
      targetAudience,
      platform,
      features,
      integrations,
      thirdPartyServices,
      timeline,
      budget,
      urgency,
      currentChallenges,
      successMetrics,
      additionalNotes,
      captchaToken
    } = await request.json();

    // Validate required fields
    if (!name || !email || !projectName || !projectType || !description || !goals) {
      return NextResponse.json(
        { error: 'Name, email, project name, project type, description, and goals are required' },
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

    // Log the project submission
    console.log('Project Details Submission:', {
      name,
      email,
      company,
      projectName,
      projectType,
      projectCategory,
      timeline,
      budget,
      urgency,
      timestamp: new Date().toISOString()
    });

    // Create HTML email template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Project Details Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #FFD700, #FFA500); padding: 30px; border-radius: 15px 15px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">New Project Details Submission</h1>
            <p style="color: white; margin: 10px 0 0 0; font-size: 18px;">eVALaunch Website - Project Inquiry</p>
          </div>
          
          <div style="background: white; padding: 40px; border-radius: 0 0 15px 15px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
            
            <!-- Contact Information -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #2563eb; margin: 0 0 20px 0; font-size: 22px; border-bottom: 3px solid #e5e7eb; padding-bottom: 10px;">Contact Information</h2>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                <div>
                  <p style="margin: 8px 0; font-size: 16px;"><strong>Name:</strong> ${name}</p>
                  <p style="margin: 8px 0; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
                </div>
                <div>
                  ${company ? `<p style="margin: 8px 0; font-size: 16px;"><strong>Company:</strong> ${company}</p>` : ''}
                  ${phone ? `<p style="margin: 8px 0; font-size: 16px;"><strong>Phone:</strong> ${phone}</p>` : ''}
                </div>
              </div>
            </div>

            <!-- Project Overview -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #2563eb; margin: 0 0 20px 0; font-size: 22px; border-bottom: 3px solid #e5e7eb; padding-bottom: 10px;">Project Overview</h2>
              <div style="background: #f8fafc; padding: 25px; border-radius: 10px; border-left: 5px solid #2563eb;">
                <p style="margin: 0 0 15px 0; font-size: 18px;"><strong>Project Name:</strong> ${projectName}</p>
                <p style="margin: 0 0 15px 0; font-size: 16px;"><strong>Project Type:</strong> ${projectType}</p>
                ${projectCategory ? `<p style="margin: 0 0 15px 0; font-size: 16px;"><strong>Category:</strong> ${projectCategory}</p>` : ''}
                <p style="margin: 0 0 15px 0; font-size: 16px;"><strong>Description:</strong></p>
                <p style="margin: 0 0 15px 0; font-size: 16px; white-space: pre-wrap; background: white; padding: 15px; border-radius: 8px;">${description}</p>
                <p style="margin: 0 0 15px 0; font-size: 16px;"><strong>Goals:</strong></p>
                <p style="margin: 0 0 15px 0; font-size: 16px; white-space: pre-wrap; background: white; padding: 15px; border-radius: 8px;">${goals}</p>
                ${targetAudience ? `<p style="margin: 0 0 15px 0; font-size: 16px;"><strong>Target Audience:</strong> ${targetAudience}</p>` : ''}
              </div>
            </div>

            <!-- Technical Requirements -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #2563eb; margin: 0 0 20px 0; font-size: 22px; border-bottom: 3px solid #e5e7eb; padding-bottom: 10px;">Technical Requirements</h2>
              <div style="background: #f8fafc; padding: 25px; border-radius: 10px; border-left: 5px solid #10b981;">
                ${platform && platform.length > 0 ? `<p style="margin: 0 0 15px 0; font-size: 16px;"><strong>Platforms:</strong> ${platform.join(', ')}</p>` : ''}
                ${features && features.length > 0 ? `<p style="margin: 0 0 15px 0; font-size: 16px;"><strong>Required Features:</strong> ${features.join(', ')}</p>` : ''}
                ${integrations ? `<p style="margin: 0 0 15px 0; font-size: 16px;"><strong>Integrations:</strong> ${integrations}</p>` : ''}
                ${thirdPartyServices ? `<p style="margin: 0 0 15px 0; font-size: 16px;"><strong>Other Services:</strong> ${thirdPartyServices}</p>` : ''}
              </div>
            </div>

            <!-- Timeline & Budget -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #2563eb; margin: 0 0 20px 0; font-size: 22px; border-bottom: 3px solid #e5e7eb; padding-bottom: 10px;">Timeline & Budget</h2>
              <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
                <div style="background: #f0f9ff; padding: 20px; border-radius: 10px; text-align: center;">
                  <h3 style="margin: 0 0 10px 0; color: #0369a1; font-size: 16px;">Timeline</h3>
                  <p style="margin: 0; font-size: 18px; font-weight: bold;">${timeline}</p>
                </div>
                <div style="background: #f0fdf4; padding: 20px; border-radius: 10px; text-align: center;">
                  <h3 style="margin: 0 0 10px 0; color: #166534; font-size: 16px;">Budget</h3>
                  <p style="margin: 0; font-size: 18px; font-weight: bold;">${budget || 'Not specified'}</p>
                </div>
                <div style="background: #fef3c7; padding: 20px; border-radius: 10px; text-align: center;">
                  <h3 style="margin: 0 0 10px 0; color: #92400e; font-size: 16px;">Urgency</h3>
                  <p style="margin: 0; font-size: 18px; font-weight: bold;">${urgency || 'Not specified'}</p>
                </div>
              </div>
            </div>

            <!-- Additional Information -->
            ${currentChallenges || successMetrics || additionalNotes ? `
            <div style="margin-bottom: 30px;">
              <h2 style="color: #2563eb; margin: 0 0 20px 0; font-size: 22px; border-bottom: 3px solid #e5e7eb; padding-bottom: 10px;">Additional Information</h2>
              <div style="background: #f8fafc; padding: 25px; border-radius: 10px; border-left: 5px solid #8b5cf6;">
                ${currentChallenges ? `<p style="margin: 0 0 15px 0; font-size: 16px;"><strong>Current Challenges:</strong></p><p style="margin: 0 0 15px 0; font-size: 16px; white-space: pre-wrap; background: white; padding: 15px; border-radius: 8px;">${currentChallenges}</p>` : ''}
                ${successMetrics ? `<p style="margin: 0 0 15px 0; font-size: 16px;"><strong>Success Metrics:</strong></p><p style="margin: 0 0 15px 0; font-size: 16px; white-space: pre-wrap; background: white; padding: 15px; border-radius: 8px;">${successMetrics}</p>` : ''}
                ${additionalNotes ? `<p style="margin: 0 0 15px 0; font-size: 16px;"><strong>Additional Notes:</strong></p><p style="margin: 0 0 15px 0; font-size: 16px; white-space: pre-wrap; background: white; padding: 15px; border-radius: 8px;">${additionalNotes}</p>` : ''}
              </div>
            </div>
            ` : ''}

            <!-- Action Required -->
            <div style="background: #fef2f2; padding: 25px; border-radius: 10px; border: 2px solid #fecaca; margin-top: 30px;">
              <h3 style="margin: 0 0 15px 0; color: #dc2626; font-size: 18px;">📋 Action Required</h3>
              <p style="margin: 0 0 10px 0; color: #7f1d1d; font-size: 16px;">
                <strong>Next Steps:</strong>
              </p>
              <ul style="margin: 0; padding-left: 20px; color: #7f1d1d; font-size: 16px;">
                <li>Review the project requirements and scope</li>
                <li>Prepare a detailed project proposal with timeline and cost estimate</li>
                <li>Schedule a consultation call with the client</li>
                <li>Send follow-up email within 24 hours</li>
              </ul>
            </div>

            <!-- Footer -->
            <div style="background: #f0f9ff; padding: 20px; border-radius: 10px; border: 1px solid #bae6fd; margin-top: 25px;">
              <p style="margin: 0; color: #0369a1; font-size: 14px;">
                <strong>📧 Reply directly to this email to respond to ${name}</strong><br>
                <strong>🕒 Received:</strong> ${new Date().toLocaleString()}<br>
                <strong>📱 Project:</strong> ${projectName}
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'eVALaunch Project Inquiry <onboarding@resend.dev>',
      to: ['ashish.amrev@gmail.com'],
      subject: `New Project Inquiry: ${projectName} - ${name}`,
      html: htmlContent,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send project details' },
        { status: 500 }
      );
    }

    console.log('Project details email sent successfully:', data);

    return NextResponse.json(
      { message: 'Project details submitted successfully. We will contact you within 24 hours with a detailed proposal!' },
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

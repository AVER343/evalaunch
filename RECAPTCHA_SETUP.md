# reCAPTCHA Setup Guide for eVALaunche Contact Form

## Overview
The contact form is protected with Google reCAPTCHA v2 to prevent spam and bot submissions. This guide will help you set up production-ready reCAPTCHA keys.

## 🚀 Getting Your reCAPTCHA Keys

### Step 1: Create Google reCAPTCHA Account
1. Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Sign in with your Google account
3. Click "Create" to add a new site

### Step 2: Configure Your Site
1. **Label**: Enter a descriptive name (e.g., "eVALaunche Contact Form")
2. **reCAPTCHA type**: Select **"reCAPTCHA v2"** → **"I'm not a robot" Checkbox**
3. **Domains**: Add your domains:
   - For development: `localhost`
   - For production: `your-domain.com` (e.g., `eVALaunche.vercel.app`)
4. **Accept Terms**: Check the terms of service
5. Click **"Submit"**

### Step 3: Get Your Keys
After creating the site, you'll see two keys:
- **Site Key** (public) - Used in frontend
- **Secret Key** (private) - Used in backend

## 🔧 Environment Configuration

### For Local Development
Create `.env.local` file:
```env
# reCAPTCHA Configuration
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_actual_site_key_here
RECAPTCHA_SECRET_KEY=your_actual_secret_key_here

# Resend API Key
RESEND_API_KEY=re_5zLhjnSP_5qZv4MxKZkpUoZzecTG2y4th
```

### For Vercel Deployment
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these variables:

| Variable | Value | Description |
|----------|-------|-------------|
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | `your_site_key` | Public reCAPTCHA key |
| `RECAPTCHA_SECRET_KEY` | `your_secret_key` | Private reCAPTCHA key |
| `RESEND_API_KEY` | `re_5zLhjnSP_5qZv4MxKZkpUoZzecTG2y4th` | Resend email API key |

## 🧪 Testing Your Setup

### Development Testing
1. Start your development server: `npm run dev`
2. Navigate to the contact form
3. You should see the reCAPTCHA widget
4. If using placeholder keys, you'll see a warning message
5. Complete the reCAPTCHA and submit the form

### Production Testing
1. Deploy with your real reCAPTCHA keys
2. Test the contact form on your live domain
3. Verify emails are being sent successfully
4. Check that CAPTCHA verification is working

## ⚠️ Important Notes

### Security
- **Never commit real keys to Git** - Use environment variables only
- **Keep secret key private** - Only use in backend/server-side code
- **Site key is public** - Safe to use in frontend code

### Domain Configuration
- Add all domains where the form will be used
- Include both `www` and non-`www` versions if needed
- For Vercel: Add both `your-app.vercel.app` and `your-custom-domain.com`

### Fallback Behavior
- If no keys are configured, the form uses Google's test keys
- Test keys only work on `localhost` and `127.0.0.1`
- You'll see warning messages when using test keys

## 🔍 Troubleshooting

### Common Issues

**"reCAPTCHA verification failed"**
- Check that your secret key is correct
- Verify the domain is added to your reCAPTCHA site
- Ensure the site key matches your reCAPTCHA configuration

**"Please complete the CAPTCHA verification"**
- Check that the site key is correctly set
- Verify the domain is whitelisted in reCAPTCHA admin
- Clear browser cache and try again

**CAPTCHA not loading**
- Check browser console for errors
- Verify the site key is set correctly
- Ensure you're using reCAPTCHA v2 (not v3)

### Debug Mode
The application includes debug warnings:
- Frontend: Shows warning if using placeholder keys
- Backend: Logs warning if using test secret key
- Check browser console and server logs for details

## 📊 Monitoring

### reCAPTCHA Dashboard
- Monitor verification attempts
- Check for suspicious activity
- View statistics and analytics

### Vercel Logs
- Check function logs for CAPTCHA verification errors
- Monitor email sending success rates
- Track form submission patterns

## 🚀 Production Checklist

- [ ] Created reCAPTCHA site with correct domain
- [ ] Added both site key and secret key to environment variables
- [ ] Tested form submission on live domain
- [ ] Verified email delivery
- [ ] Checked that CAPTCHA verification works
- [ ] Removed any test/placeholder keys
- [ ] Monitored reCAPTCHA dashboard for activity

## 📞 Support

If you encounter issues:
1. Check the reCAPTCHA admin dashboard
2. Verify environment variables are set correctly
3. Test with a simple form submission
4. Check browser console and server logs
5. Review this setup guide

**reCAPTCHA Support:**
- 📚 Documentation: [developers.google.com/recaptcha](https://developers.google.com/recaptcha)
- 💬 Community: [Google reCAPTCHA Help](https://support.google.com/recaptcha)

Your contact form is now protected with production-ready reCAPTCHA! 🎉

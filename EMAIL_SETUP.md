# Email Setup Guide for eVALaunch Contact Form

## Overview
The contact form is configured to send emails to **ashish.amrev@gmail.com** when someone submits the form. This setup uses **Resend.com** - a modern, reliable email API that's perfect for production use.

## 🚀 Cloud Deployment Setup

### 1. Choose Your Platform
- **Vercel** (Recommended) - Easiest and most reliable
- **Netlify** - Good alternative
- **Railway** - Simple deployment
- **DigitalOcean App Platform** - More control

### 2. Resend.com Setup (Required)
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address
4. Go to "API Keys" in your dashboard
5. Create a new API key
6. Copy the API key (starts with `re_`)

### 3. Deploy to Vercel (Recommended)

#### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

#### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js settings

#### Step 3: Configure Environment Variables
In Vercel Dashboard:
1. Go to your project → Settings → Environment Variables
2. Add this variable:

| Variable | Value | Description |
|----------|-------|-------------|
| `RESEND_API_KEY` | `re_gMRiL8iN_9ovKQQC9i4AUaZYQSubhqgyC` | Your Resend API key |

**That's it!** No Gmail setup, no app passwords needed.

### 4. Local Development Setup
Create `.env.local` in your project root:
```env
RESEND_API_KEY=re_gMRiL8iN_9ovKQQC9i4AUaZYQSubhqgyC
```

#### Step 4: Deploy
1. Click "Deploy" in Vercel
2. Wait for deployment to complete
3. Your site will be live at `https://your-project-name.vercel.app`

## 📧 Email Features
- ✅ **Sends to**: ashish.amrev@gmail.com
- ✅ **Includes**: Name, email, company, subject, service, message
- ✅ **Professional**: Beautiful HTML email template with yellow/blue theme
- ✅ **Reliable**: Powered by Resend.com (99.9% delivery rate)
- ✅ **Error Handling**: Graceful fallbacks and user feedback
- ✅ **Mobile-Friendly**: Responsive email design
- ✅ **Fast**: Sub-second email delivery

## 🔐 Security Features
- ✅ **No passwords in code** - Only API key via environment variables
- ✅ **Resend API** - Enterprise-grade security and reliability
- ✅ **Environment validation** - Checks for required API key
- ✅ **Encrypted storage** - Vercel encrypts environment variables
- ✅ **HTTPS only** - Automatic SSL certificates
- ✅ **Rate limiting** - Built-in protection against spam

## 🛠️ Local Development (Optional)

For local testing, create `.env.local`:
```env
RESEND_API_KEY=re_xxxxxxxxx
```

**Never commit `.env.local` to Git!**

## 🚨 Troubleshooting

### Email Not Sending
- ✅ Check `RESEND_API_KEY` in Vercel dashboard
- ✅ Verify Resend API key is correct (starts with `re_`)
- ✅ Check Vercel function logs for errors
- ✅ Ensure Resend account is verified

### Build Errors
- ✅ Ensure all dependencies are in package.json
- ✅ Check TypeScript errors
- ✅ Verify Next.js configuration

### Common Issues
- **"Email service not configured"** → Add `RESEND_API_KEY` in Vercel
- **"Invalid API key"** → Check Resend API key format
- **"Rate limit exceeded"** → Resend has generous free limits (3,000 emails/month)

## 📊 Monitoring

### Vercel Dashboard
- Function execution logs
- Performance metrics
- Error tracking
- Environment variable status

### Resend Dashboard
- Email delivery statistics
- Bounce rates and delivery status
- API usage and limits
- Real-time email logs

### Email Monitoring
- Check Gmail inbox for test emails
- Monitor delivery rates in Resend dashboard
- Track form submission success

## 🎯 Testing Your Deployment

1. **Test the contact form** on your live site
2. **Check your Gmail inbox** for the email
3. **Verify all form fields** are included in the email
4. **Test error handling** by submitting incomplete forms

## 🔄 Why Resend?

**Resend is already configured and recommended because:**
- ✅ **Free tier**: 3,000 emails/month
- ✅ **Developer-friendly**: Simple API
- ✅ **High deliverability**: 99.9% delivery rate
- ✅ **No setup complexity**: Just an API key
- ✅ **Modern**: Built for developers
- ✅ **Reliable**: Enterprise-grade infrastructure

**Other options** (if you prefer):
- **SendGrid** - More features, complex setup
- **Mailgun** - Good alternative
- **AWS SES** - Cheaper at scale, more complex

## 📞 Support

If you encounter issues:
1. Check Vercel function logs
2. Verify `RESEND_API_KEY` is set correctly
3. Check Resend dashboard for API status
4. Test with a simple email first
5. Review the deployment guide in `DEPLOYMENT_GUIDE.md`

**Resend Support:**
- 📧 Email: support@resend.com
- 📚 Docs: [resend.com/docs](https://resend.com/docs)
- 💬 Discord: [resend.com/discord](https://resend.com/discord)

## 🚀 Quick Deploy Commands

```bash
# Build and deploy
npm run deploy

# Or manual deployment
npm run build
git add .
git commit -m "Deploy: $(date)"
git push origin main
```

Your email system is now production-ready and secure! 🎉

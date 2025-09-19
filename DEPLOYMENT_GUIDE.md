# eVALaunch Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (free tier available)
- Gmail account with App Password

### Step 1: Prepare Your Repository
1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings

### Step 3: Configure Environment Variables
In Vercel Dashboard:
1. Go to your project → Settings → Environment Variables
2. Add these variables:

```
EMAIL_USER = your-gmail@gmail.com
EMAIL_PASS = your-gmail-app-password
```

**Important**: 
- Use your Gmail address for `EMAIL_USER`
- Use Gmail App Password (not regular password) for `EMAIL_PASS`
- Make sure to enable 2FA on Gmail first

### Step 4: Deploy
1. Click "Deploy" in Vercel
2. Wait for deployment to complete
3. Your site will be live at `https://your-project-name.vercel.app`

---

## 🔐 Gmail App Password Setup

### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable "2-Step Verification"

### Step 2: Generate App Password
1. Go to "2-Step Verification" settings
2. Scroll down to "App passwords"
3. Select "Mail" as the app
4. Copy the generated 16-character password
5. Use this password in Vercel environment variables

---

## 🌐 Alternative Deployment Options

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables in Netlify dashboard

### Railway
1. Connect GitHub repository
2. Add environment variables
3. Deploy automatically

### DigitalOcean App Platform
1. Connect GitHub repository
2. Configure environment variables
3. Deploy with automatic scaling

---

## 🔧 Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `EMAIL_USER` | Your Gmail address | `yourname@gmail.com` |
| `EMAIL_PASS` | Gmail App Password | `abcd efgh ijkl mnop` |

---

## 🛠️ Local Development

For local development, create `.env.local`:
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
```

**Never commit `.env.local` to Git!**

---

## 📧 Email Service Features

- ✅ Sends to: ashish.amrev@gmail.com
- ✅ Professional HTML template
- ✅ Includes all form fields
- ✅ Error handling
- ✅ Spam protection
- ✅ Mobile-friendly emails

---

## 🚨 Security Best Practices

1. **Never store passwords in code**
2. **Use environment variables only**
3. **Enable 2FA on Gmail**
4. **Use App Passwords, not regular passwords**
5. **Keep environment variables secret**

---

## 🔍 Troubleshooting

### Email Not Sending
- Check environment variables in Vercel
- Verify Gmail App Password is correct
- Check Vercel function logs

### Build Errors
- Ensure all dependencies are in package.json
- Check TypeScript errors
- Verify Next.js configuration

### Domain Issues
- Custom domain setup in Vercel
- SSL certificate auto-provisioned
- DNS configuration

---

## 📊 Monitoring

### Vercel Analytics
- Built-in analytics
- Performance monitoring
- Error tracking

### Email Monitoring
- Check Gmail inbox
- Monitor bounce rates
- Track form submissions

---

## 🎯 Next Steps After Deployment

1. **Test the contact form**
2. **Set up custom domain** (optional)
3. **Configure analytics**
4. **Set up monitoring**
5. **Test email delivery**

---

## 💡 Pro Tips

- Use Vercel's preview deployments for testing
- Set up staging environment
- Monitor function execution time
- Use Vercel's edge functions for better performance
- Consider using a dedicated email service (SendGrid, Mailgun) for production

---

## 📞 Support

If you encounter issues:
1. Check Vercel function logs
2. Verify environment variables
3. Test email configuration locally
4. Check Gmail security settings

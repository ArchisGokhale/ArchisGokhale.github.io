# Contact Form Email Setup Guide

Your portfolio now has a fully functional contact form that emails you whenever someone submits it!

## ✅ What's Been Set Up

1. **Contact Form Integration** - Form submissions now send data to your backend
2. **Email Notifications** - You'll receive an email whenever someone fills out the form
3. **Backend Endpoint** - `/api/contact` handles form submissions
4. **User Feedback** - Toast notifications confirm successful submission

## 🔧 Setup Instructions

### Step 1: Get Your Gmail App Password

Since Gmail has disabled "Less Secure App Access," you need to create an App Password:

1. Go to **[https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)**
   - Make sure you're signed in as **archisgokhale001@gmail.com**
   - If you have 2-factor authentication enabled, you'll see the App Passwords option

2. If you DON'T see "App Passwords":
   - You need to enable 2-Step Verification first
   - Go to **[https://myaccount.google.com/security](https://myaccount.google.com/security)**
   - Click "2-Step Verification" and follow the prompts

3. After enabling 2-Step Verification, go back to App Passwords
   - Select **App**: "Mail"
   - Select **Device**: "Windows Computer" (or your device type)
   - Click **Generate**
   - Google will show a 16-character password

4. **Copy this password** (it looks like: `abcd efgh ijkl mnop`)

### Step 2: Create `.env.local` File

In your **project root** directory, create a new file called `.env.local`:

```bash
EMAIL_USER=archisgokhale001@gmail.com
EMAIL_PASSWORD=your_16_char_app_password_here
RECIPIENT_EMAIL=archisgokhale001@gmail.com
```

**Important:** 
- Replace `your_16_char_app_password_here` with the 16-character password from Step 1
- Keep spaces in the password as Google provides them
- **Never commit `.env.local` to GitHub** (it's already in `.gitignore`)

### Step 3: Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your contact page

3. Fill out and submit the form

4. Check your email (archisgokhale001@gmail.com) - you should receive an email with the submission!

## 📧 Email Features

When someone submits the form, you'll receive an email that includes:
- **Sender's Name**
- **Sender's Email** (so you can reply directly)
- **Subject** of their message
- **Full Message Content**
- **Submission Timestamp**

The email has a professional HTML template and includes a "Reply To" link for easy responses.

## 🔐 Security Notes

- Your Gmail App Password is stored locally in `.env.local` (never committed to version control)
- The contact form validates input on both frontend and backend
- Emails are sent over an encrypted connection (TLS)
- Your actual Gmail password is never exposed

## 🚀 Deployment

When deploying to production (like GitHub Pages):

1. Add your environment variables to your hosting platform's settings:
   - For GitHub Actions or other CI/CD: Add secrets in your platform's dashboard
   - For Vercel/Netlify: Add environment variables in their settings
   
2. Example for GitHub (if using a custom domain):
   - Go to your repo Settings → Secrets and Variables → Actions
   - Add `EMAIL_USER`, `EMAIL_PASSWORD`, and `RECIPIENT_EMAIL`

## 🎯 Next Steps (Optional)

### Optional: Add Firebase for Data Persistence
If you want to store all form submissions in a database as well:

1. Create a Firebase project at **[https://firebase.google.com](https://firebase.google.com)**
2. Get your Firebase credentials
3. Add the Firebase environment variables to `.env.local`
4. The [lib/firebase.ts](lib/firebase.ts) file is already configured and ready to use

### Optional: Add Form Validation
You can enhance the form with additional validation like:
- Email format verification
- Message length requirements
- Rate limiting to prevent spam

## ❓ Troubleshooting

**Not receiving emails?**
- Check that `.env.local` has the correct app password (no extra spaces)
- Make sure 2-Step Verification is enabled on your Gmail account
- Check your Gmail spam folder
- Run `npm run dev` after creating `.env.local`

**"Failed to send message" error?**
- Verify the app password is correct
- Check that `EMAIL_USER` and `RECIPIENT_EMAIL` are set correctly in `.env.local`
- Restart the dev server after modifying `.env.local`

**Still having issues?**
- Check the browser console for error messages
- Check the server terminal output for detailed error logs
- Verify your internet connection

---

That's it! Your contact form is now fully functional. 🎉

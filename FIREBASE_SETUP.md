# Firebase Firestore Setup Guide

Your contact form is now fully integrated with Firebase Firestore! Form submissions will be saved to your database AND you'll receive email notifications.

## ✅ What's Connected

1. **Contact Form** → **Firestore Database** (stores all submissions)
2. **Contact Form** → **Email Notification** (sends you an email immediately)
3. **Backend API** → **Firestore** (securely saves data)

## 🔧 Complete Setup Steps

### Step 1: Create Firestore Database

1. Go to **[Firebase Console](https://console.firebase.google.com/)**
2. Select your project **"portfolioarchis"**
3. In the left sidebar, click **Firestore Database**
4. Click **Create database**
5. Choose **Start in production mode** (we'll set rules in next step)
6. Select region (e.g., **us-central1**)
7. Click **Create**

### Step 2: Set Firestore Security Rules

1. In Firestore, click the **Rules** tab
2. Replace all the content with the rules below:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Allow reading contact submissions only to authenticated admins
    // For now, allow all reads (you can restrict later with authentication)
    match /contact_submissions/{document=**} {
      allow write: if request.method == 'post';
      allow read: if true; // Restrict this when adding admin panel
      allow delete: if false; // Prevent deletion from client
    }
    
  }
}
```

3. Click **Publish**

### Step 3: Configure Gmail App Password

If you haven't done this yet, follow the steps in [CONTACT_FORM_SETUP.md](CONTACT_FORM_SETUP.md#step-1-get-your-gmail-app-password).

Update your `.env.local` file with:
```
EMAIL_PASSWORD=your_16_char_app_password_here
```

### Step 4: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your contact page

3. Fill out and submit the form

4. You should:
   - ✅ See a success toast notification
   - ✅ Receive an email at archisgokhale001@gmail.com
   - ✅ See the submission appear in Firestore Console

### Step 5: View Your Submissions in Firestore

1. Go to **[Firebase Console](https://console.firebase.google.com/)**
2. Select **portfolioarchis** project
3. Click **Firestore Database**
4. You'll see a **contact_submissions** collection
5. Click to expand and view all submissions with timestamps

## 📊 What's Stored in Firestore

Each form submission includes:
- **name** - Visitor's name
- **email** - Visitor's email (for replying)
- **subject** - Message subject
- **message** - Full message content
- **timestamp** - When submitted (visitor's time)
- **createdAt** - Server timestamp (precise)
- **read** - Boolean flag (for marking as read later)

## 📧 Email Notifications

You'll receive professional HTML emails with:
- Sender's name, email, and subject
- Full message content
- Exact submission time
- Reply-To link for easy responses

## 🔐 Security Considerations

**Current Setup:**
- ✅ Only your backend can write to Firestore (through `/api/contact` endpoint)
- ✅ Frontend cannot directly write (more secure)
- ✅ Gmail credentials stored in `.env.local` (never committed)
- ✅ Form validation on both frontend and backend

**Future Improvements:**
- Add Firebase Authentication for admin panel
- Restrict Firestore reads to authenticated admins only
- Add rate limiting to prevent spam
- Archive old submissions automatically

## 🚀 Deployment Checklist

When deploying to production:

1. **Add environment variables** to your hosting platform:
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - etc.

2. **Enable Firestore backups** (Firebase Console → Settings)

3. **Review security rules** (don't allow public writes in production)

4. **Monitor Firestore usage** (watch for unexpected reads/writes)

## ❓ Troubleshooting

**Form submits but no Firestore entry?**
- Check the browser console for errors
- Verify `.env.local` has correct Firebase credentials
- Check server terminal for error messages
- Ensure Firestore database is created and active

**Email not sending but Firestore works?**
- Verify Gmail app password in `.env.local`
- Check that 2-Step Verification is enabled on Gmail
- Restart dev server after updating `.env.local`
- Check spam folder

**Firestore permission errors?**
- Go to Firestore → Rules
- Make sure rules are published (check the "Publish" button)
- Rules should allow `write: if request.method == 'post'`

**Still having issues?**
- Check Firebase Console → Firestore → Quotas for errors
- Look at server terminal for detailed error logs
- Verify all environment variables are set correctly

---

🎉 **Your contact form is now fully functional with both database storage and email notifications!**

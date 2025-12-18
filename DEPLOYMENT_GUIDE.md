# 🚀 Deployment Guide

This portfolio has a split architecture: **static frontend** (GitHub Pages) + **Node.js backend** (separate hosting).

## Why Deploy Separately?

GitHub Pages only serves static files. The contact form needs a Node.js server to:
- Validate and rate-limit submissions
- Store data in Supabase
- Send email notifications via Gmail

---

## 📦 Option 1: Deploy Backend to Vercel (Recommended)

### 1. Create `vercel.json`
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server/index.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "server/index.ts"
    }
  ]
}
```

### 2. Install Vercel CLI
```bash
npm i -g vercel
```

### 3. Deploy
```bash
vercel
```

### 4. Set Environment Variables in Vercel Dashboard
- `EMAIL_USER` – your Gmail address
- `EMAIL_PASSWORD` – Gmail app password ([create here](https://myaccount.google.com/apppasswords))
- `RECIPIENT_EMAIL` – where contact emails go
- `SUPABASE_URL` – from Supabase project settings
- `SUPABASE_ANON_KEY` – from Supabase project settings
- `PROD_ORIGIN` – your GitHub Pages URL (e.g., `https://archisgokhale.github.io`)

### 5. Note Your Backend URL
Vercel will give you a URL like: `https://your-project.vercel.app`

---

## 🌐 Deploy Frontend to GitHub Pages

### 1. Create `.env.local` for Build
```env
VITE_API_URL=https://your-backend.vercel.app
```

### 2. Build Static Site
```bash
npm run build:gh-pages
```

### 3. Push to GitHub
```bash
git add .
git commit -m "Deploy with Vercel backend"
git push origin main
```

### 4. Enable GitHub Pages
- Go to repo Settings → Pages
- Source: Deploy from branch `main`
- Folder: `/docs`
- Save

Your site will be live at `https://[username].github.io/[repo]` in ~1 minute!

---

## 🔧 Alternative: Deploy Backend to Render

### 1. Create Account at [render.com](https://render.com)

### 2. New Web Service
- Connect your GitHub repo
- Build Command: `npm run build`
- Start Command: `node dist/index.cjs`

### 3. Set Environment Variables
Same as Vercel (EMAIL_USER, EMAIL_PASSWORD, etc.)

### 4. Get Backend URL
Render provides: `https://your-app.onrender.com`

### 5. Build Frontend with Render URL
```env
VITE_API_URL=https://your-app.onrender.com
```

```bash
npm run build:gh-pages
```

---

## 🧪 Testing Deployment

### Test Backend Directly
```bash
curl -X POST https://your-backend.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -H "Origin: https://your-github-pages-url.com" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test",
    "message": "Testing contact form"
  }'
```

Should return: `{"message":"Message sent successfully"}`

### Test Frontend
1. Visit your GitHub Pages URL
2. Go to Contact page
3. Fill and submit form
4. Check Network tab (F12) for `/api/contact` request
5. Verify email received at `RECIPIENT_EMAIL`

---

## ⚠️ Common Issues

### CORS Error in Browser Console
**Problem:** `Access-Control-Allow-Origin` error  
**Fix:** Set `PROD_ORIGIN` in backend env vars to match your GitHub Pages URL (no trailing slash)

### "Failed to send message"
**Problem:** Backend URL not set or incorrect  
**Fix:** Check `.env.local` has `VITE_API_URL` pointing to deployed backend

### Supabase Errors
**Problem:** "Missing Supabase credentials" in backend logs  
**Fix:** Set `SUPABASE_URL` and `SUPABASE_ANON_KEY` in backend hosting platform

### Gmail Authentication Failed
**Problem:** "Invalid login" in backend logs  
**Fix:** 
1. Enable 2-factor auth on Gmail
2. Generate app password at [google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Use app password (16 chars, no spaces) as `EMAIL_PASSWORD`

---

## 📊 Architecture Diagram

```
┌─────────────────────────────────────┐
│   GitHub Pages (Static Frontend)   │
│   https://[user].github.io         │
│                                     │
│   - React SPA                       │
│   - Contact form UI                 │
└──────────────┬──────────────────────┘
               │
               │ fetch('/api/contact')
               │ VITE_API_URL prefix
               ↓
┌─────────────────────────────────────┐
│   Vercel/Render (Node.js Backend)  │
│   https://backend.vercel.app        │
│                                     │
│   - Express server                  │
│   - Rate limiting                   │
│   - Input validation                │
└──────┬───────────────────┬──────────┘
       │                   │
       │                   │
       ↓                   ↓
┌─────────────┐   ┌────────────────┐
│  Supabase   │   │  Gmail SMTP    │
│  Database   │   │  Email Send    │
└─────────────┘   └────────────────┘
```

---

## 🎉 Success Checklist

- [ ] Backend deployed to Vercel/Render with env vars set
- [ ] Backend URL accessible (test with curl)
- [ ] `.env.local` has `VITE_API_URL` pointing to backend
- [ ] Frontend built with `npm run build:gh-pages`
- [ ] Changes pushed to GitHub
- [ ] GitHub Pages enabled in repo settings
- [ ] Contact form submits successfully on live site
- [ ] Email received at `RECIPIENT_EMAIL`
- [ ] Submission stored in Supabase `contact_submissions` table

---

## 📞 Support

If you hit issues:
1. Check browser console for errors (F12)
2. Check Network tab for failed requests
3. Check backend logs in Vercel/Render dashboard
4. Verify all env vars are set correctly
5. Test backend directly with curl

Common mistake: forgetting to rebuild frontend after changing `VITE_API_URL` 🔄

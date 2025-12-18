# 🚨 Contact Form Fix - Quick Start

## Problem
Your GitHub Pages site is **static only** (no backend server). The contact form needs a Node.js backend to process submissions.

## Solution
Deploy backend and frontend separately:

### 📍 Step 1: Deploy Backend to Vercel (5 minutes)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy backend
vercel
```

Follow prompts, then set these **Environment Variables** in [Vercel Dashboard](https://vercel.com/dashboard):

| Variable | Value | Where to Get |
|----------|-------|--------------|
| `EMAIL_USER` | your-email@gmail.com | Your Gmail |
| `EMAIL_PASSWORD` | 16-char app password | [Create here](https://myaccount.google.com/apppasswords) |
| `RECIPIENT_EMAIL` | where-to-receive@gmail.com | Your inbox |
| `SUPABASE_URL` | https://xxx.supabase.co | Supabase project settings |
| `SUPABASE_ANON_KEY` | eyJhbG... | Supabase project settings |
| `PROD_ORIGIN` | https://[your-username].github.io | Your GitHub Pages URL |

**Note your Vercel URL:** `https://your-project.vercel.app` ← You'll need this!

---

### 🌐 Step 2: Build & Deploy Frontend (2 minutes)

Create `.env.local` in project root:
```env
VITE_API_URL=https://your-project.vercel.app
```

Build static site:
```bash
npm run build:gh-pages
```

Push to GitHub:
```bash
git add .
git commit -m "Deploy with Vercel backend"
git push origin main
```

**Enable GitHub Pages:**
1. Go to repo **Settings → Pages**
2. Source: **Deploy from branch → main → /docs**
3. Save

Done! Visit `https://[your-username].github.io/[repo]` in ~1 minute.

---

## ✅ Test It

1. **Test backend directly:**
   ```bash
   curl -X POST https://your-project.vercel.app/api/contact \
     -H "Content-Type: application/json" \
     -H "Origin: https://your-github-pages-url.com" \
     -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Testing"}'
   ```
   Expected: `{"message":"Message sent successfully"}`

2. **Test on live site:**
   - Open your GitHub Pages URL
   - Fill out contact form
   - Check email inbox for notification
   - Verify submission in Supabase table

---

## 🔧 Troubleshooting

### "Failed to send message"
- Check browser console (F12) for errors
- Verify `VITE_API_URL` in `.env.local` matches Vercel URL
- Rebuild frontend after changing `.env.local`

### CORS Error
- Set `PROD_ORIGIN` in Vercel to **exact** GitHub Pages URL (no trailing slash)
- Example: `https://archisgokhale.github.io` ✅
- NOT: `https://archisgokhale.github.io/` ❌

### Gmail Authentication Failed
1. Enable 2-factor auth on Gmail
2. Go to [google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Generate "Mail" app password (16 chars, no spaces)
4. Use that as `EMAIL_PASSWORD` in Vercel

---

## 📚 Full Documentation

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for:
- Alternative hosting (Render, Railway)
- Architecture diagram
- Detailed troubleshooting

---

## 💡 Why This Setup?

| Component | Where Hosted | Why |
|-----------|--------------|-----|
| Frontend (React) | GitHub Pages | Free, fast CDN, custom domain support |
| Backend (Express) | Vercel | Serverless, auto-scaling, built-in secrets |
| Database | Supabase | Postgres, real-time, generous free tier |
| Email | Gmail SMTP | Reliable, free up to 500/day |

This is industry-standard for production SPA + API deployments! 🚀

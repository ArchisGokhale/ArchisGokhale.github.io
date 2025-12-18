# Supabase Setup Guide

## Quick Setup (2 minutes)

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in
3. Click **"New Project"**
4. Enter project name: `portfolio`
5. Set a strong password
6. Choose region closest to you
7. Click **"Create new project"** and wait 2-3 minutes

### 2. Create Database Table
Once your project is ready:

1. Go to **"SQL Editor"** (left sidebar)
2. Click **"New Query"**
3. Paste this SQL:

```sql
CREATE TABLE contact_submissions (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

4. Click **"Run"**

### 3. Get Your API Keys
1. Go to **"Settings"** → **"API"** (left sidebar)
2. Copy:
   - **Project URL** → paste as `SUPABASE_URL` in `.env.local`
   - **anon public** → paste as `SUPABASE_ANON_KEY` in `.env.local`

### 4. Set RLS Policy (Optional but Recommended)
1. Go to **"Authentication"** → **"Policies"** (left sidebar)
2. Click **"New Policy"** on `contact_submissions` table
3. Select: **"For full customization, use custom policies editor"**
4. Paste:

```sql
CREATE POLICY "Allow anonymous inserts" ON contact_submissions
  FOR INSERT
  WITH CHECK (true);
```

5. Click **"Save policy"**

### 5. Test It
1. Update your `.env.local` with the Supabase keys
2. Restart server: `npm run dev`
3. Submit a contact form at `http://localhost:5000`
4. Check **"Table Editor"** in Supabase → `contact_submissions` to see submissions

## Troubleshooting

**"Table does not exist" error?**
- Make sure you ran the SQL query from step 2

**"Policy violation" error?**
- Make sure you created the RLS policy from step 4

**Submissions not appearing?**
- Check `.env.local` has correct `SUPABASE_URL` and `SUPABASE_ANON_KEY`
- Restart the server after updating `.env.local`

## Viewing Submissions

In Supabase dashboard:
1. Go to **"Table Editor"** (left sidebar)
2. Click **"contact_submissions"**
3. View all submissions with timestamps

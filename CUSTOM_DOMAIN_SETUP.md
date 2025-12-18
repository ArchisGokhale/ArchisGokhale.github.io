# archisgokhale.codes Setup - Final Steps

Your custom domain is now configured! Complete these final steps:

## 🎯 What to Do Now

### 1. Go to GitHub Settings
1. Go to: https://github.com/ArchisGokhale/ArchisGokhale.github.io
2. Click **Settings** → **Pages**
3. You should see under "Custom domain":
   - `archisgokhale.codes` (may show "Not yet available" initially)
4. Click **Save** if the domain appears

### 2. Configure DNS at Your Registrar

You need to point `archisgokhale.codes` to GitHub's servers.

**Where to edit DNS:**
- Your domain registrar (where you bought archisgokhale.codes)
- Look for "DNS Settings", "Manage DNS", or "Name Servers"

**Add these A records:**
```
Host: archisgokhale.codes (or @)
Type: A
Value: 185.199.108.153

Host: archisgokhale.codes (or @)
Type: A
Value: 185.199.109.153

Host: archisgokhale.codes (or @)
Type: A
Value: 185.199.110.153

Host: archisgokhale.codes (or @)
Type: A
Value: 185.199.111.153
```

**OR if your registrar supports CNAME:**
```
Host: archisgokhale.codes
Type: CNAME
Value: ArchisGokhale.github.io
```

### 3. Wait for DNS Propagation
- DNS changes take 15-30 minutes (sometimes up to 24 hours)
- Check status at: https://dnschecker.org
- Enter: `archisgokhale.codes`

### 4. Verify Setup

Once DNS is working:
- ✅ GitHub will issue an SSL certificate (automatic)
- ✅ Visit https://archisgokhale.codes - should show your portfolio
- ✅ GitHub Pages settings should show a checkmark ✓

## 📋 Files Created

- `CNAME` - Points domain to your GitHub Pages site
- `docs/CNAME` - Included automatically during builds
- `.github/workflows/deploy.yml` - Auto-deploys on push

## 🔄 Future Updates

```bash
# Make changes
nano client/src/pages/home.tsx

# Test locally
npm run dev

# Build
npm run build:gh-pages

# Deploy
git add .
git commit -m "Update: your changes"
git push

# Site updates at https://archisgokhale.codes
```

## ❓ Troubleshooting

| Issue | Solution |
|-------|----------|
| Site shows 404 | DNS not yet propagated, wait 30 mins |
| GitHub Pages shows error | Ensure A records are added correctly at registrar |
| CNAME not found in DNS | Build script preserves it, but may need rebuild |
| SSL cert not issued | Wait 24 hours for GitHub to issue certificate |
| Shows github.io instead | Clear browser cache, DNS may still be propagating |

---

✨ **Once DNS is set up, your site will be live at https://archisgokhale.codes**

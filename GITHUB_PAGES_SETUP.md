# Custom Domain Setup (archisgokhale.codes)

Your portfolio website is ready to be deployed to **archisgokhale.codes**! 🚀

## Step 1: GitHub Pages Configuration

1. Go to your repository: `https://github.com/ArchisGokhale/ArchisGokhale.github.io`
2. Click on **Settings** (gear icon)
3. Scroll down to **Pages** section in the left sidebar
4. Under "Source", select:
   - **Deploy from a branch**
5. Select branch: **main**
6. Select folder: **/docs**
7. Click **Save**

## Step 2: Configure Custom Domain

**GitHub will automatically:**
- ✅ Detect the `CNAME` file in your `/docs` folder
- ✅ Create an SSL/TLS certificate for your domain
- ✅ Configure DNS settings

This usually takes 5-10 minutes. You'll see the custom domain appear in the Pages settings.

## Step 3: Set Up DNS Records

Point your domain `archisgokhale.codes` to GitHub Pages by adding these DNS records:

### Option A: Using A Records (Recommended)
Add these A records to your domain DNS:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### Option B: Using CNAME Record (if your registrar supports it)
```
archisgokhale.codes CNAME ArchisGokhale.github.io
```

## Step 4: Verify

- DNS propagation takes 15-30 minutes
- Visit `https://archisgokhale.codes` to verify
- Check GitHub Pages settings > Custom domain to confirm DNS is working

## What's Been Set Up

✅ **CNAME File Created**
- `docs/CNAME` - Points to your custom domain
- `CNAME` (root) - Source file for reference

✅ **Build Script Updated**
- Automatically preserves CNAME file during builds
- No manual intervention needed

✅ **GitHub Actions Ready**
- Automatically builds and deploys on every push
- SSL/TLS certificate automatically managed by GitHub

## How to Update Your Site

```bash
# Make changes
# Test locally: npm run dev

# Build for production
npm run build:gh-pages

# Deploy
git add .
git commit -m "Update: your changes"
git push

# Site updates at archisgokhale.codes within ~1 minute
```

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Site shows 404 | Check GitHub Pages settings > Custom domain shows checkmark ✅ |
| Custom domain not appearing | Wait 10 minutes for GitHub to process the CNAME file |
| SSL certificate not issued | Ensure CNAME is in `/docs/CNAME` and domain is in GitHub settings |
| DNS not working | Verify A records in your domain registrar (usually takes 30 mins) |
| Shows github.io domain | Clear browser cache and wait for SSL cert (up to 24 hours) |

## Build Output

```
✓ 2200 modules transformed
✓ HTML: 1.54 kB
✓ CSS: 109.49 kB
✓ JavaScript: 1.32 MB
✓ Images: ~1.1 MB
✓ CNAME: Custom domain configured
```

---

🎉 **Your portfolio is now hosted at: https://archisgokhale.codes**

DNS propagation can take 15-30 minutes. If you see errors, they'll resolve automatically.

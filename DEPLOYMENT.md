# 🚀 Deployment Guide

## Step 1: Initialize Git Repository

```bash
cd q:\hakathon_LH\portfolio

# Initialize Git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website with terminal, projects, and animations"
```

## Step 2: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. **Repository name**: `portfolio`
3. **Description**: "Professional portfolio showcasing AI/Security expertise"
4. **Visibility**: Public
5. **Initialize with**: None (we already have files)
6. Click **Create repository**

## Step 3: Connect Local Repository to GitHub

```bash
# Add remote origin (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/portfolio.git

# Rename branch to main (if using master)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 4: Deploy to Vercel

### Option A: Using Vercel Web Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **Add New** → **Project**
4. Select your `portfolio` repository
5. **Project Name**: `portfolio`
6. **Framework Preset**: Next.js
7. **Environment Variables**: Leave blank (unless using analytics)
8. Click **Deploy**

Vercel will automatically build and deploy. Your site goes live instantly!

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project directory
vercel

# Follow prompts to connect to GitHub account
```

## Step 5: Configure Custom Domain (Optional)

1. In Vercel dashboard → **Project Settings** → **Domains**
2. Add your domain (e.g., `wisdomkinoti.com`)
3. Follow DNS configuration instructions
4. Update `app/layout.tsx` with your domain in metadata

## Step 6: Set Up Automatic Deployments

With GitHub + Vercel connected:
- Every push to `main` branch = automatic deployment
- Preview deployments for pull requests
- Automatic rollbacks if build fails

## Step 7: Monitor & Analytics

### Vercel Analytics
- Go to **Analytics** tab in Vercel dashboard
- Track page loads, performance, visitor locations

### Google Analytics (Optional)
1. Set up property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID
3. Add to `.env.local`: `NEXT_PUBLIC_GA_ID=G_XXXXXXXXXX`
4. Integrate tracking script in `app/layout.tsx`

## 📊 Verify Deployment

After deployment:

```bash
# Check site is live
curl https://your-portfolio.vercel.app

# Run Lighthouse audit
npm run build  # Local test

# Test all sections load correctly
# Check terminal commands work
# Verify contact links work
# Test resume download
```

## 🔄 Update & Redeploy

Any changes you push to GitHub automatically deploy:

```bash
# Make changes locally
git add .
git commit -m "Fix: Update project descriptions"
git push origin main

# Vercel automatically deploys within 30 seconds!
```

## 🆘 Troubleshooting

### Build Fails on Vercel

```bash
# Test build locally
npm run build

# Check for errors
npm run lint

# Fix any issues, then push again
git push origin main
```

### Site Loads Slowly

```bash
# Optimize images
# Check Vercel Analytics for bottlenecks
# Review bundle size: npm run build
```

### Custom Domain Not Working

1. Verify DNS records are correctly configured
2. Wait 24 hours for DNS propagation
3. Check domain registrar settings
4. Vercel support: vercel.com/support

## 📋 Post-Deployment Checklist

- [ ] Site loads in < 2 seconds
- [ ] All sections render correctly
- [ ] Terminal commands work
- [ ] Links open in new tabs
- [ ] Mobile view is responsive
- [ ] Resume downloads work
- [ ] Contact buttons function
- [ ] No console errors
- [ ] Lighthouse score 95+

---

**Your portfolio is live! 🎉**

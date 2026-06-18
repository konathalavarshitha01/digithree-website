# DigiThree Website - Deployment Guide

## 🚀 Quick Deployment Options

### Option 1: VERCEL (Recommended - Easiest)

Vercel is the easiest way to deploy Next.js apps. It takes ~2 minutes.

**Steps:**

1. **Create GitHub Repository**
   - Go to https://github.com/new
   - Create a new repository named `digithree-website`
   - Choose public or private
   - Click "Create repository"

2. **Push Your Code to GitHub**
   ```bash
   cd /workspace/web
   git init
   git add .
   git commit -m "Initial commit: DigiThree website ready for deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/digithree-website.git
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Go to https://vercel.com
   - Click "Sign Up" (use GitHub)
   - Authorize Vercel with your GitHub account
   - Click "New Project"
   - Select your `digithree-website` repository
   - Leave all settings as default (Vercel auto-detects Next.js)
   - Click "Deploy"

4. **Your site is now live!**
   - You'll get a URL like: `digithree-website.vercel.app`
   - Add custom domain: Go to project Settings → Domains
   - Connect your domain (e.g., digithree.com)

**Advantages:**
✅ Free tier includes 100 GB bandwidth/month
✅ Automatic deployments on every git push
✅ SSL certificate included
✅ Custom domain support
✅ Built-in analytics
✅ Environmental variables support
✅ Global CDN

---

### Option 2: NETLIFY

Another excellent free option with great UI.

**Steps:**

1. Push to GitHub (same as Option 1)

2. Go to https://netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub
   - Select repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

**Advantages:**
✅ Free tier
✅ Custom domains
✅ Forms submission handling
✅ Easy rollbacks

---

### Option 3: RAILWAY (Budget-Friendly)

Great for custom deployments with more control.

1. Go to https://railway.app
2. Create account
3. Create new project → Deploy from GitHub
4. Select your repository
5. Configure environment:
   - Build command: `npm run build`
   - Start command: `npm start`
6. Deploy

**Cost:** Pay as you go (~$5-10/month for small sites)

---

### Option 4: DOCKER + VPS (Full Control)

If you have your own server (AWS, DigitalOcean, etc.)

**Dockerfile:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

**Deploy:**
```bash
docker build -t digithree .
docker run -p 3000:3000 digithree
```

---

## 📋 Pre-Deployment Checklist

✅ Project builds successfully
✅ All pages validated (/, /about, /portfolio, /contact)
✅ Contact form works
✅ Images load correctly
✅ Google Maps embedded
✅ No TypeScript errors
✅ Lint passed

---

## 🔧 Environment Variables (if needed in future)

Create `.env.local` for local development:
```
# No API keys needed currently
# Add as needed for future features
```

For production, add via platform settings:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Build & Deploy → Environment

---

## 📱 Custom Domain Setup

### For Vercel:
1. Go to your project
2. Settings → Domains
3. Enter your domain (e.g., digithree.com)
4. Add DNS records as shown
5. Done in ~5 minutes

### For Netlify:
1. Site Settings → Domain Management
2. Add custom domain
3. Follow DNS setup instructions

---

## 🔄 Continuous Deployment

**Automatic deployments:**
- Every push to `main` branch automatically deploys
- Preview deploys for pull requests

**Manual deployments:**
- Vercel: Redeploy from dashboard
- Netlify: Trigger deploy via UI

---

## 📊 Monitor Your Site

**Vercel Analytics:**
- Performance metrics
- Page speed
- Traffic overview

**Netlify Analytics:**
- Visitor stats
- Form submissions
- Build logs

---

## 🚨 Troubleshooting

**Build fails?**
- Check build logs in platform dashboard
- Ensure all env variables are set
- Run `npm run build` locally first

**Site shows error?**
- Check platform logs
- Verify environment variables
- Check image paths (should be /filename.jpg)

**Slow performance?**
- Enable image optimization
- Check for large files
- Use platform's CDN

---

## ✅ Next Steps

1. **Choose a platform** (Vercel recommended)
2. **Create GitHub account** if you don't have one
3. **Push code to GitHub**
4. **Connect repository to platform**
5. **Deploy!**

**Questions?**
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Next.js Docs: https://nextjs.org/docs/deployment


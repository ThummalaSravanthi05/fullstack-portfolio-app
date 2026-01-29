# Deployment Guide - DigitalPro Full Stack Application

Complete guide to deploy your full-stack application to production.

## Deployment Options

### Option 1: Vercel (Frontend) + Railway (Backend) - RECOMMENDED

## Part 1: Prepare Code for Deployment

### Step 1: Update API URLs
In `client/src/App.js` and `client/src/Admin.js`, change:

FROM:
```javascript
axios.get("http://localhost:5000/projects")
```

TO:
```javascript
axios.get("https://your-backend-url.com/projects")
```

### Step 2: Create .gitignore
Ensure `.gitignore` includes:
```
node_modules/
.env
.DS_Store
*.log
build/
dist/
```

### Step 3: Push to GitHub

1. Initialize git (if not done):
```bash
git init
git add .
git commit -m "Initial commit - DigitalPro full stack application"
```

2. Create a GitHub repository at https://github.com/new

3. Push code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/fullstack-project.git
git branch -M main
git push -u origin main
```

---

## Part 2: Deploy Backend to Railway

### Step 1: Sign Up on Railway
1. Go to https://railway.app
2. Sign up with GitHub account
3. Authorize Railway

### Step 2: Create New Project
1. Click "Create New Project"
2. Click "GitHub Repo"
3. Search for your `fullstack-project` repository
4. Click "Deploy"

### Step 3: Add MongoDB Environment Variable
1. Go to "Variables" tab
2. Add new variable:
   - **Key**: `MONGO_URL`
   - **Value**: Your MongoDB connection string
3. Click "Add"

### Step 4: Generate Deploy URL
1. Go to the "Deploy" section
2. Your backend URL will be shown
3. Note this URL (e.g., `https://fullstack-project-production.up.railway.app`)

### Step 5: Add start script
Your `server/package.json` should have:
```json
"scripts": {
  "start": "node server.js"
}
```

---

## Part 3: Deploy Frontend to Vercel

### Step 1: Sign Up on Vercel
1. Go to https://vercel.com
2. Click "Sign up"
3. Choose "GitHub"
4. Authorize Vercel

### Step 2: Import Project
1. Click "Add New"
2. Select "Project"
3. Find your `fullstack-project` repository
4. Click "Import"

### Step 3: Configure Project
1. In "Root Directory", keep it empty (uses client folder)
   - OR manually select the `client` folder
2. Add Environment Variables:
   - Create a `.env.local` file or set in Vercel dashboard
   - **KEY**: `REACT_APP_API_URL`
   - **VALUE**: Your Railway backend URL
3. Click "Deploy"

### Step 4: Update Frontend Code
Add to `App.js`:
```javascript
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

// Change all axios calls to:
axios.get(`${API_URL}/projects`)
```

### Step 5: Verify Deployment
1. Your frontend URL will be shown on Vercel dashboard
2. Visit the URL to see your deployed application

---

## Alternative: Deploy Both to Heroku (Older Method)

### Backend Deployment

1. Install Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli

2. Create Heroku app:
```bash
heroku login
heroku create fullstack-project-backend
```

3. Add MongoDB URL:
```bash
heroku config:set MONGO_URL=your_mongodb_url
```

4. Deploy:
```bash
git push heroku main
```

5. Check logs:
```bash
heroku logs --tail
```

### Frontend Deployment

1. Build the application:
```bash
cd client
npm run build
```

2. Deploy to Vercel (follow Vercel steps above)

---

## Part 4: Custom Domain Setup (Optional)

### For Vercel (Frontend)
1. Go to Vercel Dashboard
2. Select your project
3. Go to "Settings" → "Domains"
4. Add your custom domain
5. Follow DNS configuration steps

### For Railway (Backend)
1. Go to Railway project settings
2. Add custom domain
3. Update DNS records

---

## Environment Variables Configuration

### Backend (.env on Railway/Heroku)
```env
MONGO_URL=mongodb+srv://user:pass@cluster.mongodb.net/fullstack-project
PORT=5000
NODE_ENV=production
```

### Frontend (.env.local on Vercel)
```env
REACT_APP_API_URL=https://your-backend-url.com
REACT_APP_ENV=production
```

---

## Post-Deployment Checklist

✅ Backend is running and accessible
✅ Frontend loads without CORS errors
✅ Projects display correctly
✅ Can add new projects from admin panel
✅ Contact form submissions work
✅ Newsletter subscriptions work
✅ Admin panel is functional
✅ Images load properly
✅ Forms validate correctly
✅ No console errors in browser DevTools

---

## Monitoring & Maintenance

### Check Backend Logs
- **Railway**: Go to "Deployments" tab, click "View Logs"
- **Heroku**: Run `heroku logs --tail`

### Monitor Error Rates
- Set up error tracking (e.g., Sentry)
- Monitor API response times
- Check database storage usage

### Update Application
1. Make changes locally
2. Test thoroughly
3. Push to GitHub
4. Deployments automatically trigger

---

## Troubleshooting Deployment

### Issue: "Cannot GET /"
**Solution**: 
- Ensure start script is correct in package.json
- Check PORT environment variable
- Verify server.js is in root of server folder

### Issue: CORS errors in production
**Solution**:
- Update CORS settings in server.js
- Add your frontend URL to allowed origins
```javascript
app.use(cors({
  origin: "https://your-frontend-url.com"
}));
```

### Issue: Database connection fails
**Solution**:
- Verify MONGO_URL is correct
- Allow all IPs in MongoDB Atlas (0.0.0.0/0)
- Check network connectivity

### Issue: Slow API responses
**Solution**:
- Check MongoDB indexes
- Optimize database queries
- Use caching strategies

---

## Performance Optimization

### Frontend
- Minimize CSS and JavaScript
- Optimize images
- Enable gzip compression
- Use CDN for assets

### Backend
- Add response caching
- Optimize database queries
- Use pagination for large datasets
- Enable compression middleware

---

## Security Considerations

### Before Going Live
- ✅ Remove console.log statements
- ✅ Use HTTPS only
- ✅ Secure environment variables
- ✅ Validate all inputs
- ✅ Add rate limiting
- ✅ Enable CORS restrictions
- ✅ Use secure headers

### Add Security Headers
```javascript
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  next();
});
```

---

## Scaling as You Grow

### Increase Traffic Capacity
1. Upgrade database tier on MongoDB
2. Use CDN for static assets
3. Add caching layer (Redis)
4. Scale backend instances

### Add Features
1. User authentication
2. Admin user roles
3. Image optimization
4. Email notifications
5. Analytics dashboard

---

## Summary

1. **Prepare**: Update API URLs, push to GitHub
2. **Deploy Backend**: Use Railway or Heroku
3. **Deploy Frontend**: Use Vercel or Netlify
4. **Configure**: Set environment variables
5. **Test**: Verify all features work
6. **Monitor**: Check logs and performance
7. **Optimize**: Improve as needed

---

## Deployment Checklist

- [ ] GitHub repository created and code pushed
- [ ] MongoDB Atlas cluster set up
- [ ] Backend deployed to Railway/Heroku
- [ ] Frontend deployed to Vercel/Netlify
- [ ] Environment variables configured
- [ ] API URL updated in frontend
- [ ] All features tested in production
- [ ] Custom domain configured (optional)
- [ ] SSL certificate installed
- [ ] Monitoring set up

---

## Support Links

- **Vercel Documentation**: https://vercel.com/docs
- **Railway Documentation**: https://docs.railway.app
- **Heroku Documentation**: https://devcenter.heroku.com
- **MongoDB Atlas Help**: https://docs.atlas.mongodb.com

---

**Congratulations! Your application is live! 🎉**

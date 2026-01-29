# Setup Instructions - DigitalPro Full Stack Application

## Quick Start Guide

### Prerequisites
- Node.js v14+ installed
- npm or yarn package manager
- MongoDB Atlas account (free tier available)
- Git version control
- Code editor (VS Code recommended)

---

## Part 1: Database Setup (MongoDB Atlas)

### Step 1: Create MongoDB Atlas Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Sign up" and create an account
3. Verify your email address

### Step 2: Create a Free Cluster
1. After logging in, click "Create a Project"
2. Give it a name (e.g., "DigitalPro")
3. Click "Create Project"
4. Click "Create a Deployment"
5. Select "M0 FREE" tier
6. Choose your cloud provider and region
7. Click "Create Deployment"

### Step 3: Get Connection String
1. Click "Database" in the sidebar
2. Find your cluster and click "Connect"
3. Select "Drivers"
4. Copy the connection string
5. Replace `<password>` with your database user password
6. Replace `myFirstDatabase` with `fullstack-project`

Example connection string:
```
mongodb+srv://admin:yourPassword@cluster0.xxxxx.mongodb.net/fullstack-project?retryWrites=true&w=majority
```

### Step 4: Create Database User
1. In MongoDB Atlas, go to "Database Access"
2. Click "Add New Database User"
3. Set username and password
4. Click "Add User"
5. Note: Use this username and password in your connection string

---

## Part 2: Backend Setup

### Step 1: Navigate to Server Directory
```bash
cd server
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install:
- express (web framework)
- mongoose (database ORM)
- cors (cross-origin requests)
- dotenv (environment variables)

### Step 3: Create .env File
Create a file named `.env` in the server folder:
```
MONGO_URL=mongodb+srv://admin:yourPassword@cluster.xxxxx.mongodb.net/fullstack-project?retryWrites=true&w=majority
PORT=5000
```

### Step 4: Start the Server
```bash
node server.js
```

Expected output:
```
Server running on port 5000
DB Connected
```

**Keep this terminal open!**

---

## Part 3: Frontend Setup

### Step 1: Open New Terminal and Navigate to Client
```bash
cd client
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install React and all required packages.

### Step 3: Start the React Application
```bash
npm start
```

Expected output:
```
Compiled successfully!

You can now view client in the browser.
  Local:            http://localhost:3000
  On Your Network:  http://xxx.xxx.xxx.xxx:3000
```

The browser will automatically open at http://localhost:3000

---

## Part 4: Testing the Application

### Testing the Landing Page
1. Navigate to http://localhost:3000
2. You should see the landing page with:
   - Navigation bar with logo and "Admin Panel" button
   - Hero section with headline
   - "Why Choose Us" section
   - "Our Projects" section (empty initially)
   - "Happy Clients" section (empty initially)
   - "Contact Us" form
   - "Subscribe to our Newsletter" section
   - Footer

### Testing the Admin Panel
1. Click the "Admin Panel" button in the navigation
2. You should see tabs for:
   - Projects
   - Clients
   - Contacts
   - Subscribers

### Adding Your First Project
1. Click on "Admin Panel"
2. Go to "Projects" tab
3. Fill in the form:
   - **Project Name**: "Modern Website"
   - **Project Description**: "A beautiful modern website design"
   - **Image URL**: "https://via.placeholder.com/800x600"
4. Click "Add Project"
5. Go back to landing page (click "View Website")
6. Your project should appear in the "Our Projects" section

### Adding Your First Client
1. Click on "Admin Panel"
2. Go to "Clients" tab
3. Fill in the form:
   - **Client Name**: "John Doe"
   - **Testimonial**: "Great service and excellent support!"
   - **Designation**: "CEO, Tech Company"
   - **Image URL**: "https://via.placeholder.com/200x200"
4. Click "Add Client"
5. Go back to landing page
6. Your client should appear in the "Happy Clients" section

### Testing Contact Form
1. Go to landing page
2. Scroll to "Get a Free Consultation" section
3. Fill in all fields
4. Click "Get Quick Quote"
5. Go to Admin Panel → Contacts tab to view the submission

### Testing Newsletter
1. Go to landing page
2. Scroll to newsletter section at the bottom
3. Enter an email and click "Subscribe"
4. Go to Admin Panel → Subscribers tab to view the email

---

## Common Issues & Solutions

### Issue: "DB Connected" doesn't appear
**Solution**: 
- Check MongoDB connection string in .env
- Verify MongoDB username and password
- Ensure IP is whitelisted in MongoDB Atlas (allow 0.0.0.0/0 for development)

### Issue: "CORS error" in browser console
**Solution**:
- Ensure backend server is running on port 5000
- Check that backend is not returning errors
- Try refreshing the page

### Issue: "Cannot find module" error
**Solution**:
- Run `npm install` again
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again

### Issue: Port 3000 or 5000 already in use
**Solution**:
- Change the port in .env file (e.g., PORT=5001)
- Or kill the process using that port

### Issue: Images not loading
**Solution**:
- Use full URLs (http:// or https://)
- Ensure image URLs are publicly accessible
- Test URL in browser first

---

## Using with Sample Data

### Sample Project Data
```json
{
  "name": "E-Commerce Platform",
  "description": "Modern e-commerce solution with responsive design and secure payments",
  "image": "https://via.placeholder.com/800x600/4a90e2/ffffff?text=E-Commerce"
}
```

### Sample Client Data
```json
{
  "name": "Sarah Johnson",
  "description": "The team delivered exceptional results on time and within budget. Highly recommended!",
  "designation": "CEO, Digital Marketing",
  "image": "https://via.placeholder.com/200x200/4a90e2/ffffff?text=SJ"
}
```

---

## Next Steps for Enhancement

After basic setup works:

1. **Add Authentication** - Secure admin panel with login
2. **Image Upload** - Allow direct image uploads instead of URLs
3. **Email Notifications** - Send emails on new submissions
4. **Analytics** - Track user interactions
5. **SEO** - Optimize for search engines
6. **Deployment** - Deploy to production servers

---

## Deployment Preparation

### For Production:
1. Update API URL from localhost to production URL
2. Use environment variables for all sensitive data
3. Enable HTTPS
4. Set up proper error logging
5. Optimize images and assets
6. Enable caching strategies

---

## Useful Commands

### Backend Commands
```bash
# Start server
node server.js

# Start with auto-reload (if nodemon installed)
npm run dev

# Stop server
Ctrl + C
```

### Frontend Commands
```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Stop development server
Ctrl + C
```

---

## File Structure Reminder

```
fullstack-project/
├── server/
│   ├── models/
│   ├── .env
│   ├── server.js
│   └── package.json
├── client/
│   ├── src/
│   │   ├── App.js
│   │   ├── Admin.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
└── README.md
```

---

## Support Resources

- **React Documentation**: https://react.dev
- **Express Documentation**: https://expressjs.com
- **MongoDB Documentation**: https://docs.mongodb.com
- **Axios Documentation**: https://axios-http.com
- **MDN Web Docs**: https://developer.mozilla.org

---

**You're all set! Happy coding! 🚀**

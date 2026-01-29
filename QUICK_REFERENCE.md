# Quick Reference Guide - DigitalPro

## Essential Commands

### Backend Setup & Run
```bash
# Navigate to server
cd server

# Install dependencies
npm install

# Start server (watch for changes if nodemon installed)
npm run dev

# Or start normally
node server.js
```

### Frontend Setup & Run
```bash
# Navigate to client
cd client

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

---

## Common Terminal Commands

### First Time Setup
```bash
# Clone repository (if starting fresh)
git clone <repo-url>
cd fullstack-project

# Setup backend
cd server
npm install
# Create .env file with MONGO_URL

# Setup frontend (in new terminal)
cd client
npm install

# Start both (in separate terminals)
# Terminal 1: cd server && node server.js
# Terminal 2: cd client && npm start
```

### Git Commands
```bash
# Initialize git
git init

# Add all files
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main
```

---

## API Testing with cURL

### Add Project
```bash
curl -X POST http://localhost:5000/projects \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Project",
    "description": "Test Description",
    "image": "https://via.placeholder.com/800x600"
  }'
```

### Get Projects
```bash
curl http://localhost:5000/projects
```

### Add Client
```bash
curl -X POST http://localhost:5000/clients \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "description": "Great service!",
    "designation": "CEO",
    "image": "https://via.placeholder.com/200x200"
  }'
```

### Get Clients
```bash
curl http://localhost:5000/clients
```

### Add Contact
```bash
curl -X POST http://localhost:5000/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Jane Smith",
    "email": "jane@example.com",
    "mobile": "+1234567890",
    "city": "New York"
  }'
```

### Get Contacts
```bash
curl http://localhost:5000/contacts
```

### Subscribe
```bash
curl -X POST http://localhost:5000/subs \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com"
  }'
```

### Get Subscribers
```bash
curl http://localhost:5000/subs
```

---

## Project URLs

### Local Development
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000
- **API Test**: http://localhost:5000

### Production (After Deployment)
- **Frontend**: https://your-frontend-url.com
- **Backend**: https://your-backend-url.com

---

## File Locations

### Important Files to Update
- `server/.env` - Database connection
- `client/src/App.js` - API URL for production
- `client/src/Admin.js` - API URL for production

### CSS Styling
- `client/src/App.css` - All styling (800+ lines)

### Models
- `server/models/Project.js`
- `server/models/Client.js`
- `server/models/Contact.js`
- `server/models/Subscriber.js`

---

## Environment Variables

### Server (.env)
```env
MONGO_URL=mongodb+srv://user:password@cluster.mongodb.net/fullstack-project
PORT=5000
```

### Frontend (.env.local - only for production)
```env
REACT_APP_API_URL=https://your-backend-url.com
```

---

## Common Issues Quick Fix

| Issue | Solution |
|-------|----------|
| Port 3000 in use | Change in React or use: `lsof -i :3000` then kill |
| Port 5000 in use | Change in .env or use: `lsof -i :5000` then kill |
| DB not connecting | Check MONGO_URL in .env |
| CORS error | Ensure backend is running and API URL is correct |
| Images not loading | Use full URLs (http://...) not relative paths |
| npm install fails | Delete node_modules, package-lock.json, run again |

---

## Useful Keyboard Shortcuts

### Terminal
- `Ctrl + C` - Stop running process
- `Ctrl + L` - Clear terminal
- `↑` - Previous command
- `↓` - Next command

### VS Code
- `Ctrl + S` - Save file
- `Ctrl + `` - Toggle terminal
- `Ctrl + /` - Comment code
- `Ctrl + Shift + F` - Find across files
- `Ctrl + H` - Find and replace

---

## Browser DevTools

### Console (F12)
- Check for errors
- View network requests
- Test API calls

### Network Tab
- Monitor API calls
- Check response status
- View payload data

### Elements Tab
- Inspect HTML structure
- Debug CSS issues
- Check computed styles

---

## MongoDB Atlas Quick Access

1. Sign in: https://account.mongodb.com/account/login
2. View data: Collections tab
3. Test connection: Atlas UI
4. Download data: Export to JSON

---

## Testing Checklist

- [ ] Frontend loads
- [ ] Admin panel accessible
- [ ] Can add project
- [ ] Can add client
- [ ] Can submit contact
- [ ] Can subscribe newsletter
- [ ] Can delete project
- [ ] Can delete client
- [ ] Can view all contacts
- [ ] Can view all subscribers
- [ ] Images display correctly
- [ ] Form validation works
- [ ] Mobile responsive
- [ ] No console errors

---

## Useful Online Tools

- **Free Images**: https://unsplash.com
- **Placeholder Images**: https://via.placeholder.com
- **JSON Validator**: https://jsonlint.com
- **API Tester**: https://www.postman.com
- **Color Picker**: https://htmlcolorcodes.com
- **Markdown Preview**: https://dillinger.io

---

## Performance Monitoring

### Check Server
```bash
# Check if running on port 5000
lsof -i :5000

# Check MongoDB connection
# Try connecting in MongoDB Compass
```

### Check Frontend Build
```bash
# Generate production build
cd client
npm run build

# Check build size
ls -lh build/
```

---

## Backup & Restore

### Backup MongoDB
```bash
# Export data
mongodump --uri="your_mongo_url"
```

### Restore MongoDB
```bash
# Import data
mongorestore --uri="your_mongo_url"
```

---

## Code Snippets for Common Tasks

### Add Error Handling to API Calls
```javascript
axios.get("http://localhost:5000/projects")
  .then(res => setProjects(res.data))
  .catch(err => {
    console.error("Error:", err);
    alert("Failed to load projects");
  });
```

### Validate Form Inputs
```javascript
if (!email || email.indexOf("@") === -1) {
  alert("Please enter valid email");
  return;
}
```

### Add Loading State
```javascript
const [loading, setLoading] = useState(false);

const fetchData = async () => {
  setLoading(true);
  try {
    const res = await axios.get("http://localhost:5000/projects");
    setProjects(res.data);
  } finally {
    setLoading(false);
  }
};
```

---

## Resources

- **React Documentation**: https://react.dev
- **Express Guide**: https://expressjs.com
- **MongoDB Manual**: https://docs.mongodb.com
- **MDN Web Docs**: https://developer.mozilla.org
- **Stack Overflow**: https://stackoverflow.com

---

## Project Statistics

- **Frontend Lines**: ~400 lines (App.js + Admin.js)
- **Backend Lines**: ~120 lines (server.js)
- **CSS Lines**: ~800+ lines
- **Database Models**: 4 models
- **API Endpoints**: 10 endpoints
- **Responsive Breakpoints**: 3 (desktop, tablet, mobile)

---

**Version**: 1.0.0
**Last Updated**: January 2026
**Status**: Production Ready ✅

# DigitalPro - Full Stack Application

A modern, responsive full-stack web application featuring a stunning landing page with project showcase and client testimonials, along with a powerful admin dashboard for content management.

## Project Overview

This application consists of:
- **Landing Page**: Modern marketing website with project showcase, client testimonials, contact form, and newsletter subscription
- **Admin Panel**: Dashboard for managing projects, clients, contact submissions, and subscribers
- **Backend API**: RESTful API built with Express.js and MongoDB
- **Database**: MongoDB for persistent data storage

## Technologies Used

### Frontend
- **React 19**: Modern UI library
- **Axios**: HTTP client for API requests
- **CSS3**: Custom responsive styling
- **React Hooks**: For state management

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## Project Structure

```
fullstack-project/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── App.js         # Main app component with landing page
│   │   ├── Admin.js       # Admin panel component
│   │   ├── App.css        # Comprehensive styling
│   │   ├── index.js       # Entry point
│   │   └── assets/        # Images and icons
│   └── package.json
├── server/                # Express backend
│   ├── models/
│   │   ├── Project.js     # Project model
│   │   ├── Client.js      # Client model
│   │   ├── Contact.js     # Contact submission model
│   │   └── Subscriber.js  # Newsletter subscriber model
│   ├── server.js          # Main server file
│   ├── .env               # Environment variables
│   └── package.json
└── README.md
```

## Features

### Landing Page Features
✅ **Hero Section** - Eye-catching banner with call-to-action button
✅ **Why Choose Us** - Feature cards highlighting business benefits
✅ **Projects Showcase** - Display all projects with images and descriptions
✅ **Happy Clients** - Testimonials from satisfied clients
✅ **Contact Form** - Easy-to-use contact form for inquiries
✅ **Newsletter Subscription** - Email subscription section
✅ **Responsive Design** - Mobile-friendly interface
✅ **Modern UI** - Clean, professional design

### Admin Panel Features
✅ **Project Management** - Add and delete projects with image URLs
✅ **Client Management** - Manage client testimonials and designations
✅ **Contact Submissions** - View all contact form submissions
✅ **Subscriber Management** - View all newsletter subscribers
✅ **Tabbed Interface** - Easy navigation between different sections
✅ **Data Display** - Table view for contacts and subscribers
✅ **Delete Functionality** - Remove projects and clients
✅ **Form Validation** - Input validation before submission

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

### Step 1: Clone the Repository
```bash
git clone <your-repo-url>
cd fullstack-project
```

### Step 2: Setup Backend

1. Navigate to server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with MongoDB connection string:
```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/fullstack-project?retryWrites=true&w=majority
PORT=5000
```

4. Start the server:
```bash
node server.js
```

The backend will run on `http://localhost:5000`

### Step 3: Setup Frontend

1. Open a new terminal and navigate to client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the React application:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## API Endpoints

### Projects
- **GET** `/projects` - Fetch all projects
- **POST** `/projects` - Create a new project
- **DELETE** `/projects/:id` - Delete a project

### Clients
- **GET** `/clients` - Fetch all clients
- **POST** `/clients` - Add a new client
- **DELETE** `/clients/:id` - Delete a client

### Contacts
- **GET** `/contacts` - Fetch all contact submissions
- **POST** `/contacts` - Submit a contact form

### Subscribers
- **GET** `/subs` - Fetch all subscribers
- **POST** `/subs` - Subscribe to newsletter

## Database Schema

### Project Model
```javascript
{
  name: String,
  description: String,
  image: String (URL),
  _id: ObjectId,
  createdAt: Date
}
```

### Client Model
```javascript
{
  name: String,
  description: String,
  designation: String,
  image: String (URL),
  _id: ObjectId,
  createdAt: Date
}
```

### Contact Model
```javascript
{
  fullName: String,
  email: String,
  mobile: String,
  city: String,
  _id: ObjectId,
  createdAt: Date
}
```

### Subscriber Model
```javascript
{
  email: String,
  _id: ObjectId,
  createdAt: Date
}
```

## Usage Guide

### Adding Projects
1. Click "Admin Panel" button in the navigation
2. Go to "Projects" tab
3. Fill in project details (name, description, image URL)
4. Click "Add Project"
5. The project will appear on the landing page

### Managing Clients
1. Click "Admin Panel" button
2. Go to "Clients" tab
3. Fill in client details (name, testimonial, designation, image URL)
4. Click "Add Client"
5. Client testimonials will appear on the landing page

### Viewing Submissions
1. Click "Admin Panel" button
2. View "Contacts" tab to see all contact form submissions
3. View "Subscribers" tab to see all newsletter subscribers

### Contact Form
Users can submit contact requests with:
- Full Name
- Email Address
- Mobile Number
- City

### Newsletter Subscription
Users can enter their email to subscribe to the newsletter

## Deployment

### Deploying to Vercel (Frontend)
1. Push code to GitHub
2. Go to Vercel.com and sign in
3. Click "New Project"
4. Select your GitHub repository
5. Set environment variables (API URL)
6. Deploy

### Deploying to Heroku/Railway/Render (Backend)
1. Push code to GitHub
2. Connect to Heroku/Railway/Render
3. Set environment variables (MONGO_URL)
4. Deploy

### Important: Update API URL
After deployment, update the API URL in `App.js` and `Admin.js`:
```javascript
// Change from localhost to deployed backend URL
axios.get("https://your-backend-url.com/projects")
```

## Image Requirements for Better UI

Recommended image dimensions:
- **Project Images**: 800×600 or 1200×800 (landscape)
- **Client Images**: 400×400 (square for testimonials)

Recommended image formats:
- JPG or PNG
- Optimized file size (< 1MB each)
- High quality for best appearance

## Code Quality Features

✅ **Error Handling** - Try-catch blocks for API calls
✅ **Validation** - Form field validation
✅ **Responsive Design** - Mobile, tablet, and desktop support
✅ **Clean Code** - Well-organized and documented
✅ **Modular Structure** - Separated components and concerns
✅ **Professional UI** - Modern gradient design with animations

## Troubleshooting

### Backend Connection Issues
- Ensure MongoDB connection string is correct in `.env`
- Check if MongoDB cluster is active
- Verify network access in MongoDB Atlas

### CORS Errors
- Make sure CORS is enabled in server.js
- Check if frontend URL is allowed

### Port Already in Use
- Change port in server `.env` file
- Or kill process using the port

### Images Not Loading
- Verify image URLs are accessible
- Use absolute URLs (full HTTP/HTTPS links)
- Check image format and size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Lazy loading for images
- Efficient state management
- Optimized CSS with minimal dependencies
- API error handling
- Smooth animations and transitions

## Security Features

- CORS protection
- Environment variable management
- Input validation
- Error handling without exposing sensitive data

## Future Enhancements

- User authentication for admin panel
- Image upload functionality
- Email notifications for submissions
- Advanced analytics
- Multi-language support
- Dark mode toggle
- Search and filter functionality

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## Support

For issues or questions, please create an issue in the repository.

## License

This project is open source and available under the MIT License.

---

**Created for**: Flipr Placement Drive - 2026 Batch

**Version**: 1.0.0

**Last Updated**: January 2026
#   f u l l s t a c k - p o r t f o l i o - a p p  
 #   f u l l s t a c k - a p p - p o r t f o l i o  
 
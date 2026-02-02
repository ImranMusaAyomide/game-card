# Game Landing Page - Project Structure & Guide

## 📁 Project Structure

```
gamelanding-page/
├── src/
│   ├── assets/                 # SVG and image assets
│   │   ├── hero-asset.svg
│   │   ├── ginter.svg
│   │   ├── skull.svg
│   │   ├── bow-remix.svg
│   │   ├── hammer.svg
│   │   ├── candle-rounded.svg
│   │   ├── hands.svg
│   │   ├── question.svg
│   │   ├── background.svg
│   │   ├── axe.svg
│   │   ├── newsimg1.svg
│   │   ├── newsimg2.svg
│   │   └── newsimg3.svg
│   │
│   ├── pages/                  # Page components
│   │   └── LandingPage.jsx     # Main landing page combining all sections
│   │
│   ├── components/             # Reusable components
│   │   ├── LandingPage/        # Landing page sections
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── News.jsx
│   │   │   ├── Faq.jsx
│   │   │   ├── Step.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   └── Auth/               # Authentication components
│   │       ├── SignUp.jsx      # Sign-up form with validation
│   │       └── SignUp.css
│   │
│   ├── utils/                  # Utility functions
│   │   └── validation.js       # Form validation logic
│   │
│   ├── App.jsx                 # Main app with routing
│   ├── App.css
│   ├── main.jsx
│   ├── Header.css
│   ├── Hero.css
│   ├── Features.css
│   ├── News.css
│   ├── Faq.css
│   ├── Step.css
│   └── Footer.css
│
├── public/
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### Build for Production
```bash
npm build
```

### Preview Production Build
```bash
npm run preview
```

## 📝 Features

### 1. Landing Page
The landing page combines multiple sections:
- **Header** - Navigation and logo
- **Hero** - Main call-to-action section with Sign Up button
- **Features** - Game features with character class icons
- **News** - Latest news and updates
- **FAQ** - Frequently asked questions with accordion
- **Step** - Call-to-action section
- **Footer** - Links and newsletter signup

### 2. Sign Up Page
Complete user registration system with:

#### Features:
- ✅ Form validation (real-time error clearing)
- ✅ Password strength requirements
- ✅ Email validation
- ✅ Username validation (3-20 alphanumeric characters)
- ✅ Terms & conditions checkbox
- ✅ LocalStorage persistence
- ✅ Loading states
- ✅ Success messaging
- ✅ Responsive design

#### Validation Rules:
- **Username**: 3-20 characters (alphanumeric + underscore)
- **Email**: Valid email format
- **Password**: Min 8 chars with uppercase, lowercase, and number
- **Confirm Password**: Must match password field
- **Terms**: Must be agreed to

#### Form Data Structure:
```javascript
{
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
  agreeTerms: boolean
}
```

## 🔄 Routing

- `/` - Landing Page
- `/signup` - Sign Up Page

## 🎨 Styling

All components use:
- Custom CSS for styling
- CSS Grid and Flexbox for layout
- Responsive design with media queries
- Gradient backgrounds and transitions

## 📦 Dependencies

### Core
- React 19.2.0
- React DOM 19.2.0
- React Router DOM 6.x

### Icons
- FontAwesome SVG Core
- FontAwesome React
- FontAwesome Free Solid Icons

### Build Tools
- Vite
- ESLint

## 💾 Data Persistence

Sign-up data is stored in localStorage with key `gameUser`:
```javascript
{
  username: "user_name",
  email: "user@example.com",
  createdAt: "2026-02-02T10:30:00.000Z"
}
```

## 🔒 Security Notes

- Passwords are validated client-side
- For production: implement server-side validation and secure authentication
- Store sensitive data securely (never store passwords in localStorage)

## 📱 Responsive Breakpoints

- Mobile: < 600px
- Tablet: 600px - 1024px
- Desktop: > 1024px

## 🛠️ Customization

### Updating Hero CTA
Edit `/src/components/LandingPage/Hero.jsx` to change the Sign Up button text or styling.

### Adding Navigation Links
Update navigation in `/src/components/LandingPage/Header.jsx`

### Changing Colors/Theme
Modify CSS files or create a theme variables file for consistency.

## 🚧 Future Enhancements

- [ ] Login page
- [ ] User dashboard
- [ ] Profile management
- [ ] Backend API integration
- [ ] OAuth/Social login
- [ ] Email verification
- [ ] Password reset flow
- [ ] User preferences/settings

## 📧 Contact & Support

For issues or feature requests, please contact the development team.

---

**Last Updated**: February 2, 2026

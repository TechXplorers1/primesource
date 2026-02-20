# Prime Source – Professional Government Contractor Website

A modern, professional, animated corporate website for Prime Source, a U.S. Government and defense technology contractor. Built with **Vite + React** for high performance, responsive design, and rich interactive content.

---

## 🚀 Features

### Design & UX
- **Professional & Modern:** Navy blue, white, gray with subtle red accents
- **Fully Responsive:** Optimized for mobile, tablet, and desktop
- **Smooth Animations:** Fade-in, slide-up/down, hover effects on cards and CTAs
- **Enterprise-Grade UI:** Clean typography, proper spacing, accessibility-friendly

### Pages & Content

#### Home Page
- Hero section with mission-focused headline
- Stats section (500+ projects, 98% satisfaction, 50+ cleared personnel, 15+ years)
- About overview with security-first messaging
- Services preview grid (6 services with icons)
- "Why Choose Prime Source?" section with 3 reason cards
- Success stories / testimonials from Army, Navy, and Federal agencies
- Government & Defense focus statement
- Call-to-action section

#### Services Page
- 6 detailed service cards with feature lists and gradient backgrounds:
  - Federal IT Services
  - Cybersecurity & Compliance
  - Cloud & Infrastructure
  - Defense Systems Support
  - Data Analytics & Integration
  - Software Development
- Each service includes 4+ key features with checkmarks
- Professional CTA to contact for proposals

#### About Page
- Company mission and vision
- Core values (expanded with descriptions)
- Company timeline (2008–2023 milestones)
- Leadership team with bios
- Certifications & compliance badges (6 certifications)
- Security & Compliance commitment section

#### Contact Page
- Contact form (Name, Email, Company, Message)
- Government-focused contact information
- Placeholder for Google Map
- Professional layout with proper spacing

#### Additional Pages
- Responsive navbar with hamburger menu for mobile
- Rich footer with quick links, contact info, and LinkedIn link
- Professional styling throughout

---

## 📦 Tech Stack

- **Vite** – Fast build tool and dev server
- **React 18** – UI library
- **React Router** – Client-side routing
- **CSS3** – Modern CSS with keyframe animations and responsive media queries
- **JavaScript (ES6+)** – Clean, maintainable code

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Quick Start

1. **Clone or Navigate to Project**
   ```bash
   cd primesource
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`

4. **Build for Production**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` folder.

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```
primesource/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Responsive navigation with hamburger menu
│   │   ├── Footer.jsx              # Rich footer with links and contact
│   │   ├── HeroSection.jsx         # Reusable hero banner
│   │   ├── ServiceCard.jsx         # Individual service card component
│   │   └── ServicesGrid.jsx        # Grid wrapper for service cards
│   ├── pages/
│   │   ├── Home.jsx                # Home page with stats, testimonials, CTA
│   │   ├── Service.jsx             # Services page with detailed cards
│   │   ├── About.jsx               # About page with timeline, leadership, certs
│   │   ├── Contact.jsx             # Contact form and info
│   │   ├── Login.jsx               # Login page (placeholder)
│   │   └── Signup.jsx              # Signup page (placeholder)
│   ├── App.jsx                     # Main app router and layout
│   ├── main.jsx                    # Entry point
│   ├── index.css                   # Global styles with animations & responsive design
│   └── assets/
├── public/
├── vite.config.js                  # Vite configuration
├── package.json                    # Dependencies & scripts
├── eslint.config.js                # ESLint configuration
└── README.md                       # This file
```

---

## 🎨 Design System

### Color Palette
- **Primary:** `#2c3e50` (Navy Blue)
- **Secondary:** `#34495e` (Dark Slate)
- **Accent:** `#e74c3c` (Red)
- **Background:** `#f4f4f4` (Light Gray)
- **Text:** `#333` (Dark Gray)
- **White:** `#ffffff`

### Typography
- **Font Family:** 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Headings:** Bold, sizes 1.4rem–3rem depending on context
- **Body:** Regular weight, 1rem, line-height 1.6–1.7

### Spacing & Layout
- Container max-width: 1200px
- Responsive padding: 20px on mobile, scales up on larger screens
- Grid gaps: 20–30px depending on context
- Vertical spacing between sections: 30–60px

### Animations
- **Fade-in:** Smooth opacity transition (0.8s)
- **Slide-up:** Upward entrance with fade (0.8s)
- **Hover effects:** Cards lift with shadow, buttons glow
- **Transitions:** All interactive elements (0.3s cubic-bezier)

---

## 📱 Responsive Breakpoints

- **Desktop:** > 900px (full layout)
- **Tablet:** 768px – 900px (adjusted spacing, single-column grids)
- **Mobile:** 480px – 768px (compact cards, hamburger menu)
- **Small Mobile:** < 480px (extra-small spacing and font sizes)

---

## ✨ Key Components

### HeroSection.jsx
Reusable hero banner with title, subtitle, and CTA button. Used on the home page.

```jsx
<HeroSection 
  title="Delivering Mission-Critical Solutions"
  subtitle="For U.S. Government and defense sectors"
  ctaText="Explore Services"
  ctaLink="/service"
/>
```

### ServiceCard.jsx
Individual service card with icon, title, and description.

### ServicesGrid.jsx
Grid layout for displaying multiple service cards.

---

## 🚀 Deployment

### Vercel
1. Push to GitHub
2. Connect repo to Vercel
3. Vercel auto-detects Vite and deploys

### Netlify
1. Build locally: `npm run build`
2. Deploy the `dist/` folder to Netlify (or connect GitHub)

### Traditional Hosting
1. Run `npm run build`
2. Upload `dist/` folder to your web server

---

## 📝 Content Customization

### Update Company Info
- **Navbar Logo:** Edit `src/components/Navbar.jsx`
- **Footer Links & Contact:** Edit `src/components/Footer.jsx`
- **Contact Page Info:** Edit `src/pages/Contact.jsx`

### Update Services
- Edit the `services` array in `src/pages/Home.jsx` and `src/pages/Service.jsx`
- Add/modify service icons (SVGs)
- Update descriptions and feature lists

### Update Leadership
- Edit the `Leader` component in `src/pages/About.jsx`
- Add/modify leadership profiles with names, titles, and bios

### Change Colors
- Edit CSS variables in `src/index.css` (lines 1–8)
- Global color changes propagate throughout the site

---

## ♿ Accessibility

- Semantic HTML (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- ARIA labels on interactive elements (buttons, links)
- Proper heading hierarchy (h1, h2, h3, h4)
- Color contrast meets WCAG AA standards
- Keyboard navigation support for all interactive elements
- Focus states on buttons and links

---

## 🔒 Security Notes

- No sensitive data is hardcoded
- Form submissions are handled locally (integrate with backend as needed)
- All external links use `target="_blank" rel="noreferrer"`
- CSP-friendly (no inline scripts)

---

## 📞 Support & Customization

For custom modifications:
1. Review the component structure
2. Edit styles in `src/index.css`
3. Modify page content in `src/pages/`
4. Add new components as needed

---

## 📄 License

Internal use only. All rights reserved by Prime Source.

---

## 🎯 Next Steps

1. **Replace Placeholder Content:**
   - Update company name, phone, email, address
   - Replace service descriptions with real offerings
   - Update leadership team and bios
   - Add actual testimonials

2. **Add Real Images:**
   - Replace service card gradients with actual images
   - Add company logo to navbar
   - Add team photos for leadership section

3. **Integrate Backend:**
   - Connect contact form to email service (e.g., SendGrid, Formspree)
   - Add form validation and error handling
   - Implement analytics tracking

4. **SEO & Performance:**
   - Add meta tags in `index.html`
   - Optimize images for web
   - Enable gzip compression on server
   - Monitor Core Web Vitals

---

**Built with ❤️ by your frontend team. Ready to deploy and serve your government mission.**

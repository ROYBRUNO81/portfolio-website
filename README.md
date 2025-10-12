# Portfolio Website

A modern, responsive portfolio website built with Next.js, styled with Tailwind CSS, and featuring smooth animations powered by Framer Motion.

## Features

- ✨ Modern and clean design
- 🎨 Tailwind CSS for styling
- 🎭 Framer Motion animations
- 📱 Fully responsive (mobile-first approach)
- 🚀 Static site export ready
- 🎯 SEO optimized
- 💚 Accent color theme (#00ff99)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone or download this repository

2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page will auto-update as you edit files.

### Building for Production

Build the project:

```bash
npm run build
```

This will create an optimized static export in the `out` folder, ready to be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

### Export Static Site

The project is configured for static export. After running `npm run build`, you'll have a complete static site in the `out` directory.

## Customization Guide

### 1. Replace Personal Information

**In `app/page.js`:**
- Update the subtitle: `"Software Engineer & CS Student"`
- Change the name: `"Germain Hirwa"`
- Update the bio paragraph
- Replace the resume link URL

**In `components/Header.jsx`:**
- Update the logo name: `"Germain"`

**In `app/layout.js`:**
- Update metadata title and description

### 2. Update Stats

**In `components/Stats.jsx`:**

Replace the stats array with your own numbers:

```javascript
const stats = [
  { num: 4, text: "Years of experience" },
  { num: 24, text: "Projects Completed" },
  // ... add or modify as needed
];
```

### 3. Replace Social Links

**In `components/Socials.jsx`:**

Update the social media links:

```javascript
const socials = [
  { icon: <FaGithub />, path: "https://github.com/YOUR-USERNAME" },
  { icon: <FaLinkedin />, path: "https://linkedin.com/in/YOUR-PROFILE" },
  { icon: <FaInstagram />, path: "https://instagram.com/YOUR-USERNAME" },
  { icon: <FaTwitter />, path: "https://twitter.com/YOUR-USERNAME" },
];
```

### 4. Replace Profile Photo

Replace the placeholder image at `public/profile.jpg` with your own photo:
- Recommended size: 500x500px or larger
- Format: JPG, PNG, or WebP
- Keep the filename as `profile.jpg` or update the reference in `components/Photo.jsx`

### 5. Add Resume

Replace the Google Drive link in `app/page.js` with your own resume link, or:
- Add a PDF file to the `public` folder (e.g., `public/resume.pdf`)
- Update the link to `href="/resume.pdf"`

### 6. Customize Colors

The accent color is defined in `app/globals.css`. To change it:

```css
@theme inline {
  --color-accent: #00ff99; /* Change this to your preferred color */
  --color-accent-hover: #00e187; /* Hover state color */
  --color-primary: #1c1c22; /* Background color */
}
```

### 7. Navigation Links

**In `components/Header.jsx`:**

You can add or remove navigation links:

```javascript
const navLinks = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];
```

Note: You'll need to create corresponding pages for each route in the `app` directory.

## Project Structure

```
portfolio-website/
├── app/
│   ├── globals.css       # Global styles and Tailwind config
│   ├── layout.js         # Root layout with Header
│   └── page.js          # Homepage component
├── components/
│   ├── Header.jsx       # Navigation header
│   ├── Photo.jsx        # Animated profile photo
│   ├── Socials.jsx      # Social media links
│   └── Stats.jsx        # Statistics section
├── public/
│   └── profile.jpg      # Profile photo (REPLACE THIS)
├── next.config.mjs      # Next.js configuration
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Deploy to GitHub Pages

1. Build the project: `npm run build`
2. Push the `out` folder to your GitHub Pages repository

## Technologies Used

- **Next.js 15** - React framework
- **React 19** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## Support

For issues or questions, please refer to the [Next.js documentation](https://nextjs.org/docs) or [Tailwind CSS documentation](https://tailwindcss.com/docs).

## License

This template is free to use for personal and commercial projects.

---

**Happy coding! 🚀**

Replace this placeholder content with your own information and make it yours!

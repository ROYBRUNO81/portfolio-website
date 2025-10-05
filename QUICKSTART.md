# Quick Start Guide

## Immediate Next Steps

### 1. Start Development Server

```bash
npm run dev
```

Visit http://localhost:3000 to see your portfolio!

### 2. Replace Profile Photo

- Replace `public/profile.jpg` with your own photo
- Recommended: 500x500px or larger, square aspect ratio

### 3. Update Personal Information

Edit `app/page.js`:
- Line 18: Change "Germain Hirwa" to your name
- Line 20-25: Update your bio
- Line 30: Update resume link

Edit `components/Header.jsx`:
- Line 19: Change "Germain" to your name/logo

### 4. Update Social Links

Edit `components/Socials.jsx`:
- Update GitHub, LinkedIn, Instagram, and Twitter URLs

### 5. Update Stats

Edit `components/Stats.jsx`:
- Modify the numbers and descriptions to match your experience

### 6. Customize Colors (Optional)

Edit `app/globals.css`:
- Line 4: Change `--color-accent: #00ff99;` to your preferred accent color
- Line 5: Change `--color-accent-hover` for the hover state

## Build for Production

```bash
npm run build
```

The static site will be in the `out` folder, ready to deploy!

## Deploy

### Option 1: Vercel (Easiest)
1. Push to GitHub
2. Connect at vercel.com
3. Deploy automatically

### Option 2: Netlify
1. Build: `npm run build`
2. Deploy the `out` folder

### Option 3: GitHub Pages
1. Build: `npm run build`
2. Push `out` folder to gh-pages branch

---

Need help? Check README.md for detailed instructions.


# 📋 Customization Checklist

Use this checklist to personalize your portfolio website!

## ⚡ Quick Wins (5 minutes)

### 1. Profile Photo
- [ ] Replace `public/profile.jpg` with your photo
  - Recommended: 500x500px or larger
  - Square aspect ratio works best

### 2. Name & Title
File: `app/page.js`
```javascript
// Line 18 - Change this:
<span className="text-accent">Germain Hirwa</span>

// Line 16 - And this:
<span className="text-xl">Software Engineer & CS Student</span>
```

### 3. Bio/Description
File: `app/page.js` (Lines 20-25)
```javascript
<p className="max-w-[600px] mb-9 text-white/80">
  Your compelling bio here...
</p>
```

## 🔗 Links & Contacts (10 minutes)

### 4. Social Media Links
File: `components/Socials.jsx`
```javascript
const socials = [
  { icon: <FaGithub />, path: "YOUR-GITHUB-URL" },
  { icon: <FaLinkedin />, path: "YOUR-LINKEDIN-URL" },
  { icon: <FaInstagram />, path: "YOUR-INSTAGRAM-URL" },
  { icon: <FaTwitter />, path: "YOUR-TWITTER-URL" },
];
```

### 5. Resume Link
File: `app/page.js` (Line 30)

Option A - External link (Google Drive, Dropbox, etc.):
```javascript
<Link href="YOUR-RESUME-URL" target="_blank" rel="noopener noreferrer">
```

Option B - Local file:
1. Add `resume.pdf` to `public/` folder
2. Change to:
```javascript
<Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
```

## 📊 Stats Section (5 minutes)

### 6. Update Your Numbers
File: `components/Stats.jsx`
```javascript
const stats = [
  { num: 4, text: "Years of experience" },        // ← Change these
  { num: 24, text: "Projects Completed" },        // ← Change these
  { num: 10, text: "Technologies Mastered" },     // ← Change these
  { num: 310, text: "Code Commits" },             // ← Change these
  { num: 2, text: "Software Engineering Internships" }, // ← Add/remove items
];
```

## 🎨 Branding (Optional - 10 minutes)

### 7. Logo/Name in Header
File: `components/Header.jsx` (Line 19)
```javascript
{"Germain".split("").map((letter, index) => ( // ← Change "Germain" to your name
```

### 8. Page Title & SEO
File: `app/layout.js` (Lines 11-14)
```javascript
export const metadata = {
  title: "Your Name - Portfolio",
  description: "Your professional description for SEO",
};
```

### 9. Accent Color (Optional)
File: `app/globals.css` (Lines 4-5)
```css
--color-accent: #00ff99;        /* ← Your brand color */
--color-accent-hover: #00e187;  /* ← Slightly darker for hover */
```

Popular alternatives:
- Blue: `#3B82F6` (Tech)
- Purple: `#A855F7` (Creative)
- Orange: `#F97316` (Energetic)
- Pink: `#EC4899` (Modern)

## 📄 Content Pages (15-30 minutes each)

### 10. Services Page
File: `app/services/page.js`
- [ ] Add your services/offerings
- [ ] Include pricing (optional)
- [ ] Add call-to-action

### 11. Resume/Experience Page
File: `app/resume/page.js`
- [ ] Education history
- [ ] Work experience
- [ ] Skills section
- [ ] Certifications

### 12. Work/Portfolio Page
File: `app/work/page.js`
- [ ] Project showcase
- [ ] Screenshots/demos
- [ ] Technologies used
- [ ] Live links/GitHub repos

### 13. Contact Page
File: `app/contact/page.js`
- [ ] Email address (Line 13)
- [ ] Phone number (Line 18)
- [ ] Optional: Contact form
- [ ] Optional: Location/timezone

Current placeholders:
```javascript
<a href="mailto:your.email@example.com">  // ← Update
<a href="tel:+1234567890">                // ← Update
```

## 🚀 Before Deploying

### Pre-deployment Checklist
- [ ] All personal info updated
- [ ] Profile photo replaced
- [ ] All links tested (click each one!)
- [ ] Resume link works
- [ ] Social media links work
- [ ] Test on mobile (Chrome DevTools)
- [ ] Run `npm run build` successfully
- [ ] No console errors

### Test Your Build
```bash
npm run build
```

If successful, you'll see:
```
✓ Compiled successfully
✓ Generating static pages
✓ Finalizing page optimization
```

## 📱 Mobile Testing

Test these breakpoints:
- [ ] Mobile: 375px (iPhone)
- [ ] Tablet: 768px (iPad)
- [ ] Desktop: 1280px+

The site should look good on all sizes!

## 🎯 Priority Order

If short on time, do in this order:
1. ✅ Profile photo
2. ✅ Name and bio
3. ✅ Social links
4. ✅ Stats numbers
5. ⏭️ Content pages (can do later)
6. ⏭️ Color customization (optional)

---

## ✨ You're Ready When:

- ✅ Profile photo is your actual photo
- ✅ Name appears correctly everywhere
- ✅ All social links work
- ✅ Stats reflect your experience
- ✅ Site builds without errors

Then you're ready to deploy! 🚀

See `README.md` for deployment instructions.


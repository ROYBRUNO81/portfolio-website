# Education Timeline Customization Guide

## How to Edit Education Timeline Content

The Education Timeline component is located in `components/EducationTimeline.jsx`.

### Editing Education Data

To modify the education entries, edit the `educationData` array in the component:

```javascript
const educationData = [
  {
    year: "2018",                    // ← Change year
    title: "High School",            // ← Change institution/degree
    subtitle: "Valedictorian, All A's", // ← Change subtitle
    gpa: "GPA 4.0",                 // ← Change GPA
    details: [                       // ← Edit subjects/details
      "Advanced Mathematics",
      "Physics & Chemistry",
      "Computer Science Fundamentals",
      "Leadership & Student Government"
    ],
    side: "left"                     // ← "left" or "right" for desktop layout
  },
  {
    year: "2024 – Present",          // ← Change year range
    title: "BS Computer Science",    // ← Change degree
    subtitle: "Junior Year",         // ← Change year/status
    gpa: "GPA 3.8",                 // ← Change GPA
    details: [                       // ← Edit subjects/details
      "Data Structures & Algorithms",
      "Software Engineering",
      "Database Systems",
      "Machine Learning"
    ],
    side: "right"                    // ← "left" or "right" for desktop layout
  }
];
```

### Adding More Education Entries

To add more education entries:

1. Add a new object to the `educationData` array
2. Follow the same structure as existing entries
3. Alternate `side: "left"` and `side: "right"` for visual balance

### Customization Options

#### Timeline Styling
- **Colors**: Edit accent color in `app/globals.css` (--color-accent)
- **Glow Effects**: Modify `.timeline-glow` and `.timeline-card` classes
- **Animations**: Adjust `containerVariants` and `itemVariants` in the component

#### Responsive Behavior
- **Desktop**: Timeline line in center, cards alternate left/right
- **Mobile**: Timeline line on left, cards full width
- **Breakpoint**: Changes at `xl:` (1280px)

#### Animation Settings
- **Stagger Delay**: `staggerChildren: 0.3` (delay between items)
- **Fade In**: `delayChildren: 0.2` (initial delay)
- **Scroll Trigger**: `margin: "-100px"` (when animation starts)

### Example: Adding a Master's Degree

```javascript
{
  year: "2026 – 2028",
  title: "MS Computer Science",
  subtitle: "Graduate Student",
  gpa: "GPA 3.9",
  details: [
    "Advanced Algorithms",
    "Machine Learning Research",
    "Thesis: AI Applications",
    "Teaching Assistant"
  ],
  side: "left"
}
```

### File Structure

```
components/
├── EducationTimeline.jsx    # Main timeline component
├── Photo.jsx               # Profile photo
├── Stats.jsx               # Statistics section
└── Socials.jsx             # Social media links

app/
├── page.js                 # Homepage (imports EducationTimeline)
└── globals.css             # Timeline styles
```

### Build & Development

The timeline is fully integrated and will work with:
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run export` - Static export

### Notes

- Timeline automatically adapts to content length
- Smooth scroll animations use Framer Motion
- Responsive design works on all screen sizes
- Matches site's accent color (#00ff99) and typography
- Hover effects and glow animations included

---

**Ready to customize!** Just edit the `educationData` array with your actual education information.

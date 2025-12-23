# Content Customization Guide

This guide shows you exactly where to add your personal content to the jazz-themed portfolio.

## 🎯 Quick Reference

| Section | File | What to Edit |
|---------|------|--------------|
| Hero | `HeroSection.tsx` | ✅ Already uses your image |
| About Me | `AboutSection.tsx` | Replace placeholder text |
| Work Experience | `ExperienceSection.tsx` | Update `jobs` array |
| Weaknesses/Strengths | `WeaknessToStrengthSection.tsx` | Update `transformations` array |
| Projects | `ProjectsSection.tsx` | Update `projects` array |
| Footer | `Footer.tsx` | Update contact links |

---

## 📝 Section-by-Section Instructions

### 1. About Me Section
**File**: `/src/app/components/AboutSection.tsx`

Find this section around line 20-35:

```tsx
{/* Left Column */}
<div className="space-y-6">
  <h2 className="text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
    About Me
  </h2>
  <div className="text-white/90 space-y-4" style={{ fontFamily: 'var(--font-sans)' }}>
    {/* ADD YOUR CONTENT HERE */}
    <p>Your first paragraph...</p>
    <p>Your second paragraph...</p>
  </div>
</div>

{/* Right Column */}
<div className="space-y-6">
  <h3 className="text-white mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
    Background
  </h3>
  <div className="text-white/90 space-y-4" style={{ fontFamily: 'var(--font-sans)' }}>
    {/* ADD YOUR CONTENT HERE */}
    <p>More about you...</p>
  </div>
</div>
```

---

### 2. Work Experience Section
**File**: `/src/app/components/ExperienceSection.tsx`

Find the `jobs` array at the top (around line 11):

```tsx
const jobs: Job[] = [
  { 
    id: 1, 
    title: 'Senior Developer', // Job title that appears on the note
    position: 3,                // Staff line (1-5, where 1 is top)
    description: 'Led development team...' // Full description shown when clicked
  },
  { 
    id: 2, 
    title: 'Product Manager', 
    position: 1, 
    description: 'Managed product lifecycle...' 
  },
  // Add more jobs...
];
```

**Tips**:
- `position` 1 = top staff line, 5 = bottom staff line
- Jobs appear left-to-right in the array order
- Add as many jobs as you want (they'll spread across the staff)

---

### 3. Weaknesses to Strengths Section
**File**: `/src/app/components/WeaknessToStrengthSection.tsx`

Find the `transformations` array (around line 10):

```tsx
const transformations: Transformation[] = [
  { 
    weakness: 'Perfectionism', 
    strength: 'Attention to Detail' 
  },
  { 
    weakness: 'Impatience', 
    strength: 'Drive for Results' 
  },
  { 
    weakness: 'Reserved', 
    strength: 'Thoughtful Listener' 
  },
  // Add more transformations...
];
```

**Tips**:
- Each transformation gets its own card with slider
- Keep text concise for visual impact
- Add 3-5 transformations for best effect

---

### 4. Projects Gallery Section
**File**: `/src/app/components/ProjectsSection.tsx`

Find the `projects` array (around line 11):

```tsx
const projects: Project[] = [
  { 
    id: 1, 
    title: 'E-Commerce Platform',     // Main project title
    subtitle: 'React & Node.js',      // Technology or brief description
    color: '#CC5500'                  // Border color (use theme colors)
  },
  { 
    id: 2, 
    title: 'Mobile App', 
    subtitle: 'iOS & Android', 
    color: '#4A5D4E' 
  },
  // Add more projects...
];
```

**Available Theme Colors**:
- `#CC5500` - Burnt Orange
- `#4A5D4E` - Moss Green
- `#5A7D9A` - Dusty Blue
- `#A52A2A` - Brick Red

**Optional Enhancement**: Add background images to cards:
```tsx
<div
  className="..."
  style={{ 
    borderColor: project.color,
    backgroundImage: 'url(/path/to/image.jpg)',
    backgroundSize: 'cover'
  }}
>
```

---

### 5. Footer Contact Info
**File**: `/src/app/components/Footer.tsx`

Find the contact section (around line 23):

```tsx
<div>
  <p className="text-white/40 text-sm mb-2">Email</p>
  <a 
    href="mailto:your.email@example.com"  // UPDATE THIS
    className="..."
  >
    your.email@example.com                 // UPDATE THIS
  </a>
</div>
<div>
  <p className="text-white/40 text-sm mb-2">LinkedIn</p>
  <a 
    href="https://linkedin.com/in/yourprofile"  // UPDATE THIS
    className="..."
  >
    /in/yourprofile                             // UPDATE THIS
  </a>
</div>
<div>
  <p className="text-white/40 text-sm mb-2">GitHub</p>
  <a 
    href="https://github.com/yourusername"  // UPDATE THIS
    className="..."
  >
    @yourusername                            // UPDATE THIS
  </a>
</div>
```

Also update the "Book the Act" button (around line 51):

```tsx
<button
  onClick={() => window.location.href = 'mailto:your.email@example.com'}  // UPDATE THIS
  className="..."
>
  Book the Act
</button>
```

---

## 🎨 Optional Customizations

### Change Section Titles

Each section has a customizable title:

- **Experience**: "The Experience" → Change in `ExperienceSection.tsx` line 23
- **Weaknesses**: "Accidents into Improv" → Change in `WeaknessToStrengthSection.tsx` line 21
- **Projects**: "The Gallery" → Change in `ProjectsSection.tsx` line 30

### Add More Musical Notes

In `ExperienceSection.tsx`, add more jobs to the array to create more notes on the staff.

### Adjust Card Heights

In `ProjectsSection.tsx` (line 37), modify the `heights` array:

```tsx
const heights = ['h-64', 'h-80', 'h-72', 'h-96', 'h-64', 'h-88'];
// h-64 = 16rem, h-80 = 20rem, h-96 = 24rem, etc.
```

---

## 🎵 Adding Real Audio

To replace the placeholder audio in the floating toggle:

1. Add your audio files to `/public/audio/`:
   - `record-scratch.mp3`
   - `jazz-loop.mp3`

2. Update `/src/app/components/FloatingAudioToggle.tsx`:

```tsx
import { useState, useRef } from 'react';

export function FloatingAudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const scratchRef = useRef<HTMLAudioElement>(null);

  const handleToggle = () => {
    if (!isPlaying) {
      // Play record scratch once
      scratchRef.current?.play();
      // Then start loop after scratch finishes
      setTimeout(() => {
        audioRef.current?.play();
      }, 1000);
    } else {
      audioRef.current?.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={scratchRef} src="/audio/record-scratch.mp3" />
      <audio ref={audioRef} src="/audio/jazz-loop.mp3" loop />
      
      <button onClick={handleToggle} className="...">
        {/* ... rest of button ... */}
      </button>
    </>
  );
}
```

---

## 🚀 Quick Start Checklist

- [ ] Update About Me bio (2 columns)
- [ ] Add your work experience (jobs array)
- [ ] Define weakness-to-strength transformations
- [ ] List your projects with descriptions
- [ ] Update footer contact information
- [ ] (Optional) Add audio files
- [ ] (Optional) Add project images to gallery cards

---

That's it! The site is now fully customized with your content. 🎉

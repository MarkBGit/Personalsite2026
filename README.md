# Mark Benjamin - Jazz-Themed Portfolio

A single-page personal portfolio website with a "Muted Autumn" Mid-Century Modern jazz aesthetic.

## 🎵 Theme: Jazz Record Album Experience

This portfolio is designed to feel like exploring a vintage jazz record album, with each section representing a different part of the musical experience.

## 🎨 Color Palette

- **Deep Charcoal Grey** (#121212) - Primary background
- **Burnt Orange** (#CC5500) - Headers, CTAs, primary accent
- **Moss Green** (#4A5D4E) - Nature and growth
- **Dusty Blue** (#5A7D9A) - "The Blues"
- **Brick Red** (#A52A2A) - Warmth accent

## 📑 Sections

1. **Hero** - "Front of the Sleeve" - Album cover presentation
2. **About Me** - "Back of the Sleeve" - Two-column bio layout
3. **Work Experience** - "The Experience" - Interactive musical staff with job notes
4. **Weaknesses to Strengths** - "Accidents into Improv" - Slider transformation cards
5. **Projects** - "The Gallery" - Masonry grid of gig posters
6. **Footer** - Concert program style with contact info

## 🎭 Interactive Features

- **Floating Audio Toggle** - Play/pause button (bottom-right) for background jazz
- **Scroll Mixer Slider** - Visual scroll depth indicator (right side)
- **Parallax Symbols** - Floating musical notes that move with scroll
- **Musical Staff** - Click notes to reveal job details, hover to highlight staff lines
- **Transformation Slider** - Drag to reveal weakness-to-strength transformations
- **Gig Poster Cards** - Hover for lift effect and overlay

## 🛠️ Built With

- React 18.3.1
- Tailwind CSS 4.0
- Motion (Framer Motion) for animations
- React Responsive Masonry for gallery layout
- Lucide React for icons
- Google Fonts (Playfair Display + Montserrat)

## 📝 Customization Guide

### Content to Fill In:

1. **About Me Section** (`/src/app/components/AboutSection.tsx`):
   - Replace placeholder bio text in both columns

2. **Experience Section** (`/src/app/components/ExperienceSection.tsx`):
   - Update the `jobs` array with your actual positions
   - Modify `title`, `position` (staff line 1-5), and `description`

3. **Weaknesses/Strengths Section** (`/src/app/components/WeaknessToStrengthSection.tsx`):
   - Update the `transformations` array with your examples

4. **Projects Section** (`/src/app/components/ProjectsSection.tsx`):
   - Update the `projects` array with your work
   - Optionally add background images to cards

5. **Footer** (`/src/app/components/Footer.tsx`):
   - Update contact links (email, LinkedIn, GitHub)
   - Update "Book the Act" button link/action

### Audio Integration:

To add real audio to the floating toggle (`/src/app/components/FloatingAudioToggle.tsx`):
1. Add audio files to `/public` or import them
2. Replace the placeholder `handleToggle` function with actual Audio API calls
3. Play record scratch on first click, then loop lo-fi jazz

## 📂 Project Structure

```
src/
├── app/
│   ├── App.tsx                          # Main app component
│   └── components/
│       ├── HeroSection.tsx              # Album cover hero
│       ├── AboutSection.tsx             # Bio section
│       ├── ExperienceSection.tsx        # Musical staff jobs
│       ├── WeaknessToStrengthSection.tsx # Slider transformations
│       ├── ProjectsSection.tsx          # Masonry gallery
│       ├── Footer.tsx                   # Concert program footer
│       ├── FloatingAudioToggle.tsx      # Audio play/pause
│       ├── ScrollMixerSlider.tsx        # Scroll depth tracker
│       └── ParallaxSymbols.tsx          # Floating musical symbols
├── styles/
│   ├── fonts.css                        # Google Fonts imports
│   ├── theme.css                        # Custom color palette & tokens
│   └── index.css                        # Main stylesheet
```

## 🚀 Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 📋 See CHANGELOG.md for detailed implementation notes

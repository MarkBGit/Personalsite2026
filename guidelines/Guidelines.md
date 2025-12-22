Design system guidelines

# Visual Identity & Palette

Theme: "Muted Autumn" Mid-Century Modern.
* Primary Background: Deep Charcoal Grey (#121212) remains the static base color for the entire site.

Accents:
* Moss Green: (#4A5D4E) Symbolizing nature and growth.
* Burnt Orange: (#CC5500) Primary energy color for headers and CTAs.
* Dusty Blue: (#5A7D9A) Representing "The Blues".
* Brick Red: (#A52A2A) Providing warmth.

Typography:
* Headers: Bold Serif (e.g., Playfair Display).
* Body: Clean Sans-Serif (e.g., Montserrat).

# Section Specifications

Section 1: The Hero ("Front of the Sleeve")

* Design: The base Deep Charcoal background persists. A separate image asset representing a "Front Record Cover" is placed/centered within this section.
* Visuals: The record cover image should feature large-scale typography and a halftone/screen-printed photo of the user.
* Branding: Include a "Stereo" or "High-Fidelity" logo in the top corner of the record cover image.

Section 2: About Me ("Back of the Sleeve")

* Design: A separate image asset representing the "Back of the Record" is overlaid on the Charcoal background.
* Overlay: The image should be treated or darkened so that white body text is clearly legible when placed over it.
* Layout: A two-column "grid" typical of vintage jazz LPs.

Section 3: Work Experience ("The Experience")

* Visual: A horizontal five-line musical staff running across the screen.
* Clef: A cursive version of (MB) initials acting as the "treble clef".
* Nodes: Job titles represented as musical notes on the staff.
* Interaction: Clicking a note expands "Liner Notes" detailing job descriptions. Hovering over a note lights up the specific staff line in Moss Green.

Section 4: Weaknesses to Strengths ("Accidents into Improv")

* Design: A split-card layout.
* Interaction: A vertical slider handle in the center.
* Visual Resolution: Left side shows muted grey text (Weakness); sliding to the right reveals glowing Burnt Orange text (Strength).

Section 5: Interests & Projects ("The Gallery")

* Design: Vertical rectangles styled like "Gig Posters" or Blue Note advertisements.
* Layout: A masonry grid with a carousel gallery view.
* Interaction: Standard CSS hover effects like a "lift" or color overlay shift.

# Global Interactions & Footer

* Floating Audio Toggle: A "Play" button icon fixed at the bottom right of the screen. Function: Triggers a record scratch sound and toggles a low-volume lo-fi jazz loop globally.
* The "Volume" Nav: A vertical "Mixer Slider" on the side of the screen. Functionality: Strictly visual. The slider moves automatically to track scroll depth; it is not a clickable menu.
* Scroll Parallax: Musical symbols (clefs, notes) floating upward at variable speeds.
* Patch Cables: Visual lines (like on an analog synth) connecting different skills.
* Footer: Styled like a concert program with contact info and a "Book the Act" (Contact Me) button.<!--

-------------

General guidelines

* Only use absolute positioning when necessary. Opt for responsive and well structured layouts that use flexbox and grid by default
* Refactor code as you go to keep code clean
* Keep file sizes small and put helper functions and components in their own files.

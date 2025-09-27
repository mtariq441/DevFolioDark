# MERN Stack Developer Portfolio - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern developer portfolios like those found on GitHub, Vercel, and Linear, emphasizing clean code aesthetics with professional developer-focused design patterns.

## Core Design Elements

### Color Palette
**Dark Mode Primary**:
- Background: 220 15% 8% (deep charcoal)
- Surface: 220 12% 12% (elevated dark gray)
- Primary: 210 100% 65% (vibrant blue)
- Text Primary: 0 0% 95% (near white)
- Text Secondary: 0 0% 70% (muted gray)

**Accent Colors**:
- Success/Tech: 142 76% 36% (green for tech skills)
- Warning: 38 92% 50% (amber for highlights)

### Typography
- **Primary Font**: Inter (Google Fonts) - clean, modern, excellent readability
- **Code Font**: JetBrains Mono for any code snippets or tech elements
- **Hierarchy**: 
  - Hero: text-5xl font-bold
  - Section Headers: text-3xl font-semibold
  - Body: text-lg font-normal
  - Captions: text-sm font-medium

### Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16 for consistent rhythm
- Section padding: py-16 px-6
- Component spacing: space-y-8
- Card padding: p-6
- Button padding: px-6 py-3

### Component Library

**Navigation**:
- Sticky header with backdrop blur
- Ghost buttons with subtle hover states
- Smooth scroll behavior

**Hero Section**:
- Full viewport height with centered content
- Gradient text effect on name/title
- Two CTA buttons: primary filled, secondary outline with blurred background

**Cards** (Projects):
- Dark surface with subtle border
- Rounded corners (rounded-lg)
- Hover elevation with shadow
- Tech stack tags as small pills

**Skills Display**:
- Icon + text combination in grid layout
- Subtle glow effects on hover
- Progress indicators as simple bars

**Forms**:
- Dark input fields with focus rings
- Floating labels or placeholder styling
- Primary button for submission

### Visual Treatments

**Gradients**:
- Hero background: Subtle radial gradient from primary to background
- Button gradients: Linear blue-to-purple for primary actions
- Accent overlays: Use sparingly for skill highlights

**Interactive Elements**:
- Subtle scale transforms on hover (scale-105)
- Fade-in animations on scroll (minimal, tasteful)
- Focus rings for accessibility

## Images

**Profile Picture**: Professional headshot, circular crop, positioned in About section with subtle border glow effect

**Project Thumbnails**: Each project card should include a representative screenshot or mockup image, maintaining 16:9 aspect ratio

**Hero Background**: No large hero image - instead use a subtle geometric pattern or gradient overlay to maintain focus on typography

**Tech Icons**: Use established icon libraries (Heroicons, Simple Icons) for technology stack representations in Skills section

## Critical Constraints
- **Single Page Design**: All sections on one scrollable page, maximum 5 sections total
- **Performance First**: Prioritize fast loading with minimal animations
- **Professional Focus**: Clean, minimal aesthetic that showcases technical competency
- **Mobile Responsive**: Ensure excellent mobile experience with appropriate text sizing and touch targets

This design emphasizes professionalism and technical competency while maintaining visual appeal through strategic use of color, typography, and subtle interactive elements.
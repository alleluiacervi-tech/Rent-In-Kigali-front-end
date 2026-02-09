# 🎨 RENT IN KIGALI - Premium Design System

## 📐 Brand Identity

### Logo & Visual Identity
- **Logo**: Modern architectural icon combining house and building elements
- **Typography in Logo**: Clean sans-serif with "RENT IN KIGALI" main text + "Premium Real Estate" tagline
- **Icon Design**: Geometric house with windows and roofline, suggesting trust and stability
- **Philosophy**: Simplicity, professionalism, trust, and architectural precision

---

## 🎨 Color Palette

### Primary Colors
```css
/* Primary Blue - Trust & Professionalism */
--primary: #1e40af           /* Main brand color */
--primary-hover: #1e3a8a     /* Hover state */
--primary-foreground: #ffffff /* Text on primary */

/* Accent Green - Success & Trust */
--accent: #059669            /* Success actions, verified badges */
--accent-foreground: #ffffff
```

### Neutral Colors
```css
/* Light Mode */
--background: #ffffff
--foreground: #0f172a
--card: #ffffff
--muted: #f8fafc
--muted-foreground: #64748b
--border: #e2e8f0

/* Dark Mode */
--background: #0f172a
--foreground: #f1f5f9
--card: #1e293b
--muted: #334155
--muted-foreground: #94a3b8
--border: #334155
```

### Semantic Colors
```css
--destructive: #dc2626       /* Error states */
--secondary: #f0f9ff         /* Light blue backgrounds */
```

---

## 📝 Typography System

### Font Hierarchy
```
H1: 3.5-4.5rem (56-72px) - Hero headlines
H2: 2-2.5rem (32-40px) - Section titles
H3: 1.5rem (24px) - Component titles
H4: 1.125rem (18px) - Card titles
Body: 1rem (16px) - Base text
Small: 0.875rem (14px) - Meta information
```

### Font Weights
- Regular: 400 (body text)
- Medium: 500 (labels, buttons)
- Semibold: 600 (emphasis)
- Bold: 700 (headlines only when needed)

### Line Heights
- Headlines: 1.2-1.3 (tight)
- Body: 1.5-1.6 (comfortable reading)
- UI Elements: 1.0 (compact)

---

## 🎯 Component Design Principles

### Buttons
**Primary Button**
- Background: `--primary`
- Shadow: `shadow-lg shadow-primary/20`
- Hover: `hover:shadow-xl hover:shadow-primary/30`
- Padding: `px-6 py-3` (h-11-12)
- Border Radius: `rounded-lg` (12px)
- Animation: 150ms ease transition

**Secondary/Outline Button**
- Border: 1px solid `--border`
- Background: Transparent
- Hover: `bg-muted`
- Same padding & radius as primary

**Icon Buttons**
- Size: 40x40px (h-10 w-10)
- Rounded: `rounded-full`
- Minimal padding with centered icon

### Cards
**Property Cards**
- Border Radius: `rounded-2xl` (16px)
- Border: 1px solid `--border`
- Shadow: None (default) → `shadow-xl` (hover)
- Hover Effect: `translateY(-4px)` + shadow increase
- Transition: 300ms cubic-bezier(0.4, 0, 0.2, 1)
- Image: Zoom effect on hover (scale 1.08, 600ms)

### Forms & Inputs
**Input Fields**
- Height: 48px (h-12)
- Border Radius: `rounded-lg` (12px)
- Background: `bg-muted/50`
- Focus: `ring-2 ring-primary`
- Border: None (use background instead)
- Transition: 200ms on focus

**Select Dropdowns**
- Same styling as inputs
- Chevron icon aligned right
- Dropdown: `rounded-xl` with shadow

---

## ✨ Animations & Transitions

### Standard Transitions
```css
.transition-smooth {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.transition-bounce {
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### Keyframe Animations
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

@keyframes scaleIn {
  from { 
    opacity: 0; 
    transform: scale(0.95); 
  }
  to { 
    opacity: 1; 
    transform: scale(1); 
  }
}
```

### Hover Effects
**Lift Effect** (for cards)
```css
.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}
```

**Image Zoom** (for property images)
```css
.image-zoom img {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-zoom:hover img {
  transform: scale(1.08);
}
```

---

## 🔲 Spacing System

### Consistent Scale (Tailwind-based)
```
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
3xl: 4rem (64px)
```

### Section Spacing
- Between sections: `py-16` (64px)
- Container padding: `px-4` (16px mobile) / `px-8` (32px desktop)
- Card padding: `p-5` or `p-6`

---

## 🎭 Special Effects

### Glassmorphism (Navbar when scrolled)
```css
.glass {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.glass-dark {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Skeleton Loaders
```css
.skeleton {
  background: linear-gradient(
    90deg,
    rgba(226, 232, 240, 0.4) 0%,
    rgba(226, 232, 240, 0.8) 50%,
    rgba(226, 232, 240, 0.4) 100%
  );
  background-size: 200% 100%;
  animation: loading 1.5s ease-in-out infinite;
}
```

---

## 📱 Responsive Design

### Breakpoints
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Grid Patterns
**Property Cards**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns
- Large: 3 columns (max-width maintained)

### Hero Section
- Mobile: Full height, center-aligned
- Desktop: 90vh height, larger text

---

## 🎯 Key UX Patterns

### Micro-interactions
1. **Button Hover**: Scale 1.02 + shadow increase
2. **Card Hover**: Lift + image zoom
3. **Input Focus**: Ring animation + background change
4. **Icon Buttons**: Ripple effect / scale

### Loading States
- Skeleton screens for property cards
- Smooth fade-in when content loads
- Progress indicators for actions

### Empty States
- Icon + clear message
- Helpful CTA to resolve
- Never just "No results"

### Success States
- Toast notifications (top-right)
- Check icons for completed actions
- Subtle animations on success

---

## 🏆 Conversion Optimization

### Trust Elements
- ✓ Verified Agent badges
- ✓ "Featured" property labels
- ✓ Trust badge in hero ("Rwanda's Premier...")
- ✓ Stats display (250+ properties, etc.)
- ✓ Professional imagery

### CTAs (Call-to-Actions)
**Primary CTAs**
- "Get Started" (with Sparkles icon)
- "View Details"
- "Contact Agent"
- "Schedule Viewing"

**Secondary CTAs**
- "Browse Properties"
- "View All"
- "Learn More"

### Visual Hierarchy
1. Price (largest, primary color)
2. Property title (bold, clickable)
3. Location (icon + text)
4. Specs (beds, baths, area)
5. Features (pills/tags)
6. Agent info (bottom)

---

## 🎨 Icon System

### Icon Library: Lucide React
- Consistent stroke width: 2px
- Standard size: 16-20px (h-4 w-4 to h-5 w-5)
- Color: Inherit from parent or `text-muted-foreground`

### Icon Usage
- MapPin: Location
- Bed: Bedrooms
- Bath: Bathrooms
- Maximize: Area/Size
- Heart: Favorite
- Share2: Share
- BadgeCheck: Verified
- Sparkles: Premium/Featured
- TrendingUp: For Sale
- Home: For Rent

---

## 📐 Border Radius Scale

```
sm: 0.5rem (8px) - Small elements
md: 0.75rem (12px) - Buttons, inputs
lg: 1rem (16px) - Cards
xl: 1.5rem (24px) - Large containers
2xl: 2rem (32px) - Hero sections, modals
full: 9999px - Pills, icon buttons
```

---

## 🌗 Dark Mode

### Implementation
- Uses CSS variables that swap values
- Smooth transition between modes
- Preserved in localStorage
- Glass effects adjusted for dark mode
- Images: Slightly reduced opacity overlay in dark mode

### Dark Mode Colors
- Background: Very dark blue (#0f172a)
- Cards: Slate (#1e293b)
- Text: Off-white (#f1f5f9)
- Borders: Subtle (#334155)
- Primary: Lighter blue (#3b82f6)

---

## 📝 Copywriting Guidelines

### Headlines
- **Emotion-driven**: "Find Your Dream Home"
- **Location-specific**: "In Kigali"
- **Action-oriented**: "Discover", "Explore", "Browse"

### Subheadlines
- Benefit-focused
- 2 lines maximum
- Clear value proposition

### CTAs
- Active verbs: "Browse", "Get Started", "View", "Contact"
- Urgency when appropriate: "Available Now"
- Clarity over cleverness

### Property Descriptions
- Features first
- Benefits second
- Location context third
- Call-to-action fourth

---

## ✅ Quality Checklist

### Visual
- [ ] Consistent spacing throughout
- [ ] All images have alt text
- [ ] Icons are the same size in similar contexts
- [ ] Colors meet WCAG AA contrast requirements
- [ ] Hover states on all interactive elements

### UX
- [ ] Loading states for all async actions
- [ ] Error states with clear messaging
- [ ] Success confirmations
- [ ] Mobile-friendly touch targets (min 44x44px)
- [ ] Keyboard navigation support

### Performance
- [ ] Images optimized and lazy-loaded
- [ ] Smooth 60fps animations
- [ ] Fast page transitions
- [ ] Minimal layout shifts

---

## 🎯 Success Metrics

A world-class real estate platform should:
1. ✓ Look premium and trustworthy
2. ✓ Be faster than competitors
3. ✓ Have clear CTAs at every step
4. ✓ Build trust through design details
5. ✓ Provide delightful micro-interactions
6. ✓ Work flawlessly on mobile
7. ✓ Guide users toward conversion

---

**Design Philosophy**: Every pixel serves a purpose. Every animation builds trust. Every color choice reinforces professionalism. This is how you build a $10M product.

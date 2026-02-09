# 🚀 Quick Start Guide - Premium Components

## Welcome to Your $10M Platform!

This guide will help you understand and use the new premium components that have been integrated into your RENT IN KIGALI platform.

---

## 📦 New Components Overview

### 1. Logo Component
**File**: `/components/Logo.tsx`

**Usage**:
```tsx
import { Logo } from './components/Logo';

// Default usage
<Logo />

// With variants
<Logo variant="default" />  // Standard colors
<Logo variant="white" />    // All white (for dark backgrounds)
<Logo variant="dark" />     // All dark (for light backgrounds)

// With sizes
<Logo size="sm" />  // Small (32px)
<Logo size="md" />  // Medium (40px) - Default
<Logo size="lg" />  // Large (56px)

// Combined
<Logo variant="white" size="lg" />
```

**Props**:
- `variant?: 'default' | 'white' | 'dark'` - Color scheme
- `size?: 'sm' | 'md' | 'lg'` - Size
- `className?: string` - Additional CSS classes

---

### 2. Premium Navbar
**File**: `/components/NavbarPremium.tsx`

**Features**:
- Glassmorphism effect on scroll
- Smooth animations
- Mobile-responsive
- Theme toggle integration
- Authentication states

**Usage**:
```tsx
<NavbarPremium
  currentView={currentView}
  onNavigate={handleNavigate}
  isAuthenticated={isAuthenticated}
  userRole={currentUser?.role}
  onLogout={handleLogout}
  isDark={isDark}
  onToggleTheme={toggleTheme}
/>
```

**Scroll Behavior**:
- Top of page: Transparent background
- After 20px scroll: Glassmorphism effect activates
- Smooth 300ms transition

---

### 3. Premium Hero
**File**: `/components/HeroPremium.tsx`

**Features**:
- Emotion-driven headlines
- Advanced search bar with 4 filters
- Trust badge
- Quick stats
- Popular search links
- Background image with gradient overlays

**Usage**:
```tsx
<HeroPremium 
  onSearch={handleSearch} 
  onNavigate={handleNavigate} 
/>
```

**Search Filters**:
1. Location (text input)
2. Property Type (rent/buy)
3. Category (house/apartment/villa/studio/land)
4. Enter key supported

**Headlines** (emotion-driven):
- Main: "Find Your Dream Home In Kigali"
- Sub: "Discover premium properties..."

---

### 4. Premium Property Card
**File**: `/components/PropertyCardPremium.tsx`

**Features**:
- Hover lift effect
- Image zoom on hover
- Floating price tag
- Status badges
- Favorite button
- Share button
- Verified agent badge
- Feature pills

**Usage**:
```tsx
<PropertyCardPremium
  property={property}
  onViewDetails={handleViewProperty}
/>
```

**Interaction States**:
- **Default**: Clean card with border
- **Hover**: 
  - Card lifts (-4px)
  - Image zooms (scale 1.08)
  - Action buttons appear
  - Shadow increases

**Visual Elements**:
- Price tag: Glassmorphism, bottom-left
- Status badge: Top-left (Available/Rented/Sold)
- Featured badge: If price > 1M RWF
- Action buttons: Top-right on hover

---

### 5. Premium Footer
**File**: `/components/FooterPremium.tsx`

**Structure**:
- 5-column layout (responsive)
- Brand + contact info
- Navigation links
- Resources
- Newsletter signup
- Social media
- Legal links
- Tagline bar

**Usage**:
```tsx
<FooterPremium isDark={isDark} />
```

**Sections**:
1. Brand (logo + mission + contact)
2. Explore (navigation links)
3. Resources (guides, FAQs)
4. Newsletter (email signup)
5. Social + Legal

---

## 🎨 Design System

### Colors

**Primary Blue** (Trust):
```css
--primary: #1e40af
```
Use for: CTAs, links, brand elements

**Accent Green** (Success):
```css
--accent: #059669
```
Use for: Success states, verified badges

**Neutrals**:
```css
--background: #ffffff
--foreground: #0f172a
--muted: #f8fafc
--border: #e2e8f0
```

### Animations

**Available Classes**:
```css
.animate-fade-in      /* Fade in effect */
.animate-slide-up     /* Slide up from bottom */
.animate-scale-in     /* Scale in from 95% */
.transition-smooth    /* 300ms smooth transition */
.hover-lift           /* Lift effect on hover */
.image-zoom           /* Image zoom container */
.glass                /* Glassmorphism effect */
.skeleton             /* Loading skeleton */
```

**Usage**:
```tsx
<div className="animate-slide-up">
  Content slides up on mount
</div>

<div className="hover-lift">
  Lifts on hover
</div>

<div className="image-zoom">
  <img src="..." /> {/* Zooms on parent hover */}
</div>
```

---

## 🎯 Best Practices

### Button Hierarchy

**Primary Action**:
```tsx
<Button className="shadow-lg shadow-primary/20">
  Get Started
</Button>
```

**Secondary Action**:
```tsx
<Button variant="outline">
  Learn More
</Button>
```

**Tertiary Action**:
```tsx
<Button variant="ghost">
  Cancel
</Button>
```

### Card Design

**Property Cards**:
- Always use `PropertyCardPremium`
- Ensure images are optimized
- Include all required fields
- Add hover states

**Info Cards**:
```tsx
<Card className="hover:shadow-lg transition-shadow">
  <CardContent className="p-6">
    Content
  </CardContent>
</Card>
```

### Spacing

**Section Spacing**:
```tsx
<div className="py-16">  {/* 64px top/bottom */}
  <div className="container mx-auto px-4">
    Content
  </div>
</div>
```

**Element Spacing**:
- Small gap: `gap-2` (8px)
- Medium gap: `gap-4` (16px)
- Large gap: `gap-6` (24px)

---

## 📱 Responsive Patterns

### Grid Layouts

**Property Grid**:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {properties.map(property => (
    <PropertyCardPremium key={property.id} property={property} />
  ))}
</div>
```

**Mobile First**:
- Start with mobile (1 column)
- Tablet: `md:grid-cols-2`
- Desktop: `lg:grid-cols-3`

### Navigation

**Mobile Menu**:
- Hamburger icon < 1024px
- Slide-up animation
- Full-width links

**Desktop Menu**:
- Horizontal layout
- Center-aligned
- Inline with logo

---

## 🎬 Animations Guide

### Page Transitions

**Hero Entrance**:
```tsx
<div className="animate-slide-up">
  Hero content
</div>
```

**Card Grid**:
```tsx
<div className="animate-fade-in">
  {properties.map(property => (
    <PropertyCardPremium key={property.id} property={property} />
  ))}
</div>
```

### Hover Effects

**Lift + Shadow**:
```tsx
<div className="hover-lift">
  Content
</div>
```

**Image Zoom**:
```tsx
<div className="image-zoom">
  <img src="..." className="w-full h-full object-cover" />
</div>
```

---

## 🔧 Customization

### Changing Colors

Edit `/styles/globals.css`:
```css
:root {
  --primary: #1e40af;  /* Change to your brand color */
  --accent: #059669;   /* Change to your accent */
}
```

### Adding New Animations

In `/styles/globals.css`:
```css
@keyframes yourAnimation {
  from { /* start state */ }
  to { /* end state */ }
}

.your-animation {
  animation: yourAnimation 0.3s ease-out;
}
```

### Creating Custom Cards

Follow the pattern:
```tsx
<Card className="hover-lift">
  <CardContent className="p-6">
    <div className="image-zoom">
      <img />
    </div>
    <h3>Title</h3>
    <p>Description</p>
  </CardContent>
</Card>
```

---

## 🏆 Pro Tips

### 1. **Always Use Semantic HTML**
```tsx
<header>  // For navbar
<main>    // For page content
<section> // For sections
<footer>  // For footer
```

### 2. **Optimize Images**
```tsx
<ImageWithFallback
  src="optimized-image.jpg"
  alt="Descriptive text"
  className="w-full h-full object-cover"
/>
```

### 3. **Add Loading States**
```tsx
{isLoading ? (
  <div className="skeleton h-64 w-full rounded-lg" />
) : (
  <PropertyCardPremium property={property} />
)}
```

### 4. **Mobile-First CSS**
```tsx
<div className="text-sm md:text-base lg:text-lg">
  {/* Scales up on larger screens */}
</div>
```

### 5. **Accessibility**
```tsx
<button aria-label="Close menu">
  <X className="h-6 w-6" />
</button>
```

---

## 🎯 Common Patterns

### CTA Button with Icon
```tsx
<Button className="gap-2 shadow-lg shadow-primary/20">
  <Sparkles className="h-4 w-4" />
  Get Started
</Button>
```

### Trust Badge
```tsx
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
  <Sparkles className="h-4 w-4 text-primary" />
  <span className="text-sm font-medium text-primary">
    Verified
  </span>
</div>
```

### Stat Card
```tsx
<Card>
  <CardContent className="p-6 text-center">
    <div className="text-3xl font-bold text-primary mb-2">
      250+
    </div>
    <p className="text-muted-foreground">
      Properties
    </p>
  </CardContent>
</Card>
```

### Icon with Badge
```tsx
<div className="p-2 bg-primary/10 rounded-lg">
  <Landmark className="h-6 w-6 text-primary" />
</div>
```

---

## 🚨 Common Mistakes to Avoid

### ❌ Don't:
```tsx
// Using basic Card without hover
<Card>
  <CardContent>Static card</CardContent>
</Card>

// No alt text on images
<img src="..." />

// Mixing old and new components
<Navbar /> {/* Old */}
<NavbarPremium /> {/* New - use this */}

// Hard-coded colors
<div className="text-blue-700">
  Use CSS variables instead
</div>
```

### ✅ Do:
```tsx
// Premium card with hover
<Card className="hover-lift">
  <CardContent>Interactive card</CardContent>
</Card>

// Always include alt text
<ImageWithFallback src="..." alt="Property exterior" />

// Use premium components
<NavbarPremium {...props} />

// Use design system colors
<div className="text-primary">
  Consistent branding
</div>
```

---

## 📚 File Reference

### Components to Use:
- ✅ `NavbarPremium` (not Navbar)
- ✅ `HeroPremium` (not Hero)
- ✅ `PropertyCardPremium` (not PropertyCard)
- ✅ `FooterPremium` (not Footer)
- ✅ `Logo` (new component)

### Documentation:
- `/DESIGN_SYSTEM.md` - Complete design system
- `/REDESIGN_SUMMARY.md` - What changed and why
- `/QUICK_START_GUIDE.md` - This file

---

## 🎓 Learning Path

1. **Day 1**: Understand the design system
2. **Day 2**: Learn component APIs
3. **Day 3**: Practice with examples
4. **Day 4**: Build custom features
5. **Day 5**: Optimize and refine

---

## 💡 Need Help?

### Design Questions
Refer to `/DESIGN_SYSTEM.md`

### Component Usage
Check component prop types in files

### Best Practices
Follow patterns in existing components

### Customization
All design tokens in `/styles/globals.css`

---

## 🚀 Ready to Build

You now have everything you need to:
- ✅ Use premium components
- ✅ Follow design system
- ✅ Create consistent UX
- ✅ Build world-class features
- ✅ Maintain code quality

**Your platform is production-ready. Go build something amazing!** 🏆

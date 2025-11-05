# VeeSafe - Design Guidelines

## Design Approach

**Selected Framework:** Material Design principles with Apple HIG minimalism
**Rationale:** Health applications require trust, clarity, and functional excellence. The design prioritizes user privacy, data accessibility, and professional medical aesthetics over visual experimentation.

**Design Philosophy:**
- Privacy-first: Minimal, reassuring interface that feels secure
- Clinical clarity: Professional medical aesthetic without being cold
- Supportive tone: Warm, non-judgmental visual language
- Data-focused: Clear information hierarchy and visualization

---

## Typography System

**Font Family:** Inter (via Google Fonts CDN) - single family for consistency and readability

**Hierarchy:**
- Page Titles: text-3xl font-semibold (32px)
- Section Headers: text-2xl font-semibold (24px)
- Card Titles: text-xl font-medium (20px)
- Body Text: text-base font-normal (16px)
- Helper Text: text-sm font-normal (14px)
- Data Labels: text-sm font-medium (14px)
- Micro Copy: text-xs font-normal (12px)

**Reading Width:** max-w-prose for text-heavy content, max-w-4xl for data displays

---

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, and 8
- Micro spacing (gaps, padding): 2, 4
- Component spacing: 4, 6
- Section spacing: 6, 8
- Page margins: 8

**Grid Structure:**
- Mobile: Single column, px-4
- Tablet: max-w-3xl mx-auto, px-6
- Desktop: max-w-6xl mx-auto, px-8

**Responsive Breakpoints:**
- Mobile-first approach
- md: 768px for tablet layouts
- lg: 1024px for desktop refinements

---

## Component Library

### Navigation
**Top Navigation Bar:**
- Fixed header with subtle shadow
- Logo left, navigation items center, profile/settings right
- Height: h-16
- Padding: px-6
- Items: Dashboard, Cycle Tracker, Resources, Profile
- Mobile: Hamburger menu with slide-out drawer

### Core Dashboard Layout
**Three-Column Information Display (Desktop):**
- Left Sidebar (1/4): Quick stats, next period countdown
- Main Content (2/4): Calendar visualization, current cycle day
- Right Sidebar (1/4): Tips, symptoms, notifications
- Mobile: Stacks vertically

### Data Input Forms
**Cycle Input Card:**
- Prominent card with rounded-lg borders
- Date pickers with calendar popover
- Increment/decrement buttons for numeric inputs
- Real-time validation indicators
- Submit button: w-full, h-12, rounded-md

**Form Field Standards:**
- Labels: text-sm font-medium, mb-2
- Inputs: h-11, rounded-md, px-4, border
- Focus states with ring offset
- Error messages: text-sm below field

### Calendar Visualization
**Cycle Calendar:**
- Monthly grid view with 7-column layout
- Day cells: aspect-square, rounded-md
- Visual indicators: small dots or rings for different phases
- Current day: bold border treatment
- Legend below calendar explaining phases
- Padding: p-4 for calendar container

### Information Cards
**Status Cards:**
- Rounded-lg with subtle shadow
- Icon top-left (from Heroicons)
- Title: text-lg font-semibold
- Description: text-sm
- Padding: p-6
- Gap between elements: space-y-4

**Prediction Display:**
- Larger featured card for ovulation prediction
- Number display: text-4xl font-bold
- Context label: text-sm font-medium
- Visual progress indicator (circular or linear)

### Guidance Sections
**Post-Intercourse Guidance:**
- Expandable accordion pattern
- Question-based navigation
- Step-by-step timeline layout
- Action buttons prominent: h-11, rounded-md

**Symptom Tracker:**
- Checkbox list with icons
- Grid layout (2 columns on mobile, 3 on desktop)
- Visual grouping by symptom category
- Save button sticky at bottom

### Affiliate Product Sections
**Product Cards:**
- Image placeholder (1:1 aspect ratio)
- Product name: text-base font-medium
- Brief description: text-sm
- CTA button: "Learn More" or "View Product"
- Grid: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Gap: gap-4

### Modal/Dialog Patterns
**Information Modals:**
- Centered overlay with backdrop blur
- Max-width: max-w-lg
- Rounded: rounded-xl
- Padding: p-6
- Close button: top-right, text-xl

**Anonymous ID Display:**
- Monospace font for ID code
- Copy button beside ID
- Explanation text below

---

## Icons

**Library:** Heroicons (via CDN)
**Usage:**
- Navigation: 24px outline icons
- Cards: 20px solid icons
- Buttons: 16px inline icons
- Calendar indicators: 12px dots/circles

**Key Icons Needed:**
- Calendar, Clock, Heart, Shield, Info, Alert, Check, User, Settings

---

## Data Visualization

**Progress Indicators:**
- Circular progress for cycle day countdown
- Linear progress bars for predictions (h-2, rounded-full)
- Percentage displays with supporting text

**Charts (if needed):**
- Use Chart.js or similar library
- Line graphs for cycle tracking history
- Simple, clean axes and labels

---

## Accessibility & Trust Elements

**Privacy Indicators:**
- Lock icon with "Anonymous ID" badge
- "Your data stays private" micro-copy
- Subtle secure badges throughout

**Informational Support:**
- Info icons with tooltips (hover/click)
- Disclaimer text in smaller font
- "Learn more" links to educational content

**Medical Professionalism:**
- Clear sourcing for medical information
- Professional language in all copy
- Supportive, non-alarmist tone

---

## Special Considerations

**Sensitive Content Handling:**
- Neutral, clinical terminology
- Non-judgmental design language
- Private browsing mode reminder option
- Quick exit button consideration

**Progressive Disclosure:**
- Essential information immediately visible
- Advanced features/details behind expandables
- Onboarding flow for first-time users (3-4 steps max)

**Empty States:**
- Friendly illustrations or icons
- Clear CTAs to add first cycle data
- Encouraging copy: "Get started tracking your cycle"

---

## Images

**Hero Section:** No large hero image - this is a utility application
**Illustrations:** Use simple, abstract medical/health illustrations for empty states and educational sections
**Icons:** Heroicons library throughout
**Product Images:** Placeholder aspect-ratio-square containers with object-cover for affiliate products
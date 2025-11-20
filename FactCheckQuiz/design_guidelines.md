# Quiz Application Design Guidelines

## Design Approach: Material Design System
Utility-focused application prioritizing clear interaction feedback, readability, and straightforward navigation. Material Design principles provide excellent affordance for interactive states and immediate user feedback.

## Layout & Spacing System
**Container Structure:**
- Max-width content area: `max-w-2xl` centered on page
- Primary spacing units: `p-4`, `p-6`, `p-8`, `gap-4`, `gap-6`
- Section spacing: `space-y-6` for vertical rhythm
- Card padding: `p-6` to `p-8`

**Viewport:**
- Centered vertically and horizontally for quiz card
- Comfortable reading width (not full-screen)
- Natural height based on content (no forced 100vh)

## Typography Hierarchy
**Font Stack:** Google Fonts - Poppins (headings), Inter (body)
- Page Title: `text-3xl font-bold` 
- Question Number: `text-sm font-medium uppercase tracking-wide`
- Question Text: `text-xl font-semibold leading-relaxed`
- Score Display: `text-2xl font-bold`
- Feedback Text: `text-lg font-medium`
- Final Results: `text-4xl font-bold` (score), `text-xl` (message)

## Component Specifications

**Quiz Card Container:**
- Elevated card with shadow (`shadow-lg`)
- Rounded corners (`rounded-2xl`)
- Padding: `p-8`
- Background treatment with subtle border

**Question Display Area:**
- Question number badge at top
- Large, clear question text with generous line-height
- Minimum height to prevent layout shift between questions

**Answer Buttons:**
- Two large, equally-sized buttons side-by-side
- Grid layout: `grid-cols-2 gap-4`
- Substantial padding: `py-4 px-8`
- Rounded: `rounded-xl`
- Font: `text-lg font-semibold`
- Clear hover/active states (Material elevation)
- Disabled state after answer selection

**Feedback System:**
- Immediate visual indicator below buttons
- Icon + text combination (checkmark/X from Heroicons)
- Animated entrance (`fade-in`)
- Padding: `p-4 rounded-lg`
- Clear visual distinction for correct/incorrect

**Score Tracker:**
- Persistent header showing: "Score: X/100"
- Progress indicator: Linear progress bar showing X/10 questions completed
- Clean, minimalist design that doesn't compete with questions

**Progress Indicator:**
- Question counter: "Question 5 of 10"
- Visual progress bar (`h-2 rounded-full`)
- Animated fill based on completion percentage

**Final Results Screen:**
- Large score display with percentage
- Contextual message based on performance:
  - 90-100: "Excellent! You're a critical thinker!"
  - 70-80: "Great job! Keep questioning sources."
  - 50-60: "Good start. Stay curious!"
  - Below 50: "Keep learning about misinformation!"
- Restart button: `py-3 px-8 rounded-xl text-lg font-semibold`
- Score breakdown showing correct/incorrect count

**Navigation:**
- No "Next" button - advances automatically after feedback (1.5s delay)
- Clean transition between questions (subtle fade)

## Interaction States
- Default: Clear, inviting buttons
- Hover: Slight elevation increase
- Correct Answer: Success indicator with animation
- Incorrect Answer: Error indicator with animation
- Disabled: Reduced opacity after selection

## Animations
**Minimal & Purposeful:**
- Feedback appearance: Fade-in (200ms)
- Question transitions: Cross-fade (300ms)
- Progress bar fill: Smooth transition (400ms)
- Score update: Number count-up animation (500ms)

## Accessibility
- High contrast button states
- Clear focus indicators (keyboard navigation)
- ARIA labels for screen readers
- Semantic HTML structure
- Sufficient touch targets (min 44px height)

## Icons
Use Heroicons via CDN:
- Checkmark circle (correct feedback)
- X circle (incorrect feedback)
- Trophy (final results)

## Images
None required - this is a text-based utility application.
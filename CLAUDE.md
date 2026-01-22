# myVibeDesign - Design System Guidelines

## Overview
This document contains the design system specifications from Figma that must be followed when creating new components or modifying existing ones.

---

# 🔒 CRITICAL: Scope Control & Change Management

## Preventing Unintended Changes

**THIS IS THE MOST IMPORTANT SECTION. READ IT FIRST.**

When working with this project, you MUST follow these strict rules to prevent unintended modifications:

### ⚠️ Core Rule: Change ONLY What Is Explicitly Requested

```
✅ GOOD REQUEST HANDLING:
User: "Change the button color in Header.jsx from red to blue"
AI:
  1. Read Header.jsx
  2. Change ONLY the button color
  3. DO NOT touch imports
  4. DO NOT touch other components
  5. DO NOT add comments
  6. DO NOT reformat code
  7. DO NOT "improve" anything else

❌ BAD REQUEST HANDLING:
User: "Change the button color in Header.jsx from red to blue"
AI:
  1. Changes button color ✓
  2. Also refactors the component structure ✗
  3. Adds TypeScript types ✗
  4. Adds comments "explaining" the change ✗
  5. Reorganizes imports ✗
  6. "Improves" variable names ✗
  7. Adds prop validation ✗
```

### 🚫 Absolute Prohibitions

Unless explicitly requested, you MUST NOT:

1. **NO Refactoring**
   - Do not restructure code
   - Do not extract components
   - Do not rename variables
   - Do not change code organization

2. **NO "Improvements"**
   - Do not add error handling "for safety"
   - Do not add validation "for best practices"
   - Do not optimize performance "while we're here"
   - Do not add features "that might be useful"

3. **NO Documentation Changes**
   - Do not add comments unless requested
   - Do not add JSDoc unless requested
   - Do not add type annotations unless requested
   - Do not update README unless requested

4. **NO Style Changes**
   - Do not reformat code unless requested
   - Do not reorganize imports unless requested
   - Do not change whitespace unless requested
   - Do not "fix" code style unless requested

5. **NO Scope Creep**
   - If asked to change file A, do not touch files B, C, D
   - If asked to change component X, do not change components Y, Z
   - If asked to change one property, do not change other properties

### ✅ Required Behavior

1. **Read Before Acting**
   ```
   ALWAYS read the exact file mentioned before making changes.
   Understand the current state before modifying.
   ```

2. **Surgical Precision**
   ```
   Make the MINIMUM change necessary.
   Change only the specific lines/properties requested.
   Leave everything else untouched.
   ```

3. **Confirm Scope for Large Changes**
   ```
   If a request seems to require touching multiple files:
   - STOP
   - List all files that would be affected
   - ASK for confirmation before proceeding
   ```

4. **Report Exactly What Changed**
   ```
   After making changes, report:
   - Which file(s) were modified
   - Exactly what changed (line numbers)
   - Nothing else
   ```

### 📋 Examples of Correct Behavior

#### Example 1: Single Property Change
```jsx
// User Request: "Change the hero title from 'Welcome' to 'Hello' in HomePage.jsx"

// ✅ CORRECT:
// Read HomePage.jsx
// Find: <Text variant="hero">Welcome</Text>
// Change to: <Text variant="hero">Hello</Text>
// Done. Nothing else touched.

// ❌ INCORRECT:
// - Also change subtitle "while we're here"
// - Add comments explaining the change
// - Refactor the hero section
// - Update imports
```

#### Example 2: Styling Change
```jsx
// User Request: "Make the card background white in ProfileCard.jsx"

// ✅ CORRECT:
// Read ProfileCard.jsx
// Find: <Card className="bg-gray-100">
// Change to: <Card className="bg-white">
// Done.

// ❌ INCORRECT:
// - Also change padding "for better spacing"
// - Add shadow "for better design"
// - Refactor card structure
// - Add more Card variants
```

#### Example 3: Multiple Files (Requires Confirmation)
```jsx
// User Request: "Update all buttons to use the new variant"

// ✅ CORRECT:
AI: "This change will affect the following files:
- src/components/Header.jsx (2 buttons)
- src/components/Footer.jsx (1 button)
- src/pages/HomePage.jsx (3 buttons)
- src/pages/AboutPage.jsx (1 button)

Should I proceed with updating all 7 buttons across these 4 files?"

[Wait for user confirmation]

// ❌ INCORRECT:
// Just start changing all files without asking
```

### 🎯 Decision Matrix: Should I Make This Change?

Use this checklist for EVERY change:

| Question | Answer | Action |
|----------|--------|--------|
| Did user explicitly request this change? | YES | ✅ Proceed |
| Did user explicitly request this change? | NO | ❌ Skip it |
| Is this change in a different file? | YES | ❌ Skip it (unless explicitly requested) |
| Is this "improving" code quality? | YES | ❌ Skip it (unless explicitly requested) |
| Am I adding comments? | YES | ❌ Skip it (unless explicitly requested) |
| Am I refactoring? | YES | ❌ Skip it (unless explicitly requested) |
| Is this formatting/style? | YES | ❌ Skip it (unless explicitly requested) |

**If in doubt, DO NOT make the change. Ask first.**

### 🔍 Before Committing: Self-Check

Before creating a commit, verify:

```bash
# 1. Check what files changed
git status

# Expected: ONLY files explicitly mentioned by user
# If other files appear: ❌ STOP. Undo those changes.

# 2. Check what changed in each file
git diff

# Expected: ONLY the specific changes requested
# If you see other changes: ❌ STOP. Undo those changes.

# 3. Review line-by-line
# Ask yourself for EACH changed line:
# - Did user request this specific change?
# - If NO: ❌ Undo it
```

### 💡 When User Requests Are Unclear

If a request is vague or could affect multiple areas:

```
❌ DON'T: Assume and make broad changes

✅ DO: Ask clarifying questions

Examples:
- "Should I update this in all components or just HomePage.jsx?"
- "Do you want me to change only the header button or all buttons?"
- "This would require changes in 5 files. Should I proceed?"
```

### 🎓 Summary: The Golden Rules

1. **Read first, change second**
2. **Change ONLY what was requested**
3. **No refactoring without permission**
4. **No improvements without permission**
5. **No comments without permission**
6. **Ask when scope is unclear**
7. **Verify changes before committing**

**Remember: The best code change is the one that does exactly what was asked—nothing more, nothing less.**

---

## Color Palette

### CSS Variables
All colors are defined as CSS variables in `src/index.css` and should be used via Tailwind utility classes:

**Primary Colors:**
- `--background: #EFE7DA` - Beige default background
- `--foreground: #2D2D2D` - Dark gray text
- `--primary: #56051B` - Burgundy (main brand color)
- `--primary-foreground: #FFF` - White text on primary

**Component Colors:**
- `--card: #FFF` - White card background
- `--card-foreground: #2D2D2D` - Card text color
- `--accent: #0D0101` - Black accent color

**Extended Burgundy Palette:**
Use these via Tailwind classes (e.g., `bg-burgundy-light`):
- `#AA506A` - Burgundy Light
- `#AA3252` - Burgundy Medium
- `#40121F` - Burgundy Dark
- `#370111` - Burgundy Darker

### Usage
```jsx
// ✅ Correct
<div className="bg-background text-foreground">
<button className="bg-primary text-primary-foreground">Click</button>
<div className="bg-burgundy-light">...</div>

// ❌ Incorrect - never use hardcoded colors
<div style={{backgroundColor: '#EFE7DA'}}>
<button className="bg-[#56051B]">Click</button>
```

## Typography

### Font Families
- **Inter** - Used for headings and hero text
- **Onest** - Used for body text and captions

Fonts are imported from Google Fonts in `src/index.css`.

### Typography Utilities
Three custom text utilities are defined:

**1. `.text-hero`**
- Font: Inter
- Size: 82px
- Weight: 600 (Semi-bold)
- Line Height: 100%
- Letter Spacing: -2.46px
- Usage: Main hero headings

**2. `.text-subhero`**
- Font: Onest
- Size: 34px
- Weight: 500 (Medium)
- Line Height: 115%
- Usage: Subheadings, section titles

**3. `.text-caption-dark`**
- Font: Onest
- Size: 18px
- Weight: 500 (Medium)
- Opacity: 70%
- Usage: Captions, secondary text

### Usage Examples
```jsx
// ✅ Correct
<h1 className="text-hero text-primary">Welcome</h1>
<h2 className="text-subhero">Discover Design</h2>
<p className="text-caption-dark">Additional information</p>

// ❌ Incorrect - avoid custom font sizes
<h1 className="text-8xl font-bold">Welcome</h1>
<p style={{fontSize: '18px'}}>Text</p>
```

## Geometry & Spacing

### Border Radius
- Base radius: `--radius: 25px`
- Variants available:
  - `rounded-lg` - Uses `var(--radius)`
  - `rounded-md` - Uses `calc(var(--radius) - 2px)` = 23px
  - `rounded-sm` - Uses `calc(var(--radius) - 4px)` = 21px

### Spacing System
**ALWAYS** use Tailwind's spacing utilities for consistency:

**Gap (for Flexbox/Grid):**
```jsx
// ✅ Correct
<div className="flex gap-4">...</div>
<div className="grid grid-cols-3 gap-6">...</div>

// ❌ Incorrect
<div className="flex" style={{gap: '20px'}}>...</div>
```

**Padding:**
```jsx
// ✅ Correct
<div className="p-6">...</div>
<div className="px-4 py-8">...</div>

// ❌ Incorrect
<div style={{padding: '24px'}}>...</div>
```

**Margin:**
```jsx
// ✅ Correct
<div className="mb-8 mt-4">...</div>

// ❌ Incorrect
<div style={{marginBottom: '32px'}}>...</div>
```

### Tailwind Spacing Scale Reference
- `gap-1` / `p-1` / `m-1` = 4px
- `gap-2` / `p-2` / `m-2` = 8px
- `gap-4` / `p-4` / `m-4` = 16px
- `gap-6` / `p-6` / `m-6` = 24px
- `gap-8` / `p-8` / `m-8` = 32px
- `gap-12` / `p-12` / `m-12` = 48px
- `gap-16` / `p-16` / `m-16` = 64px

## Custom UI Components

### Card Component
The Card component has three variants defined:

**Available Variants:**
- `variant="default"` - White background (#FFF) with subtle border
- `variant="burgundy"` - Burgundy background (#56051B) with white text
- `variant="dark"` - Black background (#0D0101) with white text

**Features:**
- Border radius: 25px
- Soft shadows (no harsh shadows)
- Consistent padding: 6-8 Tailwind units (p-6, p-8)

**Usage:**
```jsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

// Default white card
<Card variant="default">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
</Card>

// Burgundy card
<Card variant="burgundy">
  <CardHeader>
    <CardTitle className="text-white">Burgundy Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-white">White text on burgundy</p>
  </CardContent>
</Card>

// Dark card
<Card variant="dark">
  <CardHeader>
    <CardTitle className="text-white">Dark Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-white">White text on dark background</p>
  </CardContent>
</Card>
```

### Text Component
Typography helper component for consistent text styling:

**Available Variants:**
- `variant="hero"` - 82px Inter, weight 600 (hero headings)
- `variant="subhero"` - 34px Onest, weight 500 (section titles)
- `variant="caption"` - 18px Onest, weight 500, 70% opacity (captions)
- `variant="body"` - Base Onest text (paragraphs)
- `variant="small"` - Small Onest text

**Color Options:**
- `color="default"` - Inherits current color
- `color="primary"` - Primary burgundy
- `color="foreground"` - Default foreground
- `color="muted"` - Muted foreground
- `color="white"` - White text

**Usage:**
```jsx
import { Text } from "@/components/ui/text"

<Text variant="hero" color="primary" as="h1">
  Hero Title
</Text>

<Text variant="subhero" as="h2">
  Section Heading
</Text>

<Text variant="caption">
  Caption text with 70% opacity
</Text>

<Text variant="body">
  Regular paragraph text
</Text>
```

### Button Component
Buttons with 25px border-radius using Onest font:

**Available Variants:**
- `variant="default"` - Primary burgundy background
- `variant="secondary"` - Burgundy light background
- `variant="dark"` - Black accent background
- `variant="outline"` - Transparent with burgundy border
- `variant="ghost"` - Transparent with hover effect
- `variant="link"` - Link style with underline

**Size Options:**
- `size="sm"` - Small button (h-10, px-4, py-2)
- `size="default"` - Default button (h-12, px-6, py-3)
- `size="lg"` - Large button (h-14, px-8, py-4)
- `size="icon"` - Icon-only button (h-12, w-12)

**Usage:**
```jsx
import { Button } from "@/components/ui/button"

<Button variant="default">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="dark">Dark Button</Button>
<Button variant="outline">Outlined</Button>

<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

## Component Development Rules

### 1. Always Use Design Tokens
- Never hardcode colors - use CSS variables via Tailwind classes
- Never use arbitrary values like `bg-[#56051B]` when a token exists
- Use semantic color names: `bg-primary`, `text-foreground`, etc.

### 2. Typography Hierarchy
- Use predefined typography utilities: `.text-hero`, `.text-subhero`, `.text-caption-dark`
- For other text sizes, use Tailwind's type scale consistently
- Maintain the font family distinction: Inter for headings, Onest for body

### 3. Spacing Consistency
- Use Tailwind spacing utilities exclusively
- Prefer `gap` for flex/grid layouts over margins
- Use padding for internal component spacing
- Keep spacing proportional using the 4px/8px base scale

### 4. Border Radius
- Use `rounded-lg` for cards and major containers
- Use `rounded-md` for buttons and inputs
- Use `rounded-sm` for smaller elements

### 5. Component Structure Example
```jsx
import { cn } from "@/lib/utils"

function Card({ children, className }) {
  return (
    <div className={cn(
      "bg-card text-card-foreground",
      "rounded-lg",
      "p-6",
      className
    )}>
      {children}
    </div>
  )
}

function Hero({ title, subtitle }) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-hero text-primary">{title}</h1>
      <p className="text-subhero">{subtitle}</p>
    </div>
  )
}
```

### 6. Utility Helper
Always use the `cn()` utility from `@/lib/utils` when combining class names:
```jsx
import { cn } from "@/lib/utils"

// ✅ Correct
<div className={cn("bg-primary", isActive && "opacity-100")} />

// ❌ Incorrect
<div className={`bg-primary ${isActive ? 'opacity-100' : ''}`} />
```

## File Structure
```
src/
├── components/
│   └── ui/           # shadcn/ui components
├── lib/
│   └── utils.js      # Utility functions (cn helper)
├── App.jsx
├── main.jsx
└── index.css         # Global styles, CSS variables, custom utilities
```

## Component Categories

### Forms & Inputs
- **Basic**: Input, Textarea, Label, Checkbox, Radio, Switch, Select
- **Advanced**: DatePicker, DateRangePicker, TimePicker, Combobox, MultiSelect, NumberInput
- **Form System**: Form (React Hook Form integration), FormField, FormItem, FormLabel, FormControl, FormMessage

### Data Display
- **Tables**: Table (basic), DataTable (advanced with sorting/filtering/pagination)
- **Cards**: Card, CourseCard, LessonCard, StudentProfileCard, TeacherProfileCard, QuizCard, PricingCard, StatsCard, TestimonialCard
- **Lists**: List, Accordion, Avatar

### Charts & Analytics
- **Charts**: LineChart, BarChart, PieChart, AreaChart
- **Widgets**: MetricWidget (with sparklines), StatsCard
- **Filters**: FilterPanel, FilterGroup, FilterCheckbox, FilterSelect, SearchBar

### Navigation
- **Main**: Navbar, Sidebar, Breadcrumb, Pagination, Tabs
- **Advanced**: Command (palette), ContextMenu, TreeView

### Overlays & Dialogs
- **Basic**: Dialog, Popover, Tooltip, DropdownMenu
- **Advanced**: Drawer, Sheet, ConfirmDialog (with useConfirm hook)
- **Feedback**: Toast, Alert, LoadingOverlay, NotificationCenter

### Educational Components
- **Students**: StudentProfileCard, AttendanceTracker, AchievementBadge, AchievementGrid
- **Teachers**: TeacherProfileCard
- **Content**: CourseCard, LessonCard, QuizCard
- **Schedule**: Timetable, TimetableSlot

### Layout
- **Containers**: Container, Grid, GridItem, AspectRatio, ScrollArea
- **Structure**: DashboardLayout, Sidebar, Footer
- **Utility**: Divider, Separator, BackToTop, EmptyState

### Utility Components
- Button, Badge, Progress, Spinner, Skeleton, ErrorBoundary, Kbd, CopyButton

## Quick Reference

| Element | Class | Notes |
|---------|-------|-------|
| Background | `bg-background` | Beige #EFE7DA |
| Primary Button | `bg-primary text-primary-foreground rounded-lg` | Burgundy button |
| Card | `bg-card text-card-foreground rounded-lg p-6` | White card |
| Hero Title | `text-hero text-primary` | 82px Inter |
| Section Title | `text-subhero` | 34px Onest |
| Caption | `text-caption-dark` | 18px Onest, 70% opacity |
| Standard Gap | `gap-4` or `gap-6` | 16px or 24px |
| Card Padding | `p-6` or `p-8` | 24px or 32px |
| Status Colors | `bg-status-pending`, `bg-status-in-progress`, `bg-status-completed` | For lesson/course statuses |
| Level Colors | `bg-level-a1`, `bg-level-b1`, `bg-level-c1` | For language proficiency (A1-C2) |
| Chart Colors | `bg-chart-1` through `bg-chart-10` | 10 colors for data visualization |

## Notes
- This design system is based on the Figma specification provided
- All new components must strictly follow these guidelines
- When in doubt, use Tailwind utilities over custom CSS
- Maintain consistency with existing components

---

# 🎯 Practical Guide: Component Selection & Composition

## Component Selection Rules

### When to use which component for common scenarios:

### Page Structure Components

| Scenario | Component | Example |
|----------|-----------|---------|
| Wrapping page content | `Container` | All pages should use `<Container>` for max-width and padding |
| Grid layout (features, cards) | `Grid` + `GridItem` | `<Grid cols={3} gap={6}>` for 3-column layouts |
| Two-column layout | `Grid cols={2}` | Hero with image, content with sidebar |
| Stack items vertically | Native `div` with `className="space-y-4"` | Spacing between stacked elements |

### Content Components

| Scenario | Component | Variant/Props |
|----------|-----------|---------------|
| Main page heading | `Text` | `variant="hero" as="h1" color="primary"` |
| Section heading | `Text` | `variant="subhero" as="h2"` or `variant="h2" as="h2"` |
| Subheading | `Text` | `variant="h3" as="h3"` |
| Body paragraph | `Text` | `variant="body"` or just `<p>` |
| Caption/small text | `Text` | `variant="caption"` |
| Muted text | `Text` | `color="muted"` |

### Call-to-Action Components

| Scenario | Component | Variant/Props |
|----------|-----------|---------------|
| Primary action | `Button` | `variant="default" size="lg"` - Burgundy button |
| Secondary action | `Button` | `variant="secondary"` - Light burgundy |
| Tertiary action | `Button` | `variant="outline"` - Transparent with border |
| Subtle action | `Button` | `variant="ghost"` - No background |
| Dark theme button | `Button` | `variant="dark"` - Black background |
| Text link styled as button | `Button` | `variant="link"` - Underlined link |
| Icon-only button | `Button` | `size="icon"` - Square shape |

### Card Components

| Scenario | Component | Variant |
|----------|-----------|---------|
| Regular content card | `Card` | `variant="default"` - White with subtle shadow |
| Highlighted/featured card | `Card` | `variant="burgundy"` - Burgundy background, white text |
| Dark accent card | `Card` | `variant="dark"` - Black background |
| Pricing tier | `PricingCard` | Props: `title`, `price`, `features`, `highlighted` |
| Statistics | `StatsCard` | Props: `title`, `value`, `trend`, `change` |
| Testimonial | `TestimonialCard` | Props: `quote`, `author`, `role`, `avatar` |
| Educational course | `CourseCard` | Props: `title`, `level`, `duration`, `students` |
| Lesson | `LessonCard` | Props: `title`, `type`, `duration`, `completed` |

### Form Components

| Scenario | Component | Notes |
|----------|-----------|-------|
| Text input | `Input` | Default h-12, use `inputSize="sm"` or `"lg"` |
| Email/password field | `Input` | Use `type="email"` or `type="password"` |
| Multi-line text | `Textarea` | Specify `rows` prop |
| Dropdown selection | `Select` + `SelectItem` | Use `SelectGroup` for grouped options |
| Multiple selection | `MultiSelect` | Allows selecting multiple items |
| Searchable dropdown | `Combobox` | Filterable select |
| Number input | `NumberInput` | With increment/decrement buttons |
| Date picker | `DatePicker` | Calendar popup |
| Date range | `DateRangePicker` | Start and end dates |
| Time selection | `TimePicker` | Hour:minute picker |
| Checkbox | `Checkbox` + `Label` | For boolean options |
| Radio buttons | `RadioGroup` + `RadioGroupItem` | For single selection from options |
| Toggle switch | `Switch` + `Label` | For on/off states |
| File upload | `FileUpload` | Drag & drop or click to upload |
| Form with validation | `Form` + `FormField` | Use with React Hook Form + Zod |

### Data Display Components

| Scenario | Component | Notes |
|----------|-----------|-------|
| Simple table | `Table` | Use `TableHeader`, `TableBody`, `TableRow`, `TableCell` |
| Advanced table with sorting/filtering | `DataTable` | Built on TanStack Table |
| User avatar | `Avatar` | Use `AvatarImage` + `AvatarFallback` |
| Status badge | `Badge` | Variants: `default`, `secondary`, `success`, `warning`, `destructive` |
| Progress bar | `Progress` | Props: `value` (0-100) |
| Loading skeleton | `Skeleton` | Use during data loading |
| Spinner | `Spinner` | Inline loading indicator |
| Empty state | `EmptyState` | When no data to display |

### Chart Components

| Scenario | Component | Best For |
|----------|-----------|----------|
| Trends over time | `LineChart` | Stock prices, user growth |
| Comparisons | `BarChart` | Sales by category, performance metrics |
| Parts of whole | `PieChart` | Market share, budget breakdown |
| Area under curve | `AreaChart` | Cumulative data, stacked metrics |
| KPI widget | `MetricWidget` | Dashboard metrics with sparkline |

### Navigation Components

| Scenario | Component | Notes |
|----------|-----------|-------|
| Tab navigation | `Tabs` + `TabsList` + `TabsTrigger` + `TabsContent` | Variants: `default`, `underline`, `pills` |
| Breadcrumbs | `Breadcrumb` + `BreadcrumbList` + `BreadcrumbItem` | Page hierarchy |
| Pagination | `Pagination` | Table/list navigation |
| Command palette | `Command` | Keyboard-driven search (Cmd+K) |
| Context menu | `ContextMenu` | Right-click menu |
| Tree structure | `TreeView` + `TreeItem` | Hierarchical navigation |

### Overlay Components

| Scenario | Component | When to Use |
|----------|-----------|-------------|
| Modal dialog | `Dialog` | Blocking user interaction, confirmations |
| Non-modal overlay | `Popover` | Additional info, don't block interaction |
| Slide-in panel | `Sheet` | Filters, settings, detailed view |
| Slide-from-side | `Drawer` | Similar to Sheet |
| Confirmation dialog | `ConfirmDialog` with `useConfirm` | Yes/No confirmations |
| Tooltip | `Tooltip` | Hover hints |
| Dropdown menu | `DropdownMenu` | Action menus |
| Toast notification | `Toast` via `useToast()` | Success/error messages |
| Alert message | `Alert` | Inline notifications |

---

## 🏗️ Composition Patterns

Pre-built patterns for common page sections.

### Pattern 1: Hero Section with CTA

**Use case:** Landing page main section, product introduction

```jsx
<section className="bg-background py-16 md:py-24">
  <Container>
    <Grid cols={1} md:cols={2} gap={12} className="items-center">
      {/* Left: Content */}
      <GridItem>
        <Text variant="hero" color="primary" as="h1">
          Создавайте продукты в едином стиле
        </Text>
        <Text variant="subhero" className="mt-6 text-muted-foreground">
          Полная дизайн-система с 50+ компонентами для быстрой разработки
        </Text>
        <div className="mt-8 flex gap-4">
          <Button variant="default" size="lg">
            Начать бесплатно
          </Button>
          <Button variant="outline" size="lg">
            Посмотреть демо
          </Button>
        </div>
      </GridItem>

      {/* Right: Image or Form */}
      <GridItem>
        <Card className="p-8">
          {/* Form or image here */}
        </Card>
      </GridItem>
    </Grid>
  </Container>
</section>
```

**Key elements:**
- `Grid cols={2}` for two-column layout
- `py-16 md:py-24` for responsive vertical spacing
- Primary CTA with `variant="default"`, secondary with `variant="outline"`
- Use `items-center` to vertically center content

---

### Pattern 2: Features Grid (3 columns)

**Use case:** Product features, service benefits, team members

```jsx
<section className="py-16 bg-card">
  <Container>
    <div className="text-center mb-12">
      <Text variant="h2" as="h2">
        Почему выбирают нас
      </Text>
      <Text variant="body" className="mt-4 text-muted-foreground max-w-2xl mx-auto">
        Три главных преимущества нашего решения
      </Text>
    </div>

    <Grid cols={1} md:cols={2} lg:cols={3} gap={6}>
      {features.map((feature) => (
        <GridItem key={feature.id}>
          <Card className="h-full">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Text variant="body" color="muted">
                {feature.description}
              </Text>
            </CardContent>
          </Card>
        </GridItem>
      ))}
    </Grid>
  </Container>
</section>
```

**Key elements:**
- Centered heading with description
- `Grid cols={3}` with responsive breakpoints
- Icon in colored circle background
- `h-full` on cards for equal height
- Icons from `lucide-react`

---

### Pattern 3: Problem/Solution (Highlighted Card)

**Use case:** Pain point highlight, value proposition

```jsx
<section className="py-16">
  <Container>
    <Grid cols={1} lg:cols={2} gap={12}>
      {/* Problem */}
      <GridItem>
        <Card variant="dark" className="h-full">
          <CardHeader>
            <CardTitle className="text-white">Проблема</CardTitle>
          </CardHeader>
          <CardContent>
            <Text variant="body" className="text-white/90">
              Разработка интерфейсов занимает слишком много времени.
              Каждый раз приходится создавать компоненты с нуля.
            </Text>
          </CardContent>
        </Card>
      </GridItem>

      {/* Solution */}
      <GridItem>
        <Card variant="burgundy" className="h-full">
          <CardHeader>
            <CardTitle className="text-white">Решение</CardTitle>
          </CardHeader>
          <CardContent>
            <Text variant="body" className="text-white/90">
              Готовая дизайн-система с 50+ компонентами.
              Просто используйте и кастомизируйте под свои нужды.
            </Text>
          </CardContent>
        </Card>
      </GridItem>
    </Grid>
  </Container>
</section>
```

**Key elements:**
- Two-column layout with equal height cards
- `variant="dark"` for problem (creates contrast)
- `variant="burgundy"` for solution (brand color, positive)
- White text on dark backgrounds

---

### Pattern 4: Pricing Section

**Use case:** Subscription tiers, service packages

```jsx
<section className="py-16 bg-background">
  <Container>
    <div className="text-center mb-12">
      <Text variant="h2" as="h2">
        Выберите свой тариф
      </Text>
      <Text variant="body" className="mt-4 text-muted-foreground">
        Гибкие цены для команд любого размера
      </Text>
    </div>

    <Grid cols={1} md:cols={3} gap={6}>
      {pricingPlans.map((plan) => (
        <GridItem key={plan.id}>
          <PricingCard
            title={plan.title}
            price={plan.price}
            period={plan.period}
            features={plan.features}
            highlighted={plan.popular}
            ctaText={plan.popular ? "Начать сейчас" : "Попробовать"}
            onCTAClick={() => console.log("Selected:", plan.title)}
          />
        </GridItem>
      ))}
    </Grid>
  </Container>
</section>
```

**Key elements:**
- Use `PricingCard` component
- `highlighted={true}` for popular plan
- Three-column layout (common pattern)
- Centered heading

---

### Pattern 5: Testimonials / Social Proof

**Use case:** Customer reviews, success stories

```jsx
<section className="py-16">
  <Container>
    <div className="text-center mb-12">
      <Text variant="h2" as="h2">
        Что говорят наши клиенты
      </Text>
    </div>

    <Grid cols={1} md:cols={2} lg:cols={3} gap={6}>
      {testimonials.map((testimonial) => (
        <GridItem key={testimonial.id}>
          <TestimonialCard
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
            company={testimonial.company}
            avatar={testimonial.avatar}
          />
        </GridItem>
      ))}
    </Grid>
  </Container>
</section>
```

**Key elements:**
- Use `TestimonialCard` component
- 3-column grid for desktop
- Include author details and avatar

---

### Pattern 6: CTA Section with Form

**Use case:** Lead capture, newsletter signup, contact form

```jsx
<section className="py-16 bg-primary">
  <Container>
    <Grid cols={1} lg:cols={2} gap={12} className="items-center">
      {/* Left: Call to Action */}
      <GridItem>
        <Text variant="h2" as="h2" className="text-white">
          Готовы начать?
        </Text>
        <Text variant="body" className="mt-4 text-white/90">
          Зарегистрируйтесь бесплатно и получите доступ ко всем компонентам
        </Text>
        <ul className="mt-6 space-y-3">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-center text-white/90">
              <Check className="w-5 h-5 mr-2 text-white" />
              {benefit}
            </li>
          ))}
        </ul>
      </GridItem>

      {/* Right: Form */}
      <GridItem>
        <Card className="p-8">
          <Form form={form} onSubmit={onSubmit}>
            <FormField name="name" label="Имя" />
            <FormField name="email" label="Email" />
            <Button type="submit" variant="default" size="lg" className="w-full mt-4">
              Зарегистрироваться
            </Button>
          </Form>
        </Card>
      </GridItem>
    </Grid>
  </Container>
</section>
```

**Key elements:**
- Burgundy background (`bg-primary`)
- White text for high contrast
- Benefit list with checkmarks
- Form in white card (stands out)
- Full-width submit button

---

### Pattern 7: Stats / Metrics Row

**Use case:** Dashboard overview, company metrics

```jsx
<section className="py-16">
  <Container>
    <Grid cols={2} md:cols={4} gap={6}>
      <GridItem>
        <StatsCard
          title="Активные пользователи"
          value="2,543"
          trend="up"
          change={12.5}
          changeLabel="vs прошлый месяц"
        />
      </GridItem>
      <GridItem>
        <StatsCard
          title="Завершенные проекты"
          value="148"
          trend="up"
          change={8.2}
        />
      </GridItem>
      <GridItem>
        <StatsCard
          title="Конверсия"
          value="3.2%"
          trend="down"
          change={-1.4}
        />
      </GridItem>
      <GridItem>
        <StatsCard
          title="Средний чек"
          value="₽24,500"
        />
      </GridItem>
    </Grid>
  </Container>
</section>
```

**Key elements:**
- 4-column grid for metrics
- `StatsCard` component
- Show trend (up/down arrows)
- Include change percentage

---

### Pattern 8: Process / Steps

**Use case:** How it works, onboarding flow

```jsx
<section className="py-16 bg-card">
  <Container>
    <div className="text-center mb-12">
      <Text variant="h2" as="h2">
        Как это работает
      </Text>
    </div>

    <Steps currentStep={0} className="max-w-3xl mx-auto">
      <Step
        title="Выберите компоненты"
        description="Просмотрите нашу библиотеку и выберите нужные элементы"
      />
      <Step
        title="Кастомизируйте"
        description="Настройте цвета, размеры и варианты под ваш бренд"
      />
      <Step
        title="Интегрируйте"
        description="Добавьте в проект и начните разработку"
      />
    </Steps>
  </Container>
</section>
```

**Key elements:**
- Use `Steps` component
- Center content with `max-w-3xl mx-auto`
- Number or icon for each step
- Clear title and description

---

### Pattern 9: FAQ / Accordion

**Use case:** Frequently asked questions, documentation sections

```jsx
<section className="py-16">
  <Container className="max-w-3xl">
    <div className="text-center mb-12">
      <Text variant="h2" as="h2">
        Частые вопросы
      </Text>
    </div>

    <Accordion type="single" collapsible>
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>
            <Text variant="body" color="muted">
              {faq.answer}
            </Text>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </Container>
</section>
```

**Key elements:**
- Narrow container (`max-w-3xl`) for readability
- `Accordion` component
- `type="single"` - only one open at a time
- `collapsible` - can close all items

---

### Pattern 10: Dashboard Layout

**Use case:** Admin panel, analytics page

```jsx
<div className="min-h-screen bg-background">
  <Container className="py-8">
    {/* Metrics Row */}
    <Grid cols={4} gap={6} className="mb-8">
      {metrics.map(metric => (
        <GridItem key={metric.id}>
          <MetricWidget {...metric} />
        </GridItem>
      ))}
    </Grid>

    {/* Charts Row */}
    <Grid cols={2} gap={6} className="mb-8">
      <GridItem>
        <Card>
          <CardHeader>
            <CardTitle>Рост пользователей</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart data={chartData} />
          </CardContent>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardHeader>
            <CardTitle>Продажи по категориям</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart data={salesData} />
          </CardContent>
        </Card>
      </GridItem>
    </Grid>

    {/* Data Table */}
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Последние заказы</CardTitle>
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={orders} />
      </CardContent>
    </Card>
  </Container>
</div>
```

**Key elements:**
- Metrics at top (4 columns)
- Charts in middle (2 columns)
- Table at bottom (full width)
- Search bar in table header
- Consistent spacing with `gap-6` and `mb-8`

---

## ⚡ Decision Tree: Which Component To Use?

### Need to display text?
- **Main heading?** → `<Text variant="hero" as="h1">`
- **Section heading?** → `<Text variant="h2" as="h2">`
- **Paragraph?** → `<Text variant="body">` or `<p>`
- **Small/muted text?** → `<Text variant="caption" color="muted">`

### Need a button?
- **Primary action?** → `<Button variant="default">`
- **Secondary action?** → `<Button variant="secondary">` or `variant="outline"`
- **Destructive action?** → `<Button variant="destructive">`
- **Just a link?** → `<Button variant="link">`

### Need a container?
- **Card with content?** → `<Card><CardHeader><CardTitle>...</CardTitle></CardHeader><CardContent>...</CardContent></Card>`
- **Highlighted card?** → `<Card variant="burgundy">`
- **Page section?** → `<section className="py-16"><Container>...</Container></section>`

### Need form input?
- **Short text?** → `<Input>`
- **Long text?** → `<Textarea>`
- **Choose from list?** → `<Select>`
- **Date?** → `<DatePicker>`
- **Yes/No?** → `<Checkbox>` or `<Switch>`
- **One from many?** → `<RadioGroup>`

### Need to show data?
- **Simple list?** → `<Table>`
- **With sorting/filtering?** → `<DataTable>`
- **Over time?** → `<LineChart>` or `<AreaChart>`
- **Comparison?** → `<BarChart>`
- **Parts of whole?** → `<PieChart>`

---

## 🎨 Quality Checklist

Before considering a page/component complete, verify:

### ✅ Design System Compliance
- [ ] No hardcoded colors (only CSS variables via Tailwind classes)
- [ ] Correct font families: Inter for headings, Onest for body
- [ ] Border radius from design system: `rounded-lg`, `rounded-md`, `rounded-sm`
- [ ] Spacing using Tailwind scale: `gap-4`, `gap-6`, `p-6`, `p-8`
- [ ] Colors use semantic tokens: `bg-primary`, `text-foreground`, etc.

### ✅ Typography
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Only ONE h1 per page
- [ ] Hero text uses `text-hero` or `variant="hero"`
- [ ] Section headings use `variant="h2"` or `text-h2`
- [ ] Body text has sufficient line-height (default 160%)

### ✅ Responsiveness
- [ ] Layout works on mobile (< 768px)
- [ ] Layout works on tablet (768px - 1024px)
- [ ] Layout works on desktop (> 1024px)
- [ ] Grid uses responsive columns: `cols={1} md:cols={2} lg:cols={3}`
- [ ] Text sizes adapt: `text-4xl md:text-6xl lg:text-8xl` (if needed)
- [ ] Padding adapts: `py-12 md:py-16 lg:py-24`
- [ ] Hidden elements on mobile use: `hidden md:block`

### ✅ Accessibility
- [ ] All images have `alt` attributes
- [ ] Interactive elements are keyboard accessible (Tab works)
- [ ] Color contrast meets WCAG AA (especially on burgundy backgrounds)
- [ ] Form inputs have associated labels
- [ ] Buttons have descriptive text (not just icons)
- [ ] Links are distinguishable from regular text

### ✅ Code Quality
- [ ] Components imported from `@/components/ui`
- [ ] No unused imports
- [ ] Consistent naming (PascalCase for components, camelCase for functions)
- [ ] Props destructured with defaults
- [ ] Key props on mapped items
- [ ] Data separated from presentation (constants at top or separate file)

### ✅ Performance
- [ ] Images optimized (< 200KB per image)
- [ ] Images use `loading="lazy"` for below-the-fold content
- [ ] No inline styles (use Tailwind classes)
- [ ] Heavy components lazy loaded if possible
- [ ] Proper import structure (tree-shaking friendly)

### ✅ User Experience
- [ ] Loading states for async operations (`<Spinner>` or `<Skeleton>`)
- [ ] Error states handled gracefully (`<Alert variant="destructive">`)
- [ ] Empty states for no data (`<EmptyState>`)
- [ ] Success feedback for actions (Toast notifications)
- [ ] Smooth transitions (`transition-all`, `hover:` states)
- [ ] Disabled states clearly visible
- [ ] Forms show validation errors

### ✅ Content
- [ ] No Lorem Ipsum in production
- [ ] No placeholder images in production
- [ ] All CTAs have clear action verbs
- [ ] Links work (no `href="#"` without onClick)
- [ ] No broken image sources
- [ ] Grammar and spelling checked

### ✅ Dark Mode (if applicable)
- [ ] All text readable in dark mode
- [ ] Background colors adapt (using CSS variables)
- [ ] Border colors visible in dark mode
- [ ] Cards have proper contrast
- [ ] ThemeToggle component available

---

## 🚨 Common Mistakes to Avoid

### ❌ Mistake 1: Ignoring the Container
```jsx
// ❌ Bad - content stretches full width
<section>
  <div>Content</div>
</section>

// ✅ Good - content constrained with proper padding
<section>
  <Container>
    <div>Content</div>
  </Container>
</section>
```

### ❌ Mistake 2: Inconsistent spacing
```jsx
// ❌ Bad - random spacing values
<div className="gap-5 mb-7 pt-9">

// ✅ Good - consistent scale
<div className="gap-6 mb-8 pt-12">
```

### ❌ Mistake 3: Not using Grid for layouts
```jsx
// ❌ Bad - manual flex layout
<div className="flex flex-wrap">
  <div className="w-1/3">...</div>
  <div className="w-1/3">...</div>
  <div className="w-1/3">...</div>
</div>

// ✅ Good - Grid component
<Grid cols={3} gap={6}>
  <GridItem>...</GridItem>
  <GridItem>...</GridItem>
  <GridItem>...</GridItem>
</Grid>
```

### ❌ Mistake 4: Wrong text component usage
```jsx
// ❌ Bad - div for heading
<div className="text-4xl font-bold">Heading</div>

// ✅ Good - semantic heading
<Text variant="h2" as="h2">Heading</Text>
```

### ❌ Mistake 5: Forgetting responsive design
```jsx
// ❌ Bad - fixed 3 columns on all screens
<Grid cols={3}>

// ✅ Good - responsive columns
<Grid cols={1} md:cols={2} lg:cols={3}>
```

---

## 📚 Additional Resources

- **Workflows:** See `.claude/workflows.md` for detailed processes
- **Component Library:** Browse `src/components/ui/` for all components
- **Examples:** Check `src/pages/NewComponentsPage.jsx` for live examples
- **Figma:** Design system source (if available)

**Need help?** Follow the workflows in `.claude/workflows.md` for step-by-step guidance on common tasks.

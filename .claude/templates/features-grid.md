# Features Grid Template

## Purpose
Display 3-6 key features, benefits, or services in a structured grid layout.

## When to Use
- Product features
- Service benefits
- Team member profiles
- Process steps
- Value propositions

## Structure (3 Columns)

```jsx
<section className="py-16 bg-card">
  <Container>
    {/* Section Header */}
    <div className="text-center mb-12">
      <Text variant="h2" as="h2">
        [SECTION TITLE]
      </Text>
      <Text variant="body" className="mt-4 text-muted-foreground max-w-2xl mx-auto">
        [SECTION DESCRIPTION]
      </Text>
    </div>

    {/* Features Grid */}
    <Grid cols={1} md:cols={2} lg:cols={3} gap={6}>
      {features.map((feature) => (
        <GridItem key={feature.id}>
          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardHeader>
              {/* Icon */}
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

## Data Structure

```jsx
// Define features array at the top of the file
const features = [
  {
    id: 1,
    icon: Zap,  // from lucide-react
    title: "[FEATURE TITLE]",
    description: "[FEATURE DESCRIPTION]"
  },
  {
    id: 2,
    icon: Shield,
    title: "[FEATURE TITLE]",
    description: "[FEATURE DESCRIPTION]"
  },
  {
    id: 3,
    icon: Users,
    title: "[FEATURE TITLE]",
    description: "[FEATURE DESCRIPTION]"
  },
  // Add 3-6 features total
]
```

## Content Placeholders

### [SECTION TITLE]
- Short, descriptive heading
- Examples:
  - "Почему выбирают нас"
  - "Наши преимущества"
  - "Как мы работаем"
  - "Что мы предлагаем"

### [SECTION DESCRIPTION]
- Optional 1-2 sentence explanation
- Max 120 characters
- Examples:
  - "Три ключевых преимущества нашего подхода к обучению"
  - "Всё, что нужно для успешного запуска вашего проекта"

### [FEATURE TITLE]
- 2-5 words
- Benefit or feature name
- Examples:
  - "Быстрый старт"
  - "Индивидуальный подход"
  - "Круглосуточная поддержка"

### [FEATURE DESCRIPTION]
- 2-3 sentences
- Explain the benefit
- Examples:
  - "Готовая библиотека компонентов позволяет начать разработку за 5 минут. Просто установите пакет и используйте."

## Variants

### Variant 1: With Colored Backgrounds

```jsx
<Card
  className={cn(
    "h-full",
    feature.highlighted && "bg-primary text-primary-foreground"
  )}
>
  <CardHeader>
    <div className={cn(
      "w-12 h-12 rounded-full flex items-center justify-center mb-4",
      feature.highlighted ? "bg-white/20" : "bg-primary/10"
    )}>
      <feature.icon className={cn(
        "w-6 h-6",
        feature.highlighted ? "text-white" : "text-primary"
      )} />
    </div>
    <CardTitle className={feature.highlighted && "text-white"}>
      {feature.title}
    </CardTitle>
  </CardHeader>
  <CardContent>
    <Text
      variant="body"
      className={feature.highlighted ? "text-white/90" : "text-muted-foreground"}
    >
      {feature.description}
    </Text>
  </CardContent>
</Card>
```

### Variant 2: Simple Icons (No Cards)

```jsx
<Grid cols={1} md:cols={2} lg:cols={3} gap={8}>
  {features.map((feature) => (
    <GridItem key={feature.id} className="text-center">
      {/* Large Icon */}
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
        <feature.icon className="w-8 h-8 text-primary" />
      </div>

      <Text variant="h4" as="h3" className="mb-2">
        {feature.title}
      </Text>

      <Text variant="body" color="muted">
        {feature.description}
      </Text>
    </GridItem>
  ))}
</Grid>
```

### Variant 3: Numbered List (Process Steps)

```jsx
<Grid cols={1} md:cols={2} lg:cols={3} gap={6}>
  {steps.map((step, index) => (
    <GridItem key={step.id}>
      <Card className="h-full">
        <CardHeader>
          {/* Step Number */}
          <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 font-bold text-xl">
            {index + 1}
          </div>
          <CardTitle>{step.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Text variant="body" color="muted">
            {step.description}
          </Text>
        </CardContent>
      </Card>
    </GridItem>
  ))}
</Grid>
```

### Variant 4: Two Columns (Detailed Features)

For longer descriptions or fewer features:

```jsx
<Grid cols={1} md:cols={2} gap={8}>
  {features.map((feature) => (
    <GridItem key={feature.id}>
      <div className="flex gap-4">
        {/* Icon on the left */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <feature.icon className="w-6 h-6 text-primary" />
          </div>
        </div>

        {/* Content */}
        <div>
          <Text variant="h4" as="h3" className="mb-2">
            {feature.title}
          </Text>
          <Text variant="body" color="muted">
            {feature.description}
          </Text>
        </div>
      </div>
    </GridItem>
  ))}
</Grid>
```

## Icon Selection

Common Lucide icons for features:

```jsx
import {
  Zap,          // Speed, performance
  Shield,       // Security, protection
  Users,        // Team, community
  Target,       // Goals, precision
  Heart,        // Care, passion
  Star,         // Quality, premium
  Clock,        // Time-saving
  Lock,         // Privacy, secure
  Smartphone,   // Mobile, accessibility
  Globe,        // Global, worldwide
  TrendingUp,   // Growth, improvement
  CheckCircle,  // Verified, success
} from "lucide-react"
```

## Responsive Behavior
- Mobile (< 768px): 1 column, stack vertically
- Tablet (768px - 1024px): 2 columns
- Desktop (> 1024px): 3 columns

Use 2 columns on desktop if you have 4 or 6 items and need more space.

## Best Practices

### Number of Features
- **3 features**: Perfect for key benefits
- **4 features**: Use 2x2 grid or 4 columns
- **6 features**: 3x2 grid or 2x3 grid
- **9+ features**: Consider breaking into categories

### Writing Tips
- **Title**: Use active verbs or nouns (not "We offer X")
- **Description**: Focus on benefits, not features
  - ❌ "50+ components available"
  - ✅ "Start building immediately with 50+ ready components"

### Visual Tips
- Use consistent icon style (all outline or all filled)
- Keep icon colors consistent (typically primary brand color)
- Ensure equal card heights with `h-full` class
- Add hover effects for interactivity

## Checklist
- [ ] 3-6 features (odd numbers like 3 look better)
- [ ] Icons are from lucide-react
- [ ] Titles are concise (2-5 words)
- [ ] Descriptions focus on benefits
- [ ] Cards have equal heights
- [ ] Responsive on all screen sizes
- [ ] Hover effects added for cards
- [ ] Section has descriptive title

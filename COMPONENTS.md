# UI Components Reference

Полная документация по компонентам myVibeDesign.

## Table of Contents
- [Card](#card)
- [Text](#text)
- [Button](#button)

---

## Card

Компонент Card с тремя вариантами оформления.

### Variants

#### `variant="default"` (по умолчанию)
Белая карточка с тонкой рамкой и легкой тенью.

```jsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

<Card variant="default">
  <CardHeader>
    <CardTitle>Default Card</CardTitle>
    <CardDescription>White background with border</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content goes here</p>
  </CardContent>
</Card>
```

#### `variant="burgundy"`
Бордовая карточка (#56051B) с белым текстом.

```jsx
<Card variant="burgundy">
  <CardHeader>
    <CardTitle className="text-white">Burgundy Card</CardTitle>
    <CardDescription className="text-white/80">Premium feel</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-white">White text on burgundy background</p>
  </CardContent>
</Card>
```

#### `variant="dark"`
Черная карточка (#0D0101) с белым текстом.

```jsx
<Card variant="dark">
  <CardHeader>
    <CardTitle className="text-white">Dark Card</CardTitle>
    <CardDescription className="text-white/80">Elegant dark theme</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-white">White text on dark background</p>
  </CardContent>
</Card>
```

### Card Sub-components

- **CardHeader** - Заголовок карточки (padding: 24px)
- **CardTitle** - Заголовок (использует `.text-subhero`)
- **CardDescription** - Описание (использует `.text-caption-dark`)
- **CardContent** - Основной контент (padding: 24px, pt: 0)
- **CardFooter** - Подвал карточки (padding: 24px, pt: 0)

### Features
- Border radius: **25px**
- Мягкие тени (не резкие)
- Padding: **p-6** (24px) по стандарту shadcn/ui

---

## Text

Компонент для единообразной типографики.

### Variants

#### `variant="hero"`
Большой заголовок для героя страницы.
- Font: Inter
- Size: 82px
- Weight: 600
- Line height: 100%
- Letter spacing: -2.46px

```jsx
import { Text } from "@/components/ui/text"

<Text variant="hero" color="primary" as="h1">
  Design Excellence
</Text>
```

#### `variant="subhero"`
Заголовки секций.
- Font: Onest
- Size: 34px
- Weight: 500
- Line height: 115%

```jsx
<Text variant="subhero" as="h2">
  Section Heading
</Text>
```

#### `variant="caption"`
Подписи и вторичный текст.
- Font: Onest
- Size: 18px
- Weight: 500
- Opacity: 70%

```jsx
<Text variant="caption">
  This is a caption with reduced opacity
</Text>
```

#### `variant="body"`
Обычный текст для параграфов.
- Font: Onest
- Size: 16px (base)
- Weight: 400

```jsx
<Text variant="body">
  Regular paragraph text for content sections.
</Text>
```

#### `variant="small"`
Маленький текст.
- Font: Onest
- Size: 14px
- Weight: 400

```jsx
<Text variant="small">
  Small helper text
</Text>
```

### Color Props

```jsx
<Text variant="hero" color="primary">Primary color</Text>
<Text variant="body" color="foreground">Foreground color</Text>
<Text variant="caption" color="muted">Muted color</Text>
<Text variant="body" color="white">White text</Text>
```

### Custom Element (as prop)

По умолчанию рендерится как `<p>`, но можно изменить:

```jsx
<Text variant="hero" as="h1">Renders as h1</Text>
<Text variant="subhero" as="h2">Renders as h2</Text>
<Text variant="body" as="span">Renders as span</Text>
<Text variant="body" as="div">Renders as div</Text>
```

---

## Button

Кнопки с border-radius 25px и шрифтом Onest.

### Variants

#### `variant="default"`
Основная кнопка с бордовым фоном.

```jsx
import { Button } from "@/components/ui/button"

<Button variant="default">
  Primary Action
</Button>
```

#### `variant="secondary"`
Вторичная кнопка с светло-бордовым фоном.

```jsx
<Button variant="secondary">
  Secondary Action
</Button>
```

#### `variant="dark"`
Темная кнопка с черным фоном.

```jsx
<Button variant="dark">
  Dark Button
</Button>
```

#### `variant="outline"`
Прозрачная кнопка с бордовой рамкой.

```jsx
<Button variant="outline">
  Outlined Button
</Button>
```

#### `variant="ghost"`
Прозрачная кнопка с hover эффектом.

```jsx
<Button variant="ghost">
  Ghost Button
</Button>
```

#### `variant="link"`
Кнопка в стиле ссылки.

```jsx
<Button variant="link">
  Link Style
</Button>
```

### Sizes

```jsx
<Button size="sm">Small Button</Button>
<Button size="default">Default Button</Button>
<Button size="lg">Large Button</Button>
<Button size="icon">
  <IconComponent />
</Button>
```

**Size specifications:**
- `sm`: height 40px, padding 16px, text 14px
- `default`: height 48px, padding 24px, text 16px
- `lg`: height 56px, padding 32px, text 18px
- `icon`: 48px × 48px square

### Features
- Border radius: **25px**
- Font: **Onest**
- Smooth hover transitions (opacity: 90%)
- Focus ring для доступности
- Disabled состояние (opacity: 50%, pointer-events: none)

### Advanced Usage

#### With Icon
```jsx
import { ArrowRight } from "lucide-react"

<Button>
  Continue
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>
```

#### As Link
```jsx
<Button asChild>
  <a href="/about">About Us</a>
</Button>
```

#### Loading State
```jsx
<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Loading...
</Button>
```

---

## Best Practices

### ✅ DO

```jsx
// Use component variants
<Card variant="burgundy">...</Card>

// Use Text component for typography
<Text variant="hero">Title</Text>

// Use semantic HTML with 'as' prop
<Text variant="subhero" as="h2">Section</Text>

// Combine with Tailwind utilities
<Button className="mt-4">Click</Button>

// Use cn() for conditional classes
<Card className={cn("custom-class", isActive && "border-2")}>
```

### ❌ DON'T

```jsx
// Don't use inline styles
<Card style={{backgroundColor: '#56051B'}}>...</Card>

// Don't hardcode typography
<h1 className="text-8xl font-bold">Title</h1>

// Don't recreate components
<div className="bg-card rounded-lg p-6">...</div>

// Don't ignore variants
<button className="bg-primary">Click</button>
```

---

## Complete Example

```jsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/text"

export default function ProductCard() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {/* Hero Section */}
        <div className="flex flex-col gap-4">
          <Text variant="hero" color="primary" as="h1">
            Our Products
          </Text>
          <Text variant="subhero" as="h2">
            Discover the perfect solution for your needs
          </Text>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card variant="default">
            <CardHeader>
              <CardTitle>Standard Plan</CardTitle>
              <CardDescription>Perfect for individuals</CardDescription>
            </CardHeader>
            <CardContent>
              <Text variant="body">
                All the essentials to get started with your project.
              </Text>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardFooter>
          </Card>

          <Card variant="burgundy">
            <CardHeader>
              <CardTitle className="text-white">Premium Plan</CardTitle>
              <CardDescription className="text-white/80">
                Best for professionals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Text variant="body" className="text-white">
                Advanced features and priority support included.
              </Text>
            </CardContent>
            <CardFooter>
              <Button variant="dark" className="w-full">
                Get Started
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
```

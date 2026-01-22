# Hero Section Template

## Purpose
Main landing section with headline, subheadline, and call-to-action. First thing visitors see.

## When to Use
- Landing pages
- Product pages
- Home pages
- Campaign pages

## Structure
```jsx
<section className="bg-background py-16 md:py-24">
  <Container>
    <Grid cols={1} md:cols={2} gap={12} className="items-center">
      {/* Left Column: Content */}
      <GridItem>
        <Text variant="hero" color="primary" as="h1">
          [MAIN HEADLINE]
        </Text>
        <Text variant="subhero" className="mt-6 text-muted-foreground">
          [SUPPORTING SUBHEADLINE]
        </Text>
        <div className="mt-8 flex gap-4">
          <Button variant="default" size="lg">
            [PRIMARY CTA]
          </Button>
          <Button variant="outline" size="lg">
            [SECONDARY CTA]
          </Button>
        </div>

        {/* Optional: Trust indicators */}
        <div className="mt-8 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-primary" />
            <Text variant="small" color="muted">
              [SOCIAL PROOF TEXT]
            </Text>
          </div>
        </div>
      </GridItem>

      {/* Right Column: Image or Form */}
      <GridItem>
        {/* Option A: Hero Image */}
        <img
          src="[IMAGE_URL]"
          alt="[DESCRIPTIVE ALT TEXT]"
          className="w-full h-auto rounded-lg shadow-lg"
        />

        {/* Option B: Lead Capture Form */}
        <Card className="p-8">
          <CardHeader>
            <CardTitle>[FORM TITLE]</CardTitle>
            <CardDescription>[FORM DESCRIPTION]</CardDescription>
          </CardHeader>
          <CardContent>
            <Form form={form} onSubmit={onSubmit}>
              <FormField name="name" label="Имя" />
              <FormField name="email" label="Email" />
              <Button type="submit" className="w-full mt-4">
                [SUBMIT TEXT]
              </Button>
            </Form>
          </CardContent>
        </Card>
      </GridItem>
    </Grid>
  </Container>
</section>
```

## Content Placeholders

### [MAIN HEADLINE]
- Should be benefit-driven, not feature-driven
- Max 10-12 words
- Examples:
  - "Создавайте продукты в едином стиле"
  - "Освойте английский за 3 месяца"
  - "Дизайн-система для быстрой разработки"

### [SUPPORTING SUBHEADLINE]
- Explains the headline in more detail
- Max 15-20 words
- Examples:
  - "Полная библиотека UI компонентов для React с поддержкой Dark Mode"
  - "Индивидуальные занятия с носителями языка онлайн"

### [PRIMARY CTA]
- Action-oriented verb
- Examples: "Начать бесплатно", "Записаться на урок", "Посмотреть демо"

### [SECONDARY CTA]
- Lower commitment action
- Examples: "Узнать больше", "Посмотреть примеры", "Скачать гайд"

### [SOCIAL PROOF TEXT]
- Trust indicator
- Examples: "4.9★ на основе 500+ отзывов", "Используют 1000+ компаний"

## Variants

### Variant 1: Full-width Hero (No Grid)
For text-only heroes with centered content:

```jsx
<section className="bg-primary py-24 md:py-32">
  <Container className="text-center">
    <Text variant="hero" as="h1" className="text-white">
      [MAIN HEADLINE]
    </Text>
    <Text variant="subhero" className="mt-6 text-white/90 max-w-3xl mx-auto">
      [SUPPORTING SUBHEADLINE]
    </Text>
    <div className="mt-8 flex gap-4 justify-center">
      <Button variant="secondary" size="lg">
        [PRIMARY CTA]
      </Button>
      <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
        [SECONDARY CTA]
      </Button>
    </div>
  </Container>
</section>
```

### Variant 2: Hero with Background Image

```jsx
<section
  className="relative bg-cover bg-center py-24 md:py-32"
  style={{ backgroundImage: 'url([IMAGE_URL])' }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/50" />

  <Container className="relative z-10">
    <div className="max-w-2xl">
      <Text variant="hero" as="h1" className="text-white">
        [MAIN HEADLINE]
      </Text>
      <Text variant="subhero" className="mt-6 text-white/90">
        [SUPPORTING SUBHEADLINE]
      </Text>
      <div className="mt-8 flex gap-4">
        <Button variant="default" size="lg">
          [PRIMARY CTA]
        </Button>
      </div>
    </div>
  </Container>
</section>
```

## Responsive Behavior
- Mobile (< 768px): Single column, stack content then image
- Tablet (768-1024px): Two columns with reduced gap
- Desktop (> 1024px): Two columns with full gap

## Checklist
- [ ] Headline is benefit-focused
- [ ] Subheadline adds clarity without repeating headline
- [ ] Primary CTA stands out visually
- [ ] Text is readable on all backgrounds
- [ ] Image has descriptive alt text
- [ ] Layout is responsive
- [ ] Social proof element (if applicable) is believable

# CTA (Call-to-Action) Section Template

## Purpose
Encourage visitors to take a specific action - sign up, purchase, contact, download, etc.

## When to Use
- End of landing page
- After features section
- After testimonials
- Mid-page for important conversions

## Structure: CTA with Form

```jsx
<section className="py-16 bg-primary">
  <Container>
    <Grid cols={1} lg:cols={2} gap={12} className="items-center">
      {/* Left: Call to Action */}
      <GridItem>
        <Text variant="h2" as="h2" className="text-white">
          [CTA HEADLINE]
        </Text>
        <Text variant="body" className="mt-4 text-white/90">
          [SUPPORTING TEXT]
        </Text>

        {/* Optional: Benefit List */}
        <ul className="mt-6 space-y-3">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-center text-white/90">
              <Check className="w-5 h-5 mr-2 text-white flex-shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>

        {/* Optional: Trust Indicators */}
        <div className="mt-6 flex items-center gap-4">
          <div className="flex -space-x-2">
            {/* Avatar stack */}
            <Avatar className="border-2 border-white">
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            {/* More avatars... */}
          </div>
          <Text variant="small" className="text-white/80">
            [SOCIAL PROOF]
          </Text>
        </div>
      </GridItem>

      {/* Right: Form */}
      <GridItem>
        <Card className="p-8">
          <CardHeader className="p-0 mb-6">
            <CardTitle>[FORM TITLE]</CardTitle>
            <CardDescription>[FORM DESCRIPTION]</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Form form={form} onSubmit={onSubmit} className="space-y-4">
              <FormField
                name="name"
                label="Имя"
                placeholder="Введите ваше имя"
              />
              <FormField
                name="email"
                label="Email"
                placeholder="example@email.com"
              />
              <FormField
                name="phone"
                label="Телефон"
                placeholder="+7 (___) ___-__-__"
              />
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full"
              >
                [SUBMIT BUTTON TEXT]
              </Button>
            </Form>

            {/* Optional: Privacy Note */}
            <Text variant="small" color="muted" className="mt-4 text-center">
              [PRIVACY TEXT]
            </Text>
          </CardContent>
        </Card>
      </GridItem>
    </Grid>
  </Container>
</section>
```

## Content Placeholders

### [CTA HEADLINE]
- Action-focused, creates urgency or excitement
- Examples:
  - "Готовы начать?"
  - "Запишитесь на бесплатный урок"
  - "Начните создавать сегодня"
  - "Попробуйте бесплатно 14 дней"

### [SUPPORTING TEXT]
- Explain what happens next or why they should act now
- 1-2 sentences
- Examples:
  - "Зарегистрируйтесь прямо сейчас и получите доступ ко всем компонентам"
  - "Заполните форму, и мы свяжемся с вами в течение 24 часов"

### [BENEFITS]
```jsx
const benefits = [
  "Бесплатный доступ на 14 дней",
  "Не требуется кредитная карта",
  "Отмените подписку в любое время"
]
```

### [SOCIAL PROOF]
- "Присоединились 1000+ пользователей"
- "Более 500 компаний нам доверяют"

### [FORM TITLE]
- "Начните бесплатно"
- "Записаться на консультацию"
- "Получить доступ"

### [FORM DESCRIPTION]
- "Заполните форму, и мы свяжемся с вами"
- "Получите доступ за 1 минуту"

### [SUBMIT BUTTON TEXT]
- "Начать бесплатно"
- "Отправить заявку"
- "Записаться"
- "Получить доступ"

### [PRIVACY TEXT]
- "Мы не передаем ваши данные третьим лицам"
- "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности"

## Variants

### Variant 1: Simple CTA (No Form)

```jsx
<section className="py-16 bg-primary">
  <Container className="text-center">
    <Text variant="h2" as="h2" className="text-white">
      [CTA HEADLINE]
    </Text>
    <Text variant="body" className="mt-4 text-white/90 max-w-2xl mx-auto">
      [SUPPORTING TEXT]
    </Text>
    <div className="mt-8 flex gap-4 justify-center">
      <Button variant="secondary" size="lg">
        [PRIMARY ACTION]
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="border-white text-white hover:bg-white/10"
      >
        [SECONDARY ACTION]
      </Button>
    </div>
  </Container>
</section>
```

### Variant 2: CTA with Image

```jsx
<section className="py-16">
  <Container>
    <Card className="overflow-hidden">
      <Grid cols={1} md:cols={2} gap={0}>
        {/* Left: Image */}
        <GridItem>
          <img
            src="[IMAGE_URL]"
            alt="[ALT TEXT]"
            className="w-full h-full object-cover"
          />
        </GridItem>

        {/* Right: CTA */}
        <GridItem className="p-8 md:p-12 flex flex-col justify-center">
          <Text variant="h2" as="h2">
            [CTA HEADLINE]
          </Text>
          <Text variant="body" color="muted" className="mt-4">
            [SUPPORTING TEXT]
          </Text>
          <div className="mt-8">
            <Button variant="default" size="lg">
              [ACTION BUTTON]
            </Button>
          </div>
        </GridItem>
      </Grid>
    </Card>
  </Container>
</section>
```

### Variant 3: Newsletter Signup

```jsx
<section className="py-16 bg-card">
  <Container className="max-w-3xl text-center">
    <Text variant="h2" as="h2">
      [NEWSLETTER TITLE]
    </Text>
    <Text variant="body" color="muted" className="mt-4">
      [NEWSLETTER DESCRIPTION]
    </Text>

    <div className="mt-8 flex gap-4 max-w-md mx-auto">
      <Input
        type="email"
        placeholder="Введите email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1"
      />
      <Button variant="default" onClick={handleSubscribe}>
        Подписаться
      </Button>
    </div>

    <Text variant="small" color="muted" className="mt-4">
      [PRIVACY TEXT]
    </Text>
  </Container>
</section>
```

### Variant 4: Urgency CTA (Limited Time)

```jsx
<section className="py-16 bg-burgundy-dark">
  <Container className="text-center">
    {/* Urgency Badge */}
    <Badge variant="secondary" className="mb-4">
      Ограниченное предложение
    </Badge>

    <Text variant="h2" as="h2" className="text-white">
      [CTA HEADLINE]
    </Text>
    <Text variant="body" className="mt-4 text-white/90 max-w-2xl mx-auto">
      [SUPPORTING TEXT]
    </Text>

    {/* Countdown Timer (if applicable) */}
    <div className="mt-6 flex justify-center gap-4">
      <div className="bg-white/10 rounded-lg p-4 min-w-[80px]">
        <Text variant="h3" className="text-white">23</Text>
        <Text variant="small" className="text-white/80">Часов</Text>
      </div>
      <div className="bg-white/10 rounded-lg p-4 min-w-[80px]">
        <Text variant="h3" className="text-white">45</Text>
        <Text variant="small" className="text-white/80">Минут</Text>
      </div>
    </div>

    <div className="mt-8">
      <Button variant="secondary" size="lg">
        [ACTION BUTTON]
      </Button>
    </div>
  </Container>
</section>
```

### Variant 5: Two-Step CTA

```jsx
<section className="py-16 bg-background">
  <Container className="max-w-4xl">
    <div className="text-center mb-12">
      <Text variant="h2" as="h2">
        [CTA HEADLINE]
      </Text>
      <Text variant="body" color="muted" className="mt-4">
        [SUPPORTING TEXT]
      </Text>
    </div>

    <Grid cols={1} md:cols={2} gap={6}>
      {/* Option 1 */}
      <GridItem>
        <Card className="p-8 text-center h-full flex flex-col">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="mb-2">[OPTION 1 TITLE]</CardTitle>
          <Text variant="body" color="muted" className="mb-6 flex-1">
            [OPTION 1 DESCRIPTION]
          </Text>
          <Button variant="default" className="w-full">
            [OPTION 1 CTA]
          </Button>
        </Card>
      </GridItem>

      {/* Option 2 */}
      <GridItem>
        <Card className="p-8 text-center h-full flex flex-col">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Briefcase className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="mb-2">[OPTION 2 TITLE]</CardTitle>
          <Text variant="body" color="muted" className="mb-6 flex-1">
            [OPTION 2 DESCRIPTION]
          </Text>
          <Button variant="outline" className="w-full">
            [OPTION 2 CTA]
          </Button>
        </Card>
      </GridItem>
    </Grid>
  </Container>
</section>
```

## Form Validation Setup

```jsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2, "Минимум 2 символа"),
  email: z.string().email("Некорректный email"),
  phone: z.string().optional(),
})

function CTASection() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })

  const onSubmit = (data) => {
    console.log("Form data:", data)
    // Handle form submission (API call, etc.)
    alert("Форма отправлена! Мы свяжемся с вами.")
  }

  // ... rest of component
}
```

## Psychology Tips

### Creating Urgency
- Time-limited offers: "Только 3 дня!"
- Scarcity: "Осталось 5 мест"
- Social proof: "Более 1000 пользователей уже присоединились"

### Reducing Friction
- "Не требуется кредитная карта"
- "Без обязательств"
- "Отмените в любое время"
- "Бесплатная пробная версия"

### Building Trust
- Privacy assurance: "Мы не передаем данные"
- Security badges (if applicable)
- Testimonials nearby
- Clear value proposition

## Responsive Behavior
- Mobile (< 768px): Stack form below CTA text
- Tablet/Desktop (> 768px): Side-by-side layout

## Checklist
- [ ] Headline is action-focused
- [ ] Form fields are necessary (don't ask for too much)
- [ ] Submit button has clear action text
- [ ] Privacy note included (if collecting data)
- [ ] Form has validation
- [ ] Success state handled (toast or redirect)
- [ ] Error states handled
- [ ] Mobile-friendly layout
- [ ] Benefits list uses checkmarks
- [ ] Social proof element included

# Pricing Section Template

## Purpose
Display pricing tiers/plans to help visitors choose the right option.

## When to Use
- SaaS products
- Service packages
- Course tiers
- Subscription plans
- Membership levels

## Structure (3 Tiers)

```jsx
<section className="py-16 bg-background">
  <Container>
    {/* Section Header */}
    <div className="text-center mb-12">
      <Text variant="h2" as="h2">
        [SECTION_TITLE]
      </Text>
      <Text variant="body" color="muted" className="mt-4 max-w-2xl mx-auto">
        [SECTION_DESCRIPTION]
      </Text>
    </div>

    {/* Pricing Grid */}
    <Grid cols={1} md:cols={3} gap={6}>
      {pricingPlans.map((plan) => (
        <GridItem key={plan.id}>
          <PricingCard
            title={plan.title}
            price={plan.price}
            period={plan.period}
            description={plan.description}
            features={plan.features}
            highlighted={plan.highlighted}
            ctaText={plan.ctaText}
            onCTAClick={() => handleSelectPlan(plan.id)}
          />
        </GridItem>
      ))}
    </Grid>

    {/* Optional: FAQ or Additional Info */}
    <div className="mt-12 text-center">
      <Text variant="body" color="muted">
        [ADDITIONAL_INFO]
      </Text>
    </div>
  </Container>
</section>
```

## Data Structure

```jsx
const pricingPlans = [
  {
    id: 1,
    title: "Базовый",
    price: "5,000₽",
    period: "/месяц",
    description: "Для индивидуальных пользователей",
    features: [
      "До 10 проектов",
      "5 GB хранилища",
      "Email поддержка",
      "Базовая аналитика"
    ],
    highlighted: false,
    ctaText: "Начать"
  },
  {
    id: 2,
    title: "Профессиональный",
    price: "15,000₽",
    period: "/месяц",
    description: "Для растущих команд",
    features: [
      "Безлимитные проекты",
      "50 GB хранилища",
      "Приоритетная поддержка",
      "Расширенная аналитика",
      "API доступ",
      "Кастомные интеграции"
    ],
    highlighted: true,  // Popular plan
    ctaText: "Попробовать 14 дней"
  },
  {
    id: 3,
    title: "Корпоративный",
    price: "По запросу",
    period: "",
    description: "Для крупных организаций",
    features: [
      "Всё из Профессионального",
      "Безлимитное хранилище",
      "Выделенный менеджер",
      "SLA гарантии",
      "Кастомная настройка",
      "Обучение команды"
    ],
    highlighted: false,
    ctaText: "Связаться с нами"
  }
]
```

## Content Placeholders

### [SECTION_TITLE]
- Examples:
  - "Выберите свой тариф"
  - "Простые и понятные цены"
  - "Тарифные планы"

### [SECTION_DESCRIPTION]
- Examples:
  - "Гибкие тарифы для команд любого размера"
  - "Начните бесплатно, масштабируйтесь по мере роста"
  - "Все тарифы включают 14 дней бесплатного доступа"

### Plan Details

#### Title
- Short, descriptive name
- Examples: "Старт", "Рост", "Бизнес", "Премиум"

#### Price
- Clear number with currency
- Examples: "Бесплатно", "5,000₽", "₽9,999", "По запросу"

#### Period
- Examples: "/месяц", "/год", "/курс", "" (for one-time)

#### Description
- Who is this plan for?
- 1 sentence
- Examples: "Для индивидуальных разработчиков", "Для команд до 10 человек"

#### Features List
- 4-8 features
- Start with most important
- Use clear, benefit-focused language
- Use checkmarks (included) or X marks (not included)

## Variants

### Variant 1: Manual Cards (No PricingCard Component)

```jsx
<Grid cols={1} md:cols={3} gap={6}>
  {pricingPlans.map((plan) => (
    <GridItem key={plan.id}>
      <Card
        className={cn(
          "h-full flex flex-col",
          plan.highlighted && "border-2 border-primary relative"
        )}
      >
        {/* Popular Badge */}
        {plan.highlighted && (
          <Badge
            variant="default"
            className="absolute -top-3 left-1/2 -translate-x-1/2"
          >
            Популярный
          </Badge>
        )}

        <CardHeader>
          <CardTitle>{plan.title}</CardTitle>
          <CardDescription>{plan.description}</CardDescription>

          {/* Price */}
          <div className="mt-4">
            <Text variant="h2" as="div" className="text-primary">
              {plan.price}
              {plan.period && (
                <span className="text-base text-muted-foreground font-normal">
                  {plan.period}
                </span>
              )}
            </Text>
          </div>
        </CardHeader>

        <CardContent className="flex-1">
          {/* Features List */}
          <ul className="space-y-3">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <Text variant="body" color="muted">
                  {feature}
                </Text>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter>
          <Button
            variant={plan.highlighted ? "default" : "outline"}
            size="lg"
            className="w-full"
            onClick={() => handleSelectPlan(plan.id)}
          >
            {plan.ctaText}
          </Button>
        </CardFooter>
      </Card>
    </GridItem>
  ))}
</Grid>
```

### Variant 2: Two Plans (Comparison Layout)

For simple binary choice (Free vs Paid, Basic vs Premium):

```jsx
<Grid cols={1} md:cols={2} gap={8} className="max-w-4xl mx-auto">
  {/* Plan 1 */}
  <GridItem>
    <Card className="h-full">
      {/* ... plan content ... */}
    </Card>
  </GridItem>

  {/* Plan 2 - Highlighted */}
  <GridItem>
    <Card variant="burgundy" className="h-full">
      <CardHeader>
        <CardTitle className="text-white">{plan.title}</CardTitle>
        <CardDescription className="text-white/90">
          {plan.description}
        </CardDescription>
        {/* Price in white */}
        <div className="mt-4">
          <Text variant="h2" as="div" className="text-white">
            {plan.price}
          </Text>
        </div>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-white flex-shrink-0" />
              <Text variant="body" className="text-white/90">
                {feature}
              </Text>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button variant="secondary" size="lg" className="w-full">
          {plan.ctaText}
        </Button>
      </CardFooter>
    </Card>
  </GridItem>
</Grid>
```

### Variant 3: Toggle (Monthly/Yearly)

```jsx
function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState("monthly")

  return (
    <section className="py-16">
      <Container>
        <div className="text-center mb-12">
          <Text variant="h2" as="h2">
            Выберите тариф
          </Text>

          {/* Billing Toggle */}
          <div className="mt-6 inline-flex items-center gap-4 bg-muted rounded-full p-1">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={cn(
                "px-6 py-2 rounded-full font-medium transition-all",
                billingPeriod === "monthly"
                  ? "bg-primary text-white"
                  : "text-foreground"
              )}
            >
              Ежемесячно
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={cn(
                "px-6 py-2 rounded-full font-medium transition-all",
                billingPeriod === "yearly"
                  ? "bg-primary text-white"
                  : "text-foreground"
              )}
            >
              Ежегодно
              <Badge variant="success" className="ml-2">
                Скидка 20%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards - prices change based on billingPeriod */}
        <Grid cols={1} md:cols={3} gap={6}>
          {pricingPlans.map((plan) => (
            <GridItem key={plan.id}>
              <PricingCard
                {...plan}
                price={
                  billingPeriod === "yearly"
                    ? plan.yearlyPrice
                    : plan.monthlyPrice
                }
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </section>
  )
}
```

### Variant 4: Feature Comparison Table

For detailed comparison:

```jsx
<section className="py-16">
  <Container>
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/4">Функция</TableHead>
            <TableHead className="text-center">Базовый</TableHead>
            <TableHead className="text-center">Профессиональный</TableHead>
            <TableHead className="text-center">Корпоративный</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature) => (
            <TableRow key={feature.name}>
              <TableCell className="font-medium">{feature.name}</TableCell>
              <TableCell className="text-center">
                {feature.basic ? (
                  <Check className="w-5 h-5 text-success mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-muted-foreground mx-auto" />
                )}
              </TableCell>
              <TableCell className="text-center">
                {feature.pro ? (
                  <Check className="w-5 h-5 text-success mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-muted-foreground mx-auto" />
                )}
              </TableCell>
              <TableCell className="text-center">
                {feature.enterprise ? (
                  <Check className="w-5 h-5 text-success mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-muted-foreground mx-auto" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </Container>
</section>
```

## Pricing Psychology Tips

### Anchoring
Place the most popular (mid-tier) plan in the center to anchor expectations.

### Scarcity
- "Only 5 spots left at this price"
- "Early bird discount ends in 3 days"

### Social Proof
- "Most popular" badge on mid-tier
- "500+ companies use this plan"

### Value Framing
Instead of "$120/year", show:
- "$10/month when billed annually"
- "Save $24 compared to monthly"

### Feature Highlighting
- Bold the unique features of higher tiers
- Use "Everything in [Lower Tier] +" pattern

### Clear CTA Differentiation
- Highest value plan: "Start Free Trial"
- Mid tier: "Get Started"
- Lower tier: "Choose Plan"
- Enterprise: "Contact Sales"

## Best Practices

### Number of Tiers
- **2 tiers**: Simple choice (Free vs Paid)
- **3 tiers**: Sweet spot (Basic, Pro, Enterprise)
- **4+ tiers**: Only if clear differentiation

### Pricing Display
- Always show currency symbol
- For annual plans, show monthly equivalent
- Make "per month" vs "per year" clear
- Use "Free" or "$0" not "Free trial"

### Feature Lists
- 5-8 features per plan
- Put most important at top
- Be specific ("50 GB" not "Lots of storage")
- Highlight differences between tiers

### Visual Hierarchy
- Highlighted plan should stand out (border, badge, different color)
- Equal card heights for professional look
- Consistent button styling within each tier

## Responsive Behavior
- Mobile (< 768px): Stack vertically, highlight plan first
- Tablet (768-1024px): 2 columns (hide least popular)
- Desktop (> 1024px): 3 columns side-by-side

## Checklist
- [ ] Clear pricing (no hidden costs)
- [ ] Billing period obvious (/month, /year)
- [ ] Most popular plan highlighted
- [ ] Feature lists are benefit-focused
- [ ] CTAs are clear and different per tier
- [ ] All tiers have equal card heights
- [ ] Responsive on all devices
- [ ] FAQ or "Need help choosing?" section nearby
- [ ] Annual discount shown (if applicable)
- [ ] Money-back guarantee mentioned (if applicable)

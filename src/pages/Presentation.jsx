import { Container } from "@/components/ui/container"
import { Grid, GridItem } from "@/components/ui/grid"
import { Card, CardContent } from "@/components/ui/card"
import { Passport, GraduationCap, Briefcase, Compass, User } from "lucide-react"

export default function Presentation() {
  const cards = [
    {
      variant: "default",
      icon: Passport,
      title: "Переезд / жизнь во Франции",
      description: "Для бытовых ситуаций и адаптации: жильё, документы, медицина, общение"
    },
    {
      variant: "burgundy",
      icon: GraduationCap,
      title: "Учёба и экзамены (DELF / DALF и др.)",
      description: "Когда нужен план подготовки и регулярная практика под формат экзамена"
    },
    {
      variant: "default",
      icon: Briefcase,
      title: "Карьера и деловое общение",
      description: "Чтобы уверенное общаться в рабочей среде: письма, встречи, small talk"
    },
    {
      variant: "burgundy",
      icon: Compass,
      title: "Личная цель и развитие",
      description: "Если хочется учить «для себя», но без хаоса: структура, ритм, поддержка"
    }
  ]

  const people = Array(30).fill(null).map((_, i) => ({
    highlighted: (i + 1) % 5 === 0
  }))

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16">
        <Container>
          <div className="mb-12">
            <Grid cols={1} lg:cols={2} gap={12} className="items-start">
              <GridItem>
                <h1 className="text-5xl lg:text-6xl font-semibold text-primary leading-tight">
                  Кому подходит обучение French.Super
                </h1>
              </GridItem>
              <GridItem>
                <p className="text-xl text-foreground leading-relaxed">
                  Мы работаем с конкретными жизненными задачами. Если вы не уверены, какой сценарий ваш мы начнём с уточнения цели и уровня
                </p>
              </GridItem>
            </Grid>
          </div>

          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {people.map((person, index) => (
              <User
                key={index}
                className={`w-8 h-8 ${person.highlighted ? 'text-primary fill-primary' : 'text-foreground/20 fill-foreground/20'}`}
              />
            ))}
          </div>

          <Grid cols={1} md:cols={2} gap={6}>
            {cards.map((card, index) => {
              const Icon = card.icon
              return (
                <GridItem key={index}>
                  <Card variant={card.variant} className="h-full">
                    <CardContent className="p-8">
                      <Icon className={`w-12 h-12 mb-6 ${card.variant === 'burgundy' ? 'text-white' : 'text-foreground'}`} />
                      <h3 className={`text-2xl font-semibold mb-4 ${card.variant === 'burgundy' ? 'text-white' : 'text-foreground'}`}>
                        {card.title}
                      </h3>
                      <p className={card.variant === 'burgundy' ? 'text-white/90' : 'text-foreground/80'}>
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                </GridItem>
              )
            })}
          </Grid>
        </Container>
      </section>
    </div>
  )
}

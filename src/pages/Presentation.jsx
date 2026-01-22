import { Container } from "@/components/ui/container"
import { Grid, GridItem } from "@/components/ui/grid"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, GraduationCap, Briefcase, Compass, User } from "lucide-react"

export default function Presentation() {
  const cards = [
    {
      variant: "default",
      icon: BookOpen,
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
      <header className="py-6 px-8">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white text-2xl">⚜️</span>
              </div>
              <span className="text-2xl font-bold text-foreground">French.Super</span>
            </div>
            <div className="text-foreground text-sm">
              [Результат в каждом уроке]
            </div>
          </div>
        </Container>
      </header>

      <section className="py-8">
        <Container>
          <Grid cols={1} lg:cols={2} gap={16} className="mb-8">
            <GridItem>
              <h1 className="text-6xl font-semibold text-primary leading-none">
                Кому подходит обучение French.Super
              </h1>
            </GridItem>
            <GridItem className="flex items-end">
              <p className="text-lg text-foreground leading-relaxed">
                Мы работаем с конкретными жизненными задачами. Если вы не уверены, какой сценарий ваш мы начнём с уточнения цели и уровня
              </p>
            </GridItem>
          </Grid>

          <div className="flex flex-wrap gap-2 mb-8">
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

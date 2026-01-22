import { Link } from "react-router-dom"
import { Container, Text, Button } from "@/components/ui"
import { FocusCards } from "@/components/ui/focus-cards"

// ============================================
// PLAYGROUND - Тестирование новых компонентов
// ============================================
// Добавляй новые компоненты в секции ниже
// Каждая секция отделена комментарием

function Playground() {
  return (
    <div className="min-h-screen bg-background">
      {/* Навигация */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <Container>
          <div className="flex items-center justify-between h-16">
            <Text variant="h3" as="span">
              Playground
            </Text>
            <div className="flex gap-2">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  ← Главная
                </Button>
              </Link>
              <Link to="/presentation">
                <Button variant="outline" size="sm">
                  Презентация
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </header>

      {/* Контент */}
      <main className="pt-24 pb-16">
        <Container>
          <Text variant="hero" color="primary" as="h1" className="mb-4">
            Component Playground
          </Text>
          <Text variant="subhero" color="muted" className="mb-12">
            Тестируй новые компоненты здесь перед добавлением в проект
          </Text>

          {/* ============================================ */}
          {/* СЕКЦИЯ: FocusCards (Aceternity UI) */}
          {/* ============================================ */}
          <section className="mb-20">
            <div className="mb-8">
              <Text variant="h2" as="h2" className="mb-2">
                FocusCards
              </Text>
              <Text variant="caption" color="muted">
                Источник: Aceternity UI — hover-эффект с размытием
              </Text>
            </div>

            <FocusCardsDemo />
          </section>

          {/* ============================================ */}
          {/* СЕКЦИЯ: Добавляй новые компоненты ниже */}
          {/* ============================================ */}

          {/* Пример новой секции:
          <section className="mb-20">
            <div className="mb-8">
              <Text variant="h2" as="h2" className="mb-2">
                Название компонента
              </Text>
              <Text variant="caption" color="muted">
                Источник: ...
              </Text>
            </div>

            <КомпонентDemo />
          </section>
          */}
        </Container>
      </main>
    </div>
  )
}

// ============================================
// ДЕМО КОМПОНЕНТЫ
// ============================================

function FocusCardsDemo() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Valley of life",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sala behta hi jayega",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Camping is for pros",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The road not taken",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
  ]

  return <FocusCards cards={cards} />
}

export default Playground

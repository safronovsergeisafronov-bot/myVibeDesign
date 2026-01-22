# myVibeDesign

React приложение с настроенной дизайн-системой на основе спецификации из Figma.

---

## 🚀 Быстрый старт

**Новичок?** Начните здесь:

```
1. Читаем этот файл (2 мин) → Понять что это за проект
2. Открываем NAVIGATION.md → Карта всей документации
3. Открываем CHEATSHEET.md → Держим в отдельной вкладке
4. Начинаем работать! 🎯
```

**Документация:**
- 📘 [NAVIGATION.md](./NAVIGATION.md) — Полная карта документации (главная точка входа)
- ⚡ [CHEATSHEET.md](./CHEATSHEET.md) — Шпаргалка для ежедневной работы
- 🎨 [CLAUDE.md](./CLAUDE.md) — Дизайн-система + правила работы с AI
- 🤖 [.claude/README.md](./.claude/README.md) — Система работы с AI
- 📦 [COMPONENTS.md](./COMPONENTS.md) — Список всех компонентов

---

## 📊 Структура документации

```
myVibeDesign/
│
├── 🎯 Начало работы
│   ├── README.md              ← Вы здесь (описание проекта)
│   ├── NAVIGATION.md          ← 🔥 ГЛАВНАЯ карта документации
│   └── CHEATSHEET.md          ← ⚡ Ежедневная шпаргалка
│
├── 🎨 Дизайн-система
│   ├── CLAUDE.md              ← Полная спецификация + Scope Control
│   └── COMPONENTS.md          ← Документация компонентов
│
├── 🤖 Работа с AI
│   └── .claude/
│       ├── README.md          ← Навигация по AI-системе
│       ├── prompts.md         ← 32 готовых промпта
│       ├── workflows.md       ← 6 процессов работы
│       └── templates/         ← Шаблоны секций
│
├── 📚 Справочники
│   └── docs/
│       ├── ACCESSIBILITY.md   ← Доступность
│       ├── ANIMATIONS.md      ← Анимации
│       ├── COMPOSITION.md     ← Композиция
│       └── RESPONSIVE.md      ← Адаптивность
│
└── 🔧 Утилиты
    ├── BUGFIX.md              ← Багфиксы
    ├── PERFORMANCE.md         ← Оптимизация
    ├── AUDIT_PROMPT.md        ← Проверка качества
    └── PROJECT_STATUS.md      ← Статус проекта
```

---

## Технологический стек

- **React 18** - UI библиотека
- **Vite** - Build tool и dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Компонентная библиотека
- **Inter & Onest** - Шрифты

## Быстрый старт

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Сборка для production
npm run build

# Превью production сборки
npm run preview
```

## Дизайн-система

Подробная документация по дизайн-системе находится в файле [CLAUDE.md](./CLAUDE.md).

### Основные цвета

- **Background**: `#EFE7DA` (бежевый)
- **Primary**: `#56051B` (бордовый)
- **Accent**: `#0D0101` (черный)
- **Card**: `#FFF` (белый)

### Типографика

- **Hero**: Inter, 82px, weight 600 → `.text-hero`
- **Subhero**: Onest, 34px, weight 500 → `.text-subhero`
- **Caption**: Onest, 18px, weight 500 → `.text-caption-dark`

### Геометрия

- Базовый border-radius: `25px`
- Используйте Tailwind spacing utilities: `gap-4`, `p-6`, `m-8`

## Структура проекта

```
├── src/
│   ├── components/
│   │   └── ui/              # shadcn/ui компоненты
│   ├── lib/
│   │   └── utils.js         # Утилиты (cn helper)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css            # Глобальные стили, CSS переменные
├── tailwind.config.js       # Конфигурация Tailwind
├── components.json          # Конфигурация shadcn/ui
├── CLAUDE.md                # Руководство по дизайн-системе
└── package.json
```

## Правила разработки

1. **Всегда используйте CSS переменные** через Tailwind классы
2. **Не хардкодьте цвета** - используйте токены дизайн-системы
3. **Используйте предопределенные утилиты типографики**: `.text-hero`, `.text-subhero`, `.text-caption-dark`
4. **Соблюдайте систему отступов Tailwind**: `gap`, `padding`, `margin`
5. **Используйте `cn()` утилиту** из `@/lib/utils` для объединения классов

## Готовые компоненты

### Card (Карточка)
Три варианта: `default` (белая), `burgundy` (бордовая), `dark` (черная)

```jsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

<Card variant="default">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

### Text (Типографика)
Компонент для единообразного текста

```jsx
import { Text } from "@/components/ui/text"

<Text variant="hero" color="primary" as="h1">Hero Title</Text>
<Text variant="subhero">Section Heading</Text>
<Text variant="caption">Caption text</Text>
<Text variant="body">Regular paragraph</Text>
```

### Button (Кнопка)
Кнопки с радиусом 25px и шрифтом Onest

```jsx
import { Button } from "@/components/ui/button"

<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="dark">Dark</Button>
<Button variant="outline">Outline</Button>
<Button size="lg">Large Button</Button>
```

## Примеры использования

### Полный пример
```jsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/text"

function MyComponent() {
  return (
    <div className="flex flex-col gap-6">
      <Text variant="hero" color="primary">Welcome</Text>

      <Card variant="burgundy">
        <CardHeader>
          <CardTitle className="text-white">Featured</CardTitle>
        </CardHeader>
        <CardContent>
          <Text variant="body" className="text-white">
            Content with white text
          </Text>
          <Button variant="outline" className="mt-4">
            Learn More
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
```

## Добавление shadcn/ui компонентов

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
```

Компоненты автоматически настроятся под вашу дизайн-систему.

## Лицензия

MIT

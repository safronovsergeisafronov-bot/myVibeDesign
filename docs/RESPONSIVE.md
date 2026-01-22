# Responsive Design Patterns

## Breakpoints

Tailwind CSS использует следующие breakpoints:

```javascript
sm: '640px'   // Мобильные (альбомная ориентация)
md: '768px'   // Планшеты
lg: '1024px'  // Ноутбуки
xl: '1280px'  // Десктопы
2xl: '1536px' // Большие экраны
```

## Mobile-First подход

Всегда пишите стили mobile-first:

```jsx
// ✅ Правильно - mobile-first
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// ❌ Неправильно - desktop-first
<div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
```

## Responsive Grid Patterns

### Dashboard Grid

```jsx
// Адаптивная сетка для дашборда
<Grid cols={1} gap={4} className="md:grid-cols-2 lg:grid-cols-4">
  <GridItem className="md:col-span-1">
    <MetricWidget />
  </GridItem>
  <GridItem className="md:col-span-1">
    <MetricWidget />
  </GridItem>
  <GridItem className="md:col-span-2 lg:col-span-4">
    <Chart />
  </GridItem>
</Grid>
```

### Course Cards Grid

```jsx
// 1 колонка на мобильных, 2 на планшетах, 3 на десктопах
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {courses.map(course => (
    <CourseCard key={course.id} {...course} />
  ))}
</div>
```

## Filter Panel Pattern

Используйте Sheet для мобильных фильтров:

```jsx
function ResponsiveFilters() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64">
        <FilterPanel>
          <FilterGroup label="Категория">
            {/* Filters */}
          </FilterGroup>
        </FilterPanel>
      </aside>

      {/* Mobile Sheet */}
      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Фильтры
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <FilterPanel>
            <FilterGroup label="Категория">
              {/* Same filters */}
            </FilterGroup>
          </FilterPanel>
        </SheetContent>
      </Sheet>
    </>
  )
}
```

## Navigation Patterns

### Responsive Navbar

```jsx
<Navbar>
  <NavbarBrand>Logo</NavbarBrand>

  {/* Desktop Menu */}
  <NavbarContent className="hidden md:flex">
    <NavbarItem>Курсы</NavbarItem>
    <NavbarItem>Преподаватели</NavbarItem>
  </NavbarContent>

  {/* Mobile Toggle */}
  <NavbarMobileToggle className="md:hidden" />

  <NavbarActions>
    <ThemeToggle />
    <Avatar />
  </NavbarActions>
</Navbar>
```

### Responsive Sidebar

```jsx
<DashboardLayout>
  {/* Автоматически скрывается на мобильных */}
  <Sidebar className="hidden md:block">
    <SidebarContent>
      {/* Navigation */}
    </SidebarContent>
  </Sidebar>

  <main className="flex-1">
    {/* Content */}
  </main>
</DashboardLayout>
```

## Typography Responsive

### Адаптивные заголовки

```jsx
// Hero заголовок с адаптивным размером
<h1 className="text-4xl md:text-5xl lg:text-hero">
  Добро пожаловать
</h1>

// Subhero с адаптивным размером
<h2 className="text-2xl md:text-3xl lg:text-subhero">
  Начните обучение
</h2>
```

### Адаптивный текст

```jsx
<p className="text-sm md:text-base lg:text-lg">
  Описание курса
</p>
```

## Container Patterns

### Centered Container

```jsx
<Container size="xl" className="px-4 md:px-6 lg:px-8">
  {/* Content автоматически центрируется */}
</Container>
```

### Full Width on Mobile

```jsx
// Контент на всю ширину на мобильных, ограничен на десктопе
<div className="w-full lg:max-w-7xl lg:mx-auto px-4 lg:px-8">
  {content}
</div>
```

## Card Layouts

### Horizontal ↔ Vertical Card

```jsx
// Вертикальная карточка на мобильных, горизонтальная на десктопе
<Card className="flex flex-col md:flex-row gap-4">
  <div className="md:w-1/3">
    <img src={image} className="w-full h-48 md:h-full object-cover" />
  </div>
  <CardContent className="md:w-2/3">
    <CardTitle>{title}</CardTitle>
    <p>{description}</p>
  </CardContent>
</Card>
```

## Form Layouts

### Responsive Form Grid

```jsx
<form className="space-y-4">
  {/* 1 колонка на мобильных, 2 на десктопе */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <FormField name="firstName">
      <Input placeholder="Имя" />
    </FormField>
    <FormField name="lastName">
      <Input placeholder="Фамилия" />
    </FormField>
  </div>

  {/* Полная ширина */}
  <FormField name="email">
    <Input placeholder="Email" />
  </FormField>

  {/* Кнопка на всю ширину на мобильных */}
  <Button className="w-full md:w-auto">
    Отправить
  </Button>
</form>
```

## Table Responsive

### Скроллируемая таблица

```jsx
// Таблица со скроллом на мобильных
<div className="overflow-x-auto">
  <DataTable
    columns={columns}
    data={data}
  />
</div>
```

### Карточки вместо таблицы

```jsx
function ResponsiveStudentList({ students }) {
  return (
    <>
      {/* Desktop Table */}
      <div className="hidden md:block">
        <DataTable columns={columns} data={students} />
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {students.map(student => (
          <StudentCard key={student.id} {...student} />
        ))}
      </div>
    </>
  )
}
```

## Spacing Responsive

```jsx
// Адаптивные отступы
<div className="p-4 md:p-6 lg:p-8">
  {/* Padding увеличивается на больших экранах */}
</div>

<div className="space-y-4 md:space-y-6 lg:space-y-8">
  {/* Вертикальные отступы адаптивные */}
</div>

<div className="gap-4 md:gap-6">
  {/* Gap между элементами */}
</div>
```

## Hidden/Visible Pattern

```jsx
// Показать только на мобильных
<div className="block md:hidden">
  Mobile content
</div>

// Показать только на десктопе
<div className="hidden md:block">
  Desktop content
</div>

// Скрыть только на планшетах
<div className="block md:hidden lg:block">
  Visible on mobile and desktop, hidden on tablet
</div>
```

## Dialog vs Drawer

```jsx
// Dialog на десктопе, Drawer на мобильных
function ResponsiveModal({ children }) {
  const isMobile = useMediaQuery("(max-width: 768px)")

  if (isMobile) {
    return (
      <Drawer>
        <DrawerContent>{children}</DrawerContent>
      </Drawer>
    )
  }

  return (
    <Dialog>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}
```

## useMediaQuery Hook

```jsx
import { useState, useEffect } from "react"

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addEventListener("change", listener)
    return () => media.removeEventListener("change", listener)
  }, [matches, query])

  return matches
}

// Использование
function Component() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isDesktop = useMediaQuery("(min-width: 1024px)")

  return isMobile ? <MobileView /> : <DesktopView />
}
```

## Best Practices

1. **Mobile-first**: Всегда начинайте с мобильных стилей
2. **Touch targets**: Минимум 44x44px для кнопок на мобильных
3. **Readable text**: Минимум 16px для основного текста на мобильных
4. **Horizontal scroll**: Избегайте горизонтального скролла
5. **Sheet для мобильных**: Используйте Sheet вместо Dialog на мобильных
6. **Drawer снизу**: Используйте Drawer для мобильных меню
7. **Скрываемые элементы**: Не дублируйте контент, используйте hidden/block
8. **Grid адаптивный**: Всегда делайте grid адаптивным (1→2→3→4 колонки)

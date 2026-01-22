# Component Composition Patterns

## Основные принципы композиции

### 1. Atomic Design Methodology
Следуйте принципам атомарного дизайна:
- **Atoms**: Button, Input, Badge, Avatar
- **Molecules**: SearchBar, FilterGroup, FormField
- **Organisms**: DataTable, CourseCard, DashboardLayout
- **Templates**: Page layouts с сеткой компонентов
- **Pages**: Полностью собранные страницы

### 2. Composition over Configuration
Предпочитайте композицию конфигурации:

```jsx
// ✅ Хорошо - композиция
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>

// ❌ Плохо - избыточная конфигурация
<Card
  title="Title"
  description="Description"
  content="Content"
/>
```

## Паттерны композиции

### Dashboard Layout Pattern

```jsx
import {
  DashboardLayout,
  Grid, GridItem,
  Card, CardHeader, CardTitle, CardContent,
  MetricWidget,
  LineChart,
  DataTable
} from "@/components/ui"

function Dashboard() {
  return (
    <DashboardLayout user={user}>
      <Grid cols={4} gap={6}>
        {/* Metrics Row */}
        <GridItem colSpan={1}>
          <MetricWidget
            title="Активные студенты"
            value="248"
            change={12.5}
            trend="up"
            icon={<Users />}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <MetricWidget
            title="Завершенные уроки"
            value="1,234"
            change={8.2}
            trend="up"
          />
        </GridItem>

        {/* Chart */}
        <GridItem colSpan={4}>
          <Card>
            <CardHeader>
              <CardTitle>Посещаемость</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart
                data={attendanceData}
                lines={[{ dataKey: "students", name: "Студенты" }]}
              />
            </CardContent>
          </Card>
        </GridItem>

        {/* Table */}
        <GridItem colSpan={4}>
          <DataTable
            columns={columns}
            data={data}
            searchKey="name"
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  )
}
```

### Form Pattern with React Hook Form

```jsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Form, FormField, FormItem, FormLabel, FormControl, FormMessage,
  Input, DatePicker, Combobox, Button
} from "@/components/ui"

const formSchema = z.object({
  name: z.string().min(2, "Минимум 2 символа"),
  email: z.string().email("Неверный email"),
  date: z.date(),
  level: z.string(),
})

function StudentForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "" }
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя</FormLabel>
              <FormControl>
                <Input placeholder="Иван Иванов" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Дата рождения</FormLabel>
              <FormControl>
                <DatePicker
                  selected={field.value}
                  onSelect={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Сохранить</Button>
      </form>
    </Form>
  )
}
```

### Educational Platform Pattern

```jsx
import {
  Grid, GridItem,
  CourseCard,
  LessonCard,
  StudentProfileCard,
  Timetable,
  QuizCard,
  AchievementGrid
} from "@/components/ui"

function StudentDashboard({ student }) {
  return (
    <Grid cols={3} gap={6}>
      {/* Profile */}
      <GridItem colSpan={1}>
        <StudentProfileCard {...student} />
      </GridItem>

      {/* Main Content */}
      <GridItem colSpan={2}>
        <div className="space-y-6">
          {/* Courses */}
          <section>
            <h2 className="text-h3 mb-4">Мои курсы</h2>
            <Grid cols={2} gap={4}>
              {courses.map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </Grid>
          </section>

          {/* Upcoming Lessons */}
          <section>
            <h2 className="text-h3 mb-4">Расписание</h2>
            <Timetable slots={upcomingLessons} />
          </section>

          {/* Quizzes */}
          <section>
            <h2 className="text-h3 mb-4">Тесты</h2>
            <Grid cols={2} gap={4}>
              {quizzes.map(quiz => (
                <QuizCard key={quiz.id} {...quiz} />
              ))}
            </Grid>
          </section>

          {/* Achievements */}
          <section>
            <h2 className="text-h3 mb-4">Достижения</h2>
            <AchievementGrid
              achievements={achievements}
              columns={3}
            />
          </section>
        </div>
      </GridItem>
    </Grid>
  )
}
```

### Search & Filter Pattern

```jsx
import {
  Card,
  SearchBar,
  FilterPanel, FilterGroup, FilterCheckbox, FilterSelect,
  DataTable,
  Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle
} from "@/components/ui"

function StudentList() {
  const [search, setSearch] = useState("")
  const [filters, setFilters] = useState({})

  return (
    <div className="space-y-4">
      {/* Search + Filters */}
      <div className="flex gap-4">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Поиск студентов..."
          className="flex-1"
        />

        {/* Mobile Filters */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="md:hidden">
              <Filter className="h-4 w-4" />
              Фильтры
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Фильтры</SheetTitle>
            </SheetHeader>
            <FilterPanel>
              <FilterGroup label="Уровень">
                {levels.map(level => (
                  <FilterCheckbox key={level} value={level}>
                    {level}
                  </FilterCheckbox>
                ))}
              </FilterGroup>
            </FilterPanel>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex gap-6">
        {/* Desktop Filters */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <FilterPanel activeFiltersCount={activeFilters}>
            <FilterGroup label="Уровень">
              {levels.map(level => (
                <FilterCheckbox key={level} value={level}>
                  {level}
                </FilterCheckbox>
              ))}
            </FilterGroup>
            <FilterGroup label="Статус">
              <FilterSelect
                options={statuses}
                value={filters.status}
                onChange={(v) => setFilters({...filters, status: v})}
              />
            </FilterGroup>
          </FilterPanel>
        </div>

        {/* Results */}
        <div className="flex-1">
          <DataTable
            columns={columns}
            data={filteredData}
          />
        </div>
      </div>
    </div>
  )
}
```

### Modal Confirmation Pattern

```jsx
import { ConfirmDialogProvider, useConfirm } from "@/components/ui"

function App() {
  return (
    <ConfirmDialogProvider>
      <YourApp />
    </ConfirmDialogProvider>
  )
}

function StudentActions() {
  const { confirm } = useConfirm()

  const handleDelete = async () => {
    const confirmed = await confirm({
      title: "Удалить студента?",
      description: "Это действие нельзя отменить. Все данные студента будут удалены.",
      confirmText: "Удалить",
      cancelText: "Отмена",
      variant: "destructive"
    })

    if (confirmed) {
      await deleteStudent()
    }
  }

  return <Button onClick={handleDelete}>Удалить</Button>
}
```

## Best Practices

1. **Используйте Grid для сложных макетов** вместо ручного flex
2. **Оборачивайте формы в ConfirmDialogProvider** для удобных подтверждений
3. **Используйте Sheet для мобильных фильтров** вместо Dialog
4. **Группируйте связанные компоненты в sections** с заголовками
5. **Используйте ErrorBoundary** для критичных секций
6. **Применяйте LoadingOverlay** для длительных операций
7. **Используйте NotificationCenter** для системных уведомлений

import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
    // Layout
    Container, Card, CardHeader, CardTitle, CardDescription, CardContent,
    Grid, GridItem,
    // Typography & Buttons
    Text, Button, Badge,
    // New Form Components
    Form, FormField, FormItem, FormLabel, FormControl, FormMessage,
    Input, Textarea,
    DatePicker, TimePicker,
    NumberInput, MultiSelect, Combobox,
    // Data Components
    DataTable,
    // Charts
    LineChart, BarChart, PieChart, AreaChart,
    MetricWidget,
    // Educational Components
    CourseCard, LessonCard, StudentProfileCard, TeacherProfileCard,
    QuizCard, AttendanceTracker, Timetable, AchievementBadge, AchievementGrid,
    // Search & Filters
    SearchBar, FilterPanel, FilterGroup, FilterCheckbox, FilterSelect,
    // Feedback
    NotificationCenter, LoadingOverlay, ConfirmDialogProvider, useConfirm,
    Drawer, Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle,
    // Navigation
    Tabs, TabsList, TabsTrigger, TabsContent,
    ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuSeparator,
    TreeView, TreeItem,
    Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem,
    // Theme
    ThemeProvider, ThemeToggle,
} from "@/components/ui"

import { Calendar, Users, BookOpen, GraduationCap, Filter, Search, Bell } from "lucide-react"

// Sample data for charts
const chartData = [
    { month: "Янв", students: 65 },
    { month: "Фев", students: 72 },
    { month: "Мар", students: 85 },
    { month: "Апр", students: 91 },
    { month: "Май", students: 98 },
    { month: "Июн", students: 105 },
]

// Sample data for DataTable
const studentsData = [
    { id: 1, name: "Иван Петров", level: "B1", progress: 75, status: "active" },
    { id: 2, name: "Мария Сидорова", level: "A2", progress: 60, status: "active" },
    { id: 3, name: "Алексей Иванов", level: "C1", progress: 90, status: "pending" },
]

const columns = [
    { accessorKey: "name", header: "Имя" },
    { accessorKey: "level", header: "Уровень" },
    { accessorKey: "progress", header: "Прогресс" },
    { accessorKey: "status", header: "Статус" },
]

// Sample courses
const courses = [
    {
        id: 1,
        title: "Английский для начинающих",
        description: "Основы английского языка",
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400",
        level: "A1",
        duration: "3 месяца",
        students: 24,
        teacher: "Анна Иванова",
        price: "15000₽",
        progress: 45,
    },
    {
        id: 2,
        title: "Разговорный английский",
        description: "Практика речи и аудирования",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400",
        level: "B2",
        duration: "2 месяца",
        students: 18,
        teacher: "Петр Сидоров",
        price: "18000₽",
        progress: 70,
    },
]

// Sample lessons
const lessons = [
    {
        id: 1,
        title: "Present Simple Tense",
        type: "Грамматика",
        duration: "45 мин",
        completed: true,
        materials: 5,
        progress: 100,
    },
    {
        id: 2,
        title: "Daily Conversations",
        type: "Разговор",
        duration: "60 мин",
        completed: false,
        materials: 3,
        progress: 30,
    },
]

// Sample timetable
const timetable = [
    {
        id: 1,
        day: "Понедельник",
        time: "10:00 - 11:30",
        title: "Английский A1",
        teacher: "Анна Иванова",
        room: "Комната 101",
        status: "scheduled",
    },
    {
        id: 2,
        day: "Понедельник",
        time: "14:00 - 15:30",
        title: "Разговорный клуб",
        teacher: "Петр Сидоров",
        room: "Комната 203",
        status: "ongoing",
    },
]

// Sample achievements
const achievements = [
    { id: 1, title: "Первое занятие", description: "Посетили первое занятие", icon: "🎯", earned: true, rarity: "common" },
    { id: 2, title: "Упорный ученик", description: "10 занятий подряд", icon: "🔥", earned: true, rarity: "rare" },
    { id: 3, title: "Мастер грамматики", description: "100% на тесте", icon: "📚", earned: false, progress: 75, rarity: "epic" },
]

// Sample notifications
const notifications = [
    { id: 1, type: "info", title: "Новый урок доступен", description: "Проверьте материалы", time: "5 мин назад", read: false },
    { id: 2, type: "success", title: "Тест пройден", description: "Результат: 95%", time: "1 час назад", read: false },
    { id: 3, type: "warning", title: "Скоро занятие", description: "Через 30 минут", time: "2 часа назад", read: true },
]

// Form schema
const formSchema = z.object({
    name: z.string().min(2, "Минимум 2 символа"),
    email: z.string().email("Неверный email"),
    date: z.date({ required_error: "Выберите дату" }),
    level: z.string().min(1, "Выберите уровень"),
    subjects: z.array(z.string()).min(1, "Выберите хотя бы один предмет"),
})

function NewComponentsPage() {
    const [activeTab, setActiveTab] = useState(() => {
        return localStorage.getItem("newComponentsActiveTab") || "dashboard"
    })
    const [searchValue, setSearchValue] = useState("")
    const [filterOpen, setFilterOpen] = useState(false)

    useEffect(() => {
        localStorage.setItem("newComponentsActiveTab", activeTab)
    }, [activeTab])

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subjects: [],
        },
    })

    const onSubmit = (data) => {
        console.log("Form data:", data)
        alert("Форма отправлена! Проверьте консоль.")
    }

    return (
        <ThemeProvider>
            <ConfirmDialogProvider>
                <div className="min-h-screen bg-background">
                    {/* Header */}
                    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
                        <Container>
                            <div className="flex items-center justify-between h-16">
                                <div className="flex items-center gap-4">
                                    <Text variant="h4" color="primary" as="span">Новые Компоненты</Text>
                                    <Badge variant="success">После Аудита</Badge>
                                </div>
                                <div className="flex items-center gap-4">
                                    <NotificationCenter
                                        notifications={notifications}
                                        onMarkAllAsRead={() => console.log("Mark all as read")}
                                        onClear={() => console.log("Clear all")}
                                    />
                                    <ThemeToggle />
                                </div>
                            </div>
                        </Container>
                    </header>

                    <Container className="py-12">
                        <Tabs value={activeTab} onValueChange={setActiveTab}>
                            <TabsList variant="pills" className="flex justify-center gap-2 flex-wrap mb-8">
                                <TabsTrigger value="dashboard" variant="pills">Dashboard</TabsTrigger>
                                <TabsTrigger value="forms" variant="pills">Формы</TabsTrigger>
                                <TabsTrigger value="charts" variant="pills">Графики</TabsTrigger>
                                <TabsTrigger value="educational" variant="pills">Образование</TabsTrigger>
                                <TabsTrigger value="navigation" variant="pills">Навигация</TabsTrigger>
                            </TabsList>

                            {/* DASHBOARD TAB */}
                            <TabsContent value="dashboard">
                                <div className="space-y-8">
                                    <Text variant="h2">Дашборд компоненты</Text>

                                    {/* Metrics */}
                                    <Grid cols={4} gap={6}>
                                        <GridItem colSpan={1}>
                                            <MetricWidget
                                                title="Активные студенты"
                                                value="248"
                                                change={12.5}
                                                trend="up"
                                                icon={<Users className="h-5 w-5" />}
                                            />
                                        </GridItem>
                                        <GridItem colSpan={1}>
                                            <MetricWidget
                                                title="Завершенные уроки"
                                                value="1,234"
                                                change={8.2}
                                                trend="up"
                                                variant="success"
                                            />
                                        </GridItem>
                                        <GridItem colSpan={1}>
                                            <MetricWidget
                                                title="Средняя оценка"
                                                value="4.8"
                                                change={-2.1}
                                                trend="down"
                                                variant="warning"
                                            />
                                        </GridItem>
                                        <GridItem colSpan={1}>
                                            <MetricWidget
                                                title="Курсы"
                                                value="42"
                                                icon={<BookOpen className="h-5 w-5" />}
                                            />
                                        </GridItem>
                                    </Grid>

                                    {/* DataTable with Search & Filters */}
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>DataTable с поиском и фильтрами</CardTitle>
                                            <CardDescription>Продвинутая таблица с TanStack Table</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                <div className="flex gap-4">
                                                    <SearchBar
                                                        value={searchValue}
                                                        onChange={setSearchValue}
                                                        placeholder="Поиск студентов..."
                                                        className="flex-1"
                                                    />
                                                    <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
                                                        <SheetTrigger asChild>
                                                            <Button variant="outline">
                                                                <Filter className="h-4 w-4 mr-2" />
                                                                Фильтры
                                                            </Button>
                                                        </SheetTrigger>
                                                        <SheetContent>
                                                            <SheetHeader>
                                                                <SheetTitle>Фильтры</SheetTitle>
                                                            </SheetHeader>
                                                            <FilterPanel className="mt-6">
                                                                <FilterGroup label="Уровень">
                                                                    <FilterCheckbox value="a1">A1</FilterCheckbox>
                                                                    <FilterCheckbox value="a2">A2</FilterCheckbox>
                                                                    <FilterCheckbox value="b1">B1</FilterCheckbox>
                                                                    <FilterCheckbox value="b2">B2</FilterCheckbox>
                                                                </FilterGroup>
                                                            </FilterPanel>
                                                        </SheetContent>
                                                    </Sheet>
                                                </div>
                                                <DataTable columns={columns} data={studentsData} searchKey="name" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>

                            {/* FORMS TAB */}
                            <TabsContent value="forms">
                                <div className="space-y-8">
                                    <Text variant="h2">Новые компоненты форм</Text>

                                    <Card className="max-w-2xl">
                                        <CardHeader>
                                            <CardTitle>React Hook Form + Zod</CardTitle>
                                            <CardDescription>Продвинутая валидация форм</CardDescription>
                                        </CardHeader>
                                        <CardContent>
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
                                                        name="email"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Email</FormLabel>
                                                                <FormControl>
                                                                    <Input type="email" placeholder="email@example.com" {...field} />
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
                                                                        placeholder="Выберите дату"
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    <FormField
                                                        control={form.control}
                                                        name="level"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Уровень английского</FormLabel>
                                                                <FormControl>
                                                                    <Combobox
                                                                        value={field.value}
                                                                        onChange={field.onChange}
                                                                        placeholder="Выберите уровень"
                                                                        options={[
                                                                            { value: "a1", label: "A1 - Начальный" },
                                                                            { value: "a2", label: "A2 - Элементарный" },
                                                                            { value: "b1", label: "B1 - Средний" },
                                                                            { value: "b2", label: "B2 - Выше среднего" },
                                                                            { value: "c1", label: "C1 - Продвинутый" },
                                                                            { value: "c2", label: "C2 - Профессиональный" },
                                                                        ]}
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    <FormField
                                                        control={form.control}
                                                        name="subjects"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Интересующие предметы</FormLabel>
                                                                <FormControl>
                                                                    <MultiSelect
                                                                        value={field.value}
                                                                        onChange={field.onChange}
                                                                        placeholder="Выберите предметы"
                                                                        options={[
                                                                            { value: "grammar", label: "Грамматика" },
                                                                            { value: "speaking", label: "Разговор" },
                                                                            { value: "listening", label: "Аудирование" },
                                                                            { value: "writing", label: "Письмо" },
                                                                        ]}
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    <Button type="submit">Отправить</Button>
                                                </form>
                                            </Form>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>

                            {/* CHARTS TAB */}
                            <TabsContent value="charts">
                                <div className="space-y-8">
                                    <Text variant="h2">Графики (Recharts)</Text>

                                    <Grid cols={2} gap={6}>
                                        <GridItem colSpan={1}>
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>LineChart</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <LineChart
                                                        data={chartData}
                                                        lines={[{ dataKey: "students", name: "Студенты", color: 1 }]}
                                                        xAxisKey="month"
                                                    />
                                                </CardContent>
                                            </Card>
                                        </GridItem>

                                        <GridItem colSpan={1}>
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>BarChart</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <BarChart
                                                        data={chartData}
                                                        bars={[{ dataKey: "students", name: "Студенты", color: 3 }]}
                                                        xAxisKey="month"
                                                    />
                                                </CardContent>
                                            </Card>
                                        </GridItem>

                                        <GridItem colSpan={1}>
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>PieChart</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <PieChart
                                                        data={[
                                                            { name: "A1", value: 30 },
                                                            { name: "A2", value: 25 },
                                                            { name: "B1", value: 20 },
                                                            { name: "B2", value: 15 },
                                                            { name: "C1", value: 10 },
                                                        ]}
                                                    />
                                                </CardContent>
                                            </Card>
                                        </GridItem>

                                        <GridItem colSpan={1}>
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>AreaChart</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <AreaChart
                                                        data={chartData}
                                                        areas={[{ dataKey: "students", name: "Студенты", color: 5 }]}
                                                        xAxisKey="month"
                                                    />
                                                </CardContent>
                                            </Card>
                                        </GridItem>
                                    </Grid>
                                </div>
                            </TabsContent>

                            {/* EDUCATIONAL TAB */}
                            <TabsContent value="educational">
                                <div className="space-y-8">
                                    <Text variant="h2">Образовательные компоненты</Text>

                                    {/* Courses */}
                                    <div>
                                        <Text variant="h3" className="mb-4">CourseCard</Text>
                                        <Grid cols={2} gap={6}>
                                            {courses.map(course => (
                                                <GridItem key={course.id} colSpan={1}>
                                                    <CourseCard {...course} />
                                                </GridItem>
                                            ))}
                                        </Grid>
                                    </div>

                                    {/* Lessons */}
                                    <div>
                                        <Text variant="h3" className="mb-4">LessonCard</Text>
                                        <Grid cols={2} gap={6}>
                                            {lessons.map(lesson => (
                                                <GridItem key={lesson.id} colSpan={1}>
                                                    <LessonCard {...lesson} />
                                                </GridItem>
                                            ))}
                                        </Grid>
                                    </div>

                                    {/* Profiles */}
                                    <div>
                                        <Text variant="h3" className="mb-4">Profile Cards</Text>
                                        <Grid cols={2} gap={6}>
                                            <GridItem colSpan={1}>
                                                <StudentProfileCard
                                                    name="Иван Петров"
                                                    avatar="ИП"
                                                    level="B1"
                                                    enrolledCourses={3}
                                                    completedLessons={45}
                                                    attendanceRate={92}
                                                    achievements={achievements.filter(a => a.earned)}
                                                />
                                            </GridItem>
                                            <GridItem colSpan={1}>
                                                <TeacherProfileCard
                                                    name="Анна Иванова"
                                                    avatar="АИ"
                                                    subject="Английский язык"
                                                    rating={4.9}
                                                    studentsCount={48}
                                                    experience="5 лет"
                                                    availability="Пн-Пт, 10:00-18:00"
                                                />
                                            </GridItem>
                                        </Grid>
                                    </div>

                                    {/* Timetable */}
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Timetable</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <Timetable slots={timetable} />
                                        </CardContent>
                                    </Card>

                                    {/* Achievements */}
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>AchievementBadge & AchievementGrid</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <AchievementGrid achievements={achievements} columns={3} />
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>

                            {/* NAVIGATION TAB */}
                            <TabsContent value="navigation">
                                <div className="space-y-8">
                                    <Text variant="h2">Навигация</Text>

                                    {/* ContextMenu */}
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>ContextMenu</CardTitle>
                                            <CardDescription>Правый клик по карточке</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ContextMenu>
                                                <ContextMenuTrigger>
                                                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                                                        Правый клик сюда
                                                    </div>
                                                </ContextMenuTrigger>
                                                <ContextMenuContent>
                                                    <ContextMenuItem onClick={() => alert("Открыть")}>Открыть</ContextMenuItem>
                                                    <ContextMenuItem onClick={() => alert("Редактировать")}>Редактировать</ContextMenuItem>
                                                    <ContextMenuSeparator />
                                                    <ContextMenuItem onClick={() => alert("Удалить")}>Удалить</ContextMenuItem>
                                                </ContextMenuContent>
                                            </ContextMenu>
                                        </CardContent>
                                    </Card>

                                    {/* TreeView */}
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>TreeView</CardTitle>
                                            <CardDescription>Иерархическая структура</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <TreeView>
                                                <TreeItem label="Курсы" defaultExpanded>
                                                    <TreeItem label="Английский" defaultExpanded>
                                                        <TreeItem label="A1 - Начальный" />
                                                        <TreeItem label="A2 - Элементарный" />
                                                    </TreeItem>
                                                    <TreeItem label="Немецкий">
                                                        <TreeItem label="A1 - Начальный" />
                                                    </TreeItem>
                                                </TreeItem>
                                                <TreeItem label="Преподаватели" defaultExpanded>
                                                    <TreeItem label="Анна Иванова" />
                                                    <TreeItem label="Петр Сидоров" />
                                                </TreeItem>
                                            </TreeView>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </Container>
                </div>
            </ConfirmDialogProvider>
        </ThemeProvider>
    )
}

export default NewComponentsPage

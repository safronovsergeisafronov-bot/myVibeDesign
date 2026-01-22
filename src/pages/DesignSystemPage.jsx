import React, { useState } from "react"
import {
    // Core
    Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter,
    Button, Text,
    // Forms
    Input, Textarea, Label, Checkbox, RadioGroup, RadioGroupItem, Switch,
    Select, SelectItem, FormGroup,
    // Feedback
    Badge, Alert, AlertTitle, AlertDescription, Progress, Skeleton, Spinner,
    // Navigation
    Tabs, TabsList, TabsTrigger, TabsContent,
    Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator,
    Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext,
    // Data
    Avatar, AvatarImage, AvatarFallback, getInitials,
    Table, TableHeader, TableBody, TableHead, TableRow, TableCell,
    Accordion, AccordionItem, AccordionTrigger, AccordionContent,
    // Overlays
    Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogBody, DialogFooter,
    Tooltip, TooltipProvider,
    // Layout
    Container, Divider, Separator,
    // Phase 2
    Slider, Rating, FileUpload, Steps,
    PricingCard, StatsCard, TestimonialCard,
    CopyButton, EmptyState, Kbd,
    ThemeProvider, ThemeToggle,
} from "@/components/ui"

// Оптимизация: импортируем только нужные иконки вместо всей библиотеки
// Это значительно уменьшает размер бандла
import {
    Home, User, Settings, Search, Mail, Phone, Calendar, Clock,
    Heart, Star, Bell, Camera, Image, File, Folder, Download,
    Upload, Edit, Trash, Plus, Minus, Check, X, ChevronRight,
    ChevronLeft, ChevronDown, ChevronUp, ArrowRight, ArrowLeft,
    Menu, MoreHorizontal, MoreVertical, Eye, EyeOff, Lock, Unlock,
    Shield, Zap, Activity, BarChart, PieChart, TrendingUp, Users,
    MessageCircle, Send, Share, Link, ExternalLink, Copy, Clipboard
} from "lucide-react"

// Создаем объект с иконками для удобного доступа
const LucideIcons = {
    Home, User, Settings, Search, Mail, Phone, Calendar, Clock,
    Heart, Star, Bell, Camera, Image, File, Folder, Download,
    Upload, Edit, Trash, Plus, Minus, Check, X, ChevronRight,
    ChevronLeft, ChevronDown, ChevronUp, ArrowRight, ArrowLeft,
    Menu, MoreHorizontal, MoreVertical, Eye, EyeOff, Lock, Unlock,
    Shield, Zap, Activity, BarChart, PieChart, TrendingUp, Users,
    MessageCircle, Send, Share, Link, ExternalLink, Copy, Clipboard
}

// Select popular icons to display
const popularIcons = [
    "Home", "User", "Settings", "Search", "Mail", "Phone", "Calendar", "Clock",
    "Heart", "Star", "Bell", "Camera", "Image", "File", "Folder", "Download",
    "Upload", "Edit", "Trash", "Plus", "Minus", "Check", "X", "ChevronRight",
    "ChevronLeft", "ChevronDown", "ChevronUp", "ArrowRight", "ArrowLeft",
    "Menu", "MoreHorizontal", "MoreVertical", "Eye", "EyeOff", "Lock", "Unlock",
    "Shield", "Zap", "Activity", "BarChart", "PieChart", "TrendingUp", "Users",
    "MessageCircle", "Send", "Share", "Link", "ExternalLink", "Copy", "Clipboard"
]

function DesignSystemPage() {
    const [checkboxChecked, setCheckboxChecked] = useState(false)
    const [switchChecked, setSwitchChecked] = useState(false)
    const [radioValue, setRadioValue] = useState("option1")
    const [selectValue, setSelectValue] = useState("")
    const [dialogOpen, setDialogOpen] = useState(false)
    const [activeTab, setActiveTab] = useState("overview")
    const [sliderValue, setSliderValue] = useState(50)
    const [ratingValue, setRatingValue] = useState(4)

    return (
        <ThemeProvider>
            <TooltipProvider>
                <div className="min-h-screen bg-background">
                    {/* Header with Theme Toggle */}
                    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
                        <Container>
                            <div className="flex items-center justify-between h-16">
                                <div className="flex items-center gap-4">
                                    <Text variant="h4" color="primary" as="span">myVibeDesign</Text>
                                    <Badge variant="outline">v2.0</Badge>
                                </div>
                                <div className="flex items-center gap-4">
                                    <ThemeToggle />
                                </div>
                            </div>
                        </Container>
                    </header>

                    <Container className="py-12">
                        <div className="flex flex-col gap-12">
                            {/* Hero */}
                            <div className="text-center">
                                <Text variant="hero" color="primary" as="h1">
                                    Дизайн-Система
                                </Text>
                                <Text variant="subhero" as="h2" className="mt-4">
                                    50+ компонентов для React
                                </Text>
                                <Text variant="body" className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                                    Полная библиотека UI-компонентов с поддержкой Dark Mode, шаблонами страниц и иконками Lucide
                                </Text>
                            </div>

                            {/* Navigation */}
                            <Tabs value={activeTab} onValueChange={setActiveTab}>
                                <TabsList variant="pills" className="flex justify-center gap-2 flex-wrap">
                                    <TabsTrigger value="overview" variant="pills">Обзор</TabsTrigger>
                                    <TabsTrigger value="colors" variant="pills">Цвета</TabsTrigger>
                                    <TabsTrigger value="typography" variant="pills">Типографика</TabsTrigger>
                                    <TabsTrigger value="buttons" variant="pills">Кнопки</TabsTrigger>
                                    <TabsTrigger value="forms" variant="pills">Формы</TabsTrigger>
                                    <TabsTrigger value="cards" variant="pills">Карточки</TabsTrigger>
                                    <TabsTrigger value="feedback" variant="pills">Обратная связь</TabsTrigger>
                                    <TabsTrigger value="data" variant="pills">Данные</TabsTrigger>
                                    <TabsTrigger value="icons" variant="pills">Иконки</TabsTrigger>
                                    <TabsTrigger value="advanced" variant="pills">Расширенные</TabsTrigger>
                                </TabsList>

                                {/* OVERVIEW TAB */}
                                <TabsContent value="overview">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <StatsCard title="Компоненты" value="50+" trend="up" change={67} changeLabel="vs v1.0" />
                                        <StatsCard title="Цветов" value="15+" trend="up" change={100} changeLabel="токенов" />
                                        <StatsCard title="Размеров текста" value="12+" />
                                        <StatsCard title="Иконок" value="280+" changeLabel="Lucide" />
                                    </div>
                                </TabsContent>

                                {/* COLORS TAB */}
                                <TabsContent value="colors">
                                    <div className="space-y-8">
                                        {/* Burgundy Palette */}
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Бордовая палитра (Burgundy)</CardTitle>
                                                <CardDescription>Основная цветовая гамма бренда</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="grid grid-cols-5 gap-4">
                                                    <div className="flex flex-col gap-2">
                                                        <div className="h-24 rounded-lg bg-burgundy-50 shadow-sm" />
                                                        <Text variant="small" className="font-medium">burgundy-50</Text>
                                                        <Text variant="small" className="text-muted-foreground">#AA506A</Text>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <div className="h-24 rounded-lg bg-burgundy-100 shadow-sm" />
                                                        <Text variant="small" className="font-medium">burgundy-100</Text>
                                                        <Text variant="small" className="text-muted-foreground">#AA3252</Text>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <div className="h-24 rounded-lg bg-burgundy shadow-sm" />
                                                        <Text variant="small" className="font-medium">burgundy (primary)</Text>
                                                        <Text variant="small" className="text-muted-foreground">#56051B</Text>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <div className="h-24 rounded-lg bg-burgundy-700 shadow-sm" />
                                                        <Text variant="small" className="font-medium">burgundy-700</Text>
                                                        <Text variant="small" className="text-muted-foreground">#40121F</Text>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <div className="h-24 rounded-lg bg-burgundy-900 shadow-sm" />
                                                        <Text variant="small" className="font-medium">burgundy-900</Text>
                                                        <Text variant="small" className="text-muted-foreground">#370111</Text>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>

                                        {/* Status Colors */}
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Статусные цвета</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="grid grid-cols-4 gap-4">
                                                    <div className="flex flex-col gap-2">
                                                        <div className="h-20 rounded-lg bg-[hsl(var(--success))]" />
                                                        <Text variant="small" className="font-medium">Success</Text>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <div className="h-20 rounded-lg bg-[hsl(var(--warning))]" />
                                                        <Text variant="small" className="font-medium">Warning</Text>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <div className="h-20 rounded-lg bg-destructive" />
                                                        <Text variant="small" className="font-medium">Destructive</Text>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <div className="h-20 rounded-lg bg-[hsl(var(--info))]" />
                                                        <Text variant="small" className="font-medium">Info</Text>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>

                                        {/* UI Colors */}
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>UI цвета</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="grid grid-cols-6 gap-4">
                                                    <div className="flex flex-col gap-2">
                                                        <div className="h-16 rounded-lg bg-background border" />
                                                        <Text variant="small">background</Text>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <div className="h-16 rounded-lg bg-foreground" />
                                                        <Text variant="small">foreground</Text>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <div className="h-16 rounded-lg bg-card border" />
                                                        <Text variant="small">card</Text>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <div className="h-16 rounded-lg bg-muted" />
                                                        <Text variant="small">muted</Text>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <div className="h-16 rounded-lg bg-accent" />
                                                        <Text variant="small">accent</Text>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <div className="h-16 rounded-lg bg-border border" />
                                                        <Text variant="small">border</Text>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </TabsContent>

                                {/* TYPOGRAPHY TAB */}
                                <TabsContent value="typography">
                                    <div className="grid gap-6">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Заголовки (Inter)</CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-6">
                                                <div className="border-b pb-4">
                                                    <Text variant="small" className="text-muted-foreground mb-2">Hero — 82px</Text>
                                                    <Text variant="hero" color="primary">Hero Text</Text>
                                                </div>
                                                <div className="border-b pb-4">
                                                    <Text variant="small" className="text-muted-foreground mb-2">Subhero — 34px</Text>
                                                    <Text variant="subhero">Subhero Text</Text>
                                                </div>
                                                <div className="border-b pb-4">
                                                    <Text variant="small" className="text-muted-foreground mb-2">H1 — 48px</Text>
                                                    <Text variant="h1" as="h1">Heading 1</Text>
                                                </div>
                                                <div className="border-b pb-4">
                                                    <Text variant="small" className="text-muted-foreground mb-2">H2 — 36px</Text>
                                                    <Text variant="h2" as="h2">Heading 2</Text>
                                                </div>
                                                <div className="border-b pb-4">
                                                    <Text variant="small" className="text-muted-foreground mb-2">H3 — 28px</Text>
                                                    <Text variant="h3" as="h3">Heading 3</Text>
                                                </div>
                                                <div className="border-b pb-4">
                                                    <Text variant="small" className="text-muted-foreground mb-2">H4 — 22px</Text>
                                                    <Text variant="h4" as="h4">Heading 4</Text>
                                                </div>
                                                <div className="border-b pb-4">
                                                    <Text variant="small" className="text-muted-foreground mb-2">H5 — 18px</Text>
                                                    <Text variant="h5" as="h5">Heading 5</Text>
                                                </div>
                                                <div>
                                                    <Text variant="small" className="text-muted-foreground mb-2">H6 — 16px</Text>
                                                    <Text variant="h6" as="h6">Heading 6</Text>
                                                </div>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Текст (Onest)</CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <div className="flex items-baseline gap-4 border-b pb-2">
                                                    <Text variant="small" className="text-muted-foreground w-24 shrink-0">body-2xl</Text>
                                                    <span className="text-body-2xl">Текст 24px — для акцентов</span>
                                                </div>
                                                <div className="flex items-baseline gap-4 border-b pb-2">
                                                    <Text variant="small" className="text-muted-foreground w-24 shrink-0">body-xl</Text>
                                                    <span className="text-body-xl">Текст 20px — увеличенный</span>
                                                </div>
                                                <div className="flex items-baseline gap-4 border-b pb-2">
                                                    <Text variant="small" className="text-muted-foreground w-24 shrink-0">body-lg</Text>
                                                    <span className="text-body-lg">Текст 18px — крупный body</span>
                                                </div>
                                                <div className="flex items-baseline gap-4 border-b pb-2">
                                                    <Text variant="small" className="text-muted-foreground w-24 shrink-0">body-base</Text>
                                                    <span className="text-body-base">Текст 16px — базовый размер</span>
                                                </div>
                                                <div className="flex items-baseline gap-4 border-b pb-2">
                                                    <Text variant="small" className="text-muted-foreground w-24 shrink-0">body-sm</Text>
                                                    <span className="text-body-sm">Текст 14px — мелкий</span>
                                                </div>
                                                <div className="flex items-baseline gap-4 border-b pb-2">
                                                    <Text variant="small" className="text-muted-foreground w-24 shrink-0">body-xs</Text>
                                                    <span className="text-body-xs">Текст 12px — очень мелкий</span>
                                                </div>
                                                <div className="flex items-baseline gap-4 border-b pb-2">
                                                    <Text variant="small" className="text-muted-foreground w-24 shrink-0">caption</Text>
                                                    <Text variant="caption">Caption — подписи (18px, 70%)</Text>
                                                </div>
                                                <div className="flex items-baseline gap-4 border-b pb-2">
                                                    <Text variant="small" className="text-muted-foreground w-24 shrink-0">label-sm</Text>
                                                    <span className="text-label-sm">Label small — uppercase</span>
                                                </div>
                                                <div className="flex items-baseline gap-4">
                                                    <Text variant="small" className="text-muted-foreground w-24 shrink-0">label</Text>
                                                    <span className="text-label">Label — 14px medium</span>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </TabsContent>

                                {/* BUTTONS TAB */}
                                <TabsContent value="buttons">
                                    <div className="grid gap-6">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Варианты кнопок</CardTitle>
                                            </CardHeader>
                                            <CardContent className="flex flex-wrap gap-4">
                                                <Button variant="default">Primary</Button>
                                                <Button variant="secondary">Secondary</Button>
                                                <Button variant="dark">Dark</Button>
                                                <Button variant="white">White</Button>
                                                <Button variant="outline">Outline</Button>
                                                <Button variant="ghost">Ghost</Button>
                                                <Button variant="link">Link</Button>
                                                <Button variant="destructive">Destructive</Button>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Размеры кнопок</CardTitle>
                                            </CardHeader>
                                            <CardContent className="flex flex-wrap items-center gap-4">
                                                <Button size="sm">Small</Button>
                                                <Button size="default">Default</Button>
                                                <Button size="lg">Large</Button>
                                                <Button size="icon"><LucideIcons.Plus className="h-5 w-5" /></Button>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Кнопки с иконками</CardTitle>
                                            </CardHeader>
                                            <CardContent className="flex flex-wrap gap-4">
                                                <Button><LucideIcons.Download className="h-4 w-4 mr-2" />Скачать</Button>
                                                <Button variant="outline"><LucideIcons.Mail className="h-4 w-4 mr-2" />Написать</Button>
                                                <Button variant="dark"><LucideIcons.Send className="h-4 w-4 mr-2" />Отправить</Button>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </TabsContent>

                                {/* FORMS TAB */}
                                <TabsContent value="forms">
                                    <div className="grid lg:grid-cols-2 gap-6">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Input & Textarea</CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <FormGroup label="Имя" required>
                                                    <Input placeholder="Введите имя" />
                                                </FormGroup>
                                                <FormGroup label="Email" error="Некорректный email">
                                                    <Input type="email" variant="error" placeholder="email@example.com" />
                                                </FormGroup>
                                                <FormGroup label="Подтверждено">
                                                    <Input variant="success" placeholder="Валидное значение" />
                                                </FormGroup>
                                                <FormGroup label="Сообщение">
                                                    <Textarea placeholder="Введите сообщение..." />
                                                </FormGroup>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Select, Checkbox, Radio, Switch</CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <FormGroup label="Город">
                                                    <Select value={selectValue} onValueChange={setSelectValue} placeholder="Выберите">
                                                        <SelectItem value="moscow">Москва</SelectItem>
                                                        <SelectItem value="spb">Санкт-Петербург</SelectItem>
                                                        <SelectItem value="kazan">Казань</SelectItem>
                                                    </Select>
                                                </FormGroup>

                                                <div className="flex items-center gap-6 pt-2">
                                                    <div className="flex items-center gap-2">
                                                        <Checkbox checked={checkboxChecked} onCheckedChange={setCheckboxChecked} />
                                                        <Label>Checkbox</Label>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Switch checked={switchChecked} onCheckedChange={setSwitchChecked} />
                                                        <Label>Switch</Label>
                                                    </div>
                                                </div>

                                                <FormGroup label="Выбор тарифа">
                                                    <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                                                        <div className="flex items-center gap-2">
                                                            <RadioGroupItem value="option1" />
                                                            <Label>Базовый</Label>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <RadioGroupItem value="option2" />
                                                            <Label>Продвинутый</Label>
                                                        </div>
                                                    </RadioGroup>
                                                </FormGroup>
                                            </CardContent>
                                        </Card>

                                        <Card className="lg:col-span-2">
                                            <CardHeader>
                                                <CardTitle>Slider & Rating</CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-6">
                                                <div>
                                                    <Label className="mb-4 block">Slider: {sliderValue}</Label>
                                                    <Slider value={sliderValue} onValueChange={setSliderValue} showValue />
                                                </div>
                                                <div>
                                                    <Label className="mb-4 block">Rating: {ratingValue} звезд</Label>
                                                    <Rating value={ratingValue} onValueChange={setRatingValue} size="lg" />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </TabsContent>

                                {/* CARDS TAB */}
                                <TabsContent value="cards">
                                    <div className="space-y-8">
                                        {/* Basic Cards */}
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <Card variant="default" className="h-full">
                                                <CardHeader>
                                                    <CardTitle>Default Card</CardTitle>
                                                    <CardDescription>Белая карточка с рамкой</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <Text variant="body">
                                                        Стандартная карточка для отображения контента с различной длиной текста.
                                                    </Text>
                                                </CardContent>
                                                <CardFooter>
                                                    <Button variant="outline" className="w-full">Действие</Button>
                                                </CardFooter>
                                            </Card>

                                            <Card variant="burgundy" className="h-full">
                                                <CardHeader>
                                                    <CardTitle className="text-white">Burgundy Card</CardTitle>
                                                    <CardDescription className="text-white/80">Бордовая карточка</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <Text variant="body" className="text-white">
                                                        Карточка с основным брендовым цветом.
                                                    </Text>
                                                </CardContent>
                                                <CardFooter>
                                                    <Button variant="white" className="w-full">Действие</Button>
                                                </CardFooter>
                                            </Card>

                                            <Card variant="dark" className="h-full">
                                                <CardHeader>
                                                    <CardTitle className="text-white">Dark Card</CardTitle>
                                                    <CardDescription className="text-white/80">Тёмная карточка</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <Text variant="body" className="text-white">
                                                        Карточка с тёмным акцентным фоном.
                                                    </Text>
                                                </CardContent>
                                                <CardFooter>
                                                    <Button variant="secondary" className="w-full">Действие</Button>
                                                </CardFooter>
                                            </Card>
                                        </div>

                                        {/* Pricing Cards */}
                                        <div>
                                            <Text variant="h3" className="mb-6">Pricing Cards</Text>
                                            <div className="grid md:grid-cols-3 gap-6">
                                                <PricingCard
                                                    title="Стартовый"
                                                    description="Для начинающих"
                                                    price="0₽"
                                                    period="/мес"
                                                    features={["1 проект", "Базовая поддержка"]}
                                                    buttonVariant="outline"
                                                />
                                                <PricingCard
                                                    title="Про"
                                                    description="Для профессионалов"
                                                    price="990₽"
                                                    period="/мес"
                                                    features={["10 проектов", "API доступ", "Приоритетная поддержка"]}
                                                    popular
                                                />
                                                <PricingCard
                                                    title="Бизнес"
                                                    description="Для команд"
                                                    price="2990₽"
                                                    period="/мес"
                                                    features={["Безлимитные проекты", "Кастомизация", "Выделенный менеджер", "SLA 99.9%"]}
                                                    buttonVariant="dark"
                                                />
                                            </div>
                                        </div>

                                        {/* Testimonial Card */}
                                        <div>
                                            <Text variant="h3" className="mb-6">Testimonial Card</Text>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <TestimonialCard
                                                    quote="Отличная дизайн-система! Сэкономили кучу времени на разработке."
                                                    author="Иван Петров"
                                                    role="CTO"
                                                    company="TechCorp"
                                                    rating={5}
                                                />
                                                <TestimonialCard
                                                    quote="Все компоненты продуманы до мелочей. Рекомендую!"
                                                    author="Мария Сидорова"
                                                    role="Product Designer"
                                                    company="DesignStudio"
                                                    rating={5}
                                                    variant="primary"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>

                                {/* FEEDBACK TAB */}
                                <TabsContent value="feedback">
                                    <div className="grid lg:grid-cols-2 gap-6">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Badge</CardTitle>
                                            </CardHeader>
                                            <CardContent className="flex flex-wrap gap-3">
                                                <Badge>Default</Badge>
                                                <Badge variant="secondary">Secondary</Badge>
                                                <Badge variant="success">Success</Badge>
                                                <Badge variant="warning">Warning</Badge>
                                                <Badge variant="destructive">Error</Badge>
                                                <Badge variant="outline">Outline</Badge>
                                                <Badge variant="ghost">Ghost</Badge>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Progress & Spinner</CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <Progress value={75} showValue />
                                                <Progress value={50} variant="success" />
                                                <Progress value={25} variant="warning" />
                                                <div className="flex items-center gap-4 pt-2">
                                                    <Spinner size="sm" />
                                                    <Spinner size="default" />
                                                    <Spinner size="lg" />
                                                </div>
                                            </CardContent>
                                        </Card>

                                        <Card className="lg:col-span-2">
                                            <CardHeader>
                                                <CardTitle>Alert</CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <Alert variant="success">
                                                    <AlertTitle>Успех!</AlertTitle>
                                                    <AlertDescription>Данные успешно сохранены.</AlertDescription>
                                                </Alert>
                                                <Alert variant="warning">
                                                    <AlertTitle>Внимание</AlertTitle>
                                                    <AlertDescription>Проверьте введённые данные.</AlertDescription>
                                                </Alert>
                                                <Alert variant="destructive">
                                                    <AlertTitle>Ошибка</AlertTitle>
                                                    <AlertDescription>Произошла ошибка.</AlertDescription>
                                                </Alert>
                                                <Alert variant="info">
                                                    <AlertTitle>Информация</AlertTitle>
                                                    <AlertDescription>Новые функции доступны.</AlertDescription>
                                                </Alert>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Skeleton</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="flex items-center gap-4">
                                                    <Skeleton className="h-12 w-12 rounded-full" />
                                                    <div className="space-y-2 flex-1">
                                                        <Skeleton className="h-4 w-full" />
                                                        <Skeleton className="h-4 w-3/4" />
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Empty State</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <EmptyState
                                                    iconType="search"
                                                    title="Ничего не найдено"
                                                    description="Попробуйте изменить параметры поиска"
                                                    actionLabel="Сбросить"
                                                    onAction={() => { }}
                                                />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </TabsContent>

                                {/* DATA TAB */}
                                <TabsContent value="data">
                                    <div className="grid gap-6">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Avatar</CardTitle>
                                            </CardHeader>
                                            <CardContent className="flex items-end gap-4">
                                                <Avatar size="xs"><AvatarFallback>XS</AvatarFallback></Avatar>
                                                <Avatar size="sm"><AvatarFallback>SM</AvatarFallback></Avatar>
                                                <Avatar size="default"><AvatarFallback>DF</AvatarFallback></Avatar>
                                                <Avatar size="lg"><AvatarFallback>LG</AvatarFallback></Avatar>
                                                <Avatar size="xl"><AvatarFallback>XL</AvatarFallback></Avatar>
                                                <Avatar size="2xl"><AvatarFallback>2X</AvatarFallback></Avatar>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Table</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <Table>
                                                    <TableHeader>
                                                        <TableRow>
                                                            <TableHead>Имя</TableHead>
                                                            <TableHead>Email</TableHead>
                                                            <TableHead>Статус</TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell>Иван Петров</TableCell>
                                                            <TableCell>ivan@example.com</TableCell>
                                                            <TableCell><Badge variant="success">Активен</Badge></TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>Мария Сидорова</TableCell>
                                                            <TableCell>maria@example.com</TableCell>
                                                            <TableCell><Badge variant="warning">Ожидает</Badge></TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Accordion</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <Accordion type="single" collapsible>
                                                    <AccordionItem value="1">
                                                        <AccordionTrigger>Вопрос 1: Что это?</AccordionTrigger>
                                                        <AccordionContent>Это дизайн-система для React.</AccordionContent>
                                                    </AccordionItem>
                                                    <AccordionItem value="2">
                                                        <AccordionTrigger>Вопрос 2: Как использовать?</AccordionTrigger>
                                                        <AccordionContent>Импортируйте компоненты из @/components/ui</AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Steps</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <Steps
                                                    currentStep={1}
                                                    steps={[
                                                        { title: "Регистрация", description: "Создайте аккаунт" },
                                                        { title: "Настройка", description: "Заполните профиль" },
                                                        { title: "Готово", description: "Начните работу" },
                                                    ]}
                                                />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </TabsContent>

                                {/* ICONS TAB */}
                                <TabsContent value="icons">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Иконки Lucide ({popularIcons.length}+ показано)</CardTitle>
                                            <CardDescription>
                                                Полная библиотека: 280+ иконок • <a href="https://lucide.dev/icons" target="_blank" className="text-primary hover:underline">lucide.dev</a>
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-4">
                                                {popularIcons.map((iconName) => {
                                                    const Icon = LucideIcons[iconName]
                                                    if (!Icon) return null
                                                    return (
                                                        <Tooltip key={iconName} content={iconName}>
                                                            <div className="flex flex-col items-center gap-1 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                                                                <Icon className="h-6 w-6 text-foreground" />
                                                            </div>
                                                        </Tooltip>
                                                    )
                                                })}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>

                                {/* ADVANCED TAB */}
                                <TabsContent value="advanced">
                                    <div className="grid gap-6">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Dialog</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <Button onClick={() => setDialogOpen(true)}>Открыть диалог</Button>
                                                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                                                    <DialogContent onClose={() => setDialogOpen(false)}>
                                                        <DialogHeader>
                                                            <DialogTitle>Заголовок диалога</DialogTitle>
                                                            <DialogDescription>Описание модального окна.</DialogDescription>
                                                        </DialogHeader>
                                                        <DialogBody>Контент диалога</DialogBody>
                                                        <DialogFooter>
                                                            <Button variant="outline" onClick={() => setDialogOpen(false)}>Отмена</Button>
                                                            <Button onClick={() => setDialogOpen(false)}>Подтвердить</Button>
                                                        </DialogFooter>
                                                    </DialogContent>
                                                </Dialog>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Tooltip & Kbd</CardTitle>
                                            </CardHeader>
                                            <CardContent className="flex flex-wrap items-center gap-4">
                                                <Tooltip content="Подсказка сверху" side="top">
                                                    <Button variant="outline">Hover me</Button>
                                                </Tooltip>
                                                <div className="flex items-center gap-2">
                                                    <Kbd>⌘</Kbd><Kbd>K</Kbd>
                                                    <Text variant="small" className="text-muted-foreground ml-2">— поиск</Text>
                                                </div>
                                                <CopyButton value="Скопированный текст" />
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader>
                                                <CardTitle>File Upload</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <FileUpload accept=".jpg,.png,.pdf" maxSize={5} />
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Breadcrumb & Pagination</CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-6">
                                                <Breadcrumb>
                                                    <BreadcrumbList>
                                                        <BreadcrumbItem>
                                                            <BreadcrumbLink href="#">Главная</BreadcrumbLink>
                                                        </BreadcrumbItem>
                                                        <BreadcrumbSeparator />
                                                        <BreadcrumbItem>
                                                            <BreadcrumbLink href="#">Каталог</BreadcrumbLink>
                                                        </BreadcrumbItem>
                                                        <BreadcrumbSeparator />
                                                        <BreadcrumbItem>
                                                            <BreadcrumbPage>Товар</BreadcrumbPage>
                                                        </BreadcrumbItem>
                                                    </BreadcrumbList>
                                                </Breadcrumb>

                                                <Pagination>
                                                    <PaginationContent>
                                                        <PaginationItem><PaginationPrevious /></PaginationItem>
                                                        <PaginationItem><PaginationLink isActive>1</PaginationLink></PaginationItem>
                                                        <PaginationItem><PaginationLink>2</PaginationLink></PaginationItem>
                                                        <PaginationItem><PaginationLink>3</PaginationLink></PaginationItem>
                                                        <PaginationItem><PaginationNext /></PaginationItem>
                                                    </PaginationContent>
                                                </Pagination>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </Container>
                </div>
            </TooltipProvider>
        </ThemeProvider>
    )
}

export default DesignSystemPage

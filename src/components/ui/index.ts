// === CORE COMPONENTS (Phase 1) ===
// Existing components
export { Button, buttonVariants } from "./button"
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "./card"
export { Text, textVariants } from "./text"

// Form components
export { Input, inputVariants } from "./input"
export { Textarea, textareaVariants } from "./textarea"
export { Label, labelVariants } from "./label"
export { Checkbox } from "./checkbox"
export { RadioGroup, RadioGroupItem } from "./radio"
export { Switch } from "./switch"
export { Select, SelectItem, SelectGroup } from "./select"
export {
  useFormField,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "./form"
export { FormGroup } from "./form-group"
export { Calendar, DatePicker, DateRangePicker } from "./date-picker"
export { TimePicker } from "./time-picker"
export { Combobox } from "./combobox"
export { MultiSelect } from "./multi-select"
export { NumberInput } from "./number-input"

// Feedback components
export { Badge, badgeVariants } from "./badge"
export { Alert, AlertTitle, AlertDescription, alertVariants } from "./alert"
export { Progress } from "./progress"
export { Skeleton } from "./skeleton"
export { Spinner, spinnerVariants } from "./spinner"
export { Toast, ToastTitle, ToastDescription, ToastProvider, useToast } from "./toast"

// Navigation components
export { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs"
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./breadcrumb"
export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "./pagination"

// Data display components
export { Avatar, AvatarImage, AvatarFallback, avatarVariants, getInitials } from "./avatar"
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "./table"
export { DataTable } from "./data-table"
export {
  List,
  ListItem,
  ListItemIcon,
  ListItemContent,
  ListItemTitle,
  ListItemDescription,
  ListItemAction,
} from "./list"
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion"

// Overlay components
export {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
} from "./dialog"
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "./dropdown-menu"
export { Tooltip, TooltipProvider } from "./tooltip"
export { Popover, PopoverTrigger, PopoverContent } from "./popover"
export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from "./drawer"
export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "./sheet"
export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "./command"
export { ConfirmDialogProvider, useConfirm } from "./confirm-dialog"

// Layout components
export { Container, containerVariants } from "./container"
export { Divider } from "./divider"
export { Separator } from "./separator"
export {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarActions,
  NavbarMobileToggle,
} from "./navbar"
export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarItem,
  SidebarDivider,
} from "./sidebar"
export {
  Footer,
  FooterContent,
  FooterSection,
  FooterLink,
  FooterBottom,
  FooterCopyright,
  FooterSocials,
} from "./footer"
export { Grid, GridItem } from "./grid"
export { ScrollArea } from "./scroll-area"
export { AspectRatio } from "./aspect-ratio"

// === EXTENDED COMPONENTS (Phase 2) ===

// Media components
export { Image } from "./image"
export { Carousel, CarouselItem } from "./carousel"

// Advanced input components
export { Slider } from "./slider"
export { Rating } from "./rating"
export { FileUpload } from "./file-upload"
export { Steps } from "./steps"

// Specialty cards
export { PricingCard } from "./pricing-card"
export { StatsCard } from "./stats-card"
export { TestimonialCard } from "./testimonial-card"

// Educational components
export { CourseCard } from "./course-card"
export { LessonCard } from "./lesson-card"
export { StudentProfileCard } from "./student-profile-card"
export { TeacherProfileCard } from "./teacher-profile-card"
export { QuizCard } from "./quiz-card"
export { AttendanceTracker, AttendanceDay } from "./attendance-tracker"
export { Timetable, TimetableSlot } from "./timetable"
export { AchievementBadge, AchievementGrid } from "./achievement-badge"

// Dashboard & Analytics components
export { LineChart, BarChart, PieChart, AreaChart } from "./charts"
export { MetricWidget } from "./metric-widget"
export { FilterPanel, FilterGroup, FilterCheckbox, FilterSelect } from "./filter-panel"
export { SearchBar } from "./search-bar"
export { NotificationCenter, NotificationItem } from "./notification-center"

// Advanced navigation
export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
} from "./context-menu"
export { TreeView, TreeItem } from "./tree-view"

// Utility components
export { CopyButton } from "./copy-button"
export { BackToTop } from "./back-to-top"
export { EmptyState } from "./empty-state"
export { Kbd } from "./kbd"
export { LoadingOverlay } from "./loading-overlay"
export { ErrorBoundary } from "./error-boundary"

// Theme
export { ThemeProvider, ThemeToggle, useTheme } from "./theme-toggle"

// Page layouts & templates
export { DashboardLayout } from "./dashboard-layout"
export { AuthLayout, LoginForm, RegisterForm } from "./auth-forms"

// Sections
export { HeroSection, FeatureSection, CTASection } from "./sections"

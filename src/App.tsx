import { lazy, Suspense, type ComponentType, type ReactNode } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import {
  Button as ButtonComponent,
  ErrorBoundary as ErrorBoundaryComponent,
  Spinner as SpinnerComponent,
} from "@/components/ui"

// Type assertions for JSX components during incremental migration
type ButtonProps = {
  variant?: "default" | "secondary" | "dark" | "outline" | "ghost" | "link"
  size?: "sm" | "default" | "lg" | "icon"
  children?: ReactNode
  className?: string
}
type SpinnerProps = { size?: "sm" | "default" | "lg"; className?: string }
type ErrorBoundaryProps = { children?: ReactNode }

const Button = ButtonComponent as unknown as ComponentType<ButtonProps>
const ErrorBoundary = ErrorBoundaryComponent as unknown as ComponentType<ErrorBoundaryProps>
const Spinner = SpinnerComponent as unknown as ComponentType<SpinnerProps>

// Lazy load pages for code splitting
const DesignSystemPage = lazy(() => import("./pages/DesignSystemPage"))
const NewComponentsPage = lazy(() => import("./pages/NewComponentsPage"))
const Presentation = lazy(() => import("./pages/Presentation"))
const Playground = lazy(() => import("./pages/Playground"))

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <Spinner size="lg" />
        <p className="text-muted-foreground">Загрузка...</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <div className="fixed top-4 right-4 z-[100] flex gap-2">
                    <Link to="/presentation">
                      <Button variant="default" size="sm">
                        Презентация →
                      </Button>
                    </Link>
                    <Link to="/new-components">
                      <Button variant="outline" size="sm">
                        Компоненты
                      </Button>
                    </Link>
                    <Link to="/playground">
                      <Button variant="ghost" size="sm">
                        Playground
                      </Button>
                    </Link>
                  </div>
                  <DesignSystemPage />
                </div>
              }
            />
            <Route
              path="/new-components"
              element={
                <div>
                  <div className="fixed top-4 left-4 z-[100]">
                    <Link to="/">
                      <Button variant="outline" size="sm">
                        ← Главная
                      </Button>
                    </Link>
                  </div>
                  <NewComponentsPage />
                </div>
              }
            />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/playground" element={<Playground />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App

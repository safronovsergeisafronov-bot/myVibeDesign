import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import DesignSystemPage from "./pages/DesignSystemPage"
import NewComponentsPage from "./pages/NewComponentsPage"
import Presentation from "./pages/Presentation"
import { Button } from "@/components/ui"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <div className="fixed top-4 right-4 z-[100] flex gap-2">
              <Link to="/new-components">
                <Button variant="default" size="sm">
                  Новые компоненты →
                </Button>
              </Link>
              <Link to="/presentation">
                <Button variant="secondary" size="sm">
                  Презентация →
                </Button>
              </Link>
            </div>
            <DesignSystemPage />
          </div>
        } />
        <Route path="/new-components" element={
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
        } />
        <Route path="/presentation" element={<Presentation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

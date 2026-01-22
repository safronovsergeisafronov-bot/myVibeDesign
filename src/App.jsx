import { useState } from "react"
import DesignSystemPage from "./pages/DesignSystemPage"
import NewComponentsPage from "./pages/NewComponentsPage"
import { Button } from "@/components/ui"

function App() {
  const [page, setPage] = useState("old") // "old" or "new"

  if (page === "new") {
    return (
      <div>
        <div className="fixed top-4 left-4 z-[100]">
          <Button onClick={() => setPage("old")} variant="outline" size="sm">
            ← Старая версия
          </Button>
        </div>
        <NewComponentsPage />
      </div>
    )
  }

  return (
    <div>
      <div className="fixed top-4 right-4 z-[100]">
        <Button onClick={() => setPage("new")} variant="default" size="sm">
          Новые компоненты →
        </Button>
      </div>
      <DesignSystemPage />
    </div>
  )
}

export default App

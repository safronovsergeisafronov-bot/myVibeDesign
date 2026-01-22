import * as React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./dialog"
import { Button } from "./button"

const ConfirmDialogContext = React.createContext(null)

export const useConfirm = () => {
    const context = React.useContext(ConfirmDialogContext)
    if (!context) {
        throw new Error("useConfirm must be used within ConfirmDialogProvider")
    }
    return context
}

export const ConfirmDialogProvider = ({ children }) => {
    const [state, setState] = React.useState({
        open: false,
        title: "",
        description: "",
        confirmText: "Подтвердить",
        cancelText: "Отмена",
        variant: "default",
        onConfirm: null,
    })

    const confirm = React.useCallback(({
        title,
        description,
        confirmText = "Подтвердить",
        cancelText = "Отмена",
        variant = "default",
    }) => {
        return new Promise((resolve) => {
            setState({
                open: true,
                title,
                description,
                confirmText,
                cancelText,
                variant,
                onConfirm: resolve,
            })
        })
    }, [])

    const handleConfirm = () => {
        state.onConfirm?.(true)
        setState((prev) => ({ ...prev, open: false }))
    }

    const handleCancel = () => {
        state.onConfirm?.(false)
        setState((prev) => ({ ...prev, open: false }))
    }

    return (
        <ConfirmDialogContext.Provider value={{ confirm }}>
            {children}
            <Dialog open={state.open} onOpenChange={(open) => !open && handleCancel()}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{state.title}</DialogTitle>
                        {state.description && (
                            <DialogDescription>{state.description}</DialogDescription>
                        )}
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline" onClick={handleCancel}>
                            {state.cancelText}
                        </Button>
                        <Button variant={state.variant} onClick={handleConfirm}>
                            {state.confirmText}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </ConfirmDialogContext.Provider>
    )
}

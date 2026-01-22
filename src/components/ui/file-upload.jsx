import * as React from "react"
import { cn } from "@/lib/utils"
import { Upload, X, File, Image as ImageIcon } from "lucide-react"
import { Button } from "./button"

const FileUpload = React.forwardRef(({
    className,
    accept,
    multiple = false,
    maxSize, // in MB
    onFilesChange,
    disabled,
    ...props
}, ref) => {
    const [files, setFiles] = React.useState([])
    const [isDragging, setIsDragging] = React.useState(false)
    const [error, setError] = React.useState("")
    const inputRef = React.useRef(null)

    const handleFiles = (fileList) => {
        setError("")
        const newFiles = Array.from(fileList)

        // Validate file size
        if (maxSize) {
            const oversized = newFiles.find((f) => f.size > maxSize * 1024 * 1024)
            if (oversized) {
                setError(`Файл ${oversized.name} превышает максимальный размер ${maxSize}MB`)
                return
            }
        }

        const updatedFiles = multiple ? [...files, ...newFiles] : newFiles
        setFiles(updatedFiles)
        onFilesChange?.(updatedFiles)
    }

    const handleDrop = (e) => {
        e.preventDefault()
        setIsDragging(false)
        if (disabled) return
        handleFiles(e.dataTransfer.files)
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        if (!disabled) setIsDragging(true)
    }

    const handleDragLeave = () => {
        setIsDragging(false)
    }

    const removeFile = (index) => {
        const updatedFiles = files.filter((_, i) => i !== index)
        setFiles(updatedFiles)
        onFilesChange?.(updatedFiles)
    }

    const formatFileSize = (bytes) => {
        if (bytes < 1024) return bytes + " B"
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB"
        return (bytes / (1024 * 1024)).toFixed(1) + " MB"
    }

    const getFileIcon = (file) => {
        if (file.type.startsWith("image/")) return ImageIcon
        return File
    }

    return (
        <div ref={ref} className={cn("w-full", className)} {...props}>
            <div
                onClick={() => !disabled && inputRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={cn(
                    "relative flex flex-col items-center justify-center gap-4 p-8 border-2 border-dashed rounded-[var(--radius)] transition-all cursor-pointer",
                    isDragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50",
                    disabled && "opacity-50 cursor-not-allowed"
                )}
            >
                <div className="p-4 rounded-full bg-muted">
                    <Upload className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="text-center">
                    <p className="font-onest font-medium text-foreground">
                        Перетащите файлы сюда или нажмите для выбора
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                        {accept ? `Форматы: ${accept}` : "Любые файлы"}
                        {maxSize && ` • Макс. ${maxSize}MB`}
                    </p>
                </div>
                <input
                    ref={inputRef}
                    type="file"
                    accept={accept}
                    multiple={multiple}
                    onChange={(e) => handleFiles(e.target.files)}
                    disabled={disabled}
                    className="hidden"
                />
            </div>

            {error && (
                <p className="mt-2 text-sm text-destructive font-onest">{error}</p>
            )}

            {files.length > 0 && (
                <div className="mt-4 space-y-2">
                    {files.map((file, index) => {
                        const FileIcon = getFileIcon(file)
                        return (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-3 bg-muted rounded-lg"
                            >
                                <FileIcon className="h-5 w-5 text-muted-foreground shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <p className="font-onest text-sm font-medium truncate">{file.name}</p>
                                    <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 shrink-0"
                                    onClick={() => removeFile(index)}
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
})
FileUpload.displayName = "FileUpload"

export { FileUpload }

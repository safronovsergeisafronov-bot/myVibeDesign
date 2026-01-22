import * as React from "react"
import { cn } from "@/lib/utils"

const Grid = React.forwardRef(({
    className,
    cols = 3,
    gap = 4,
    children,
    ...props
}, ref) => {
    const gridCols = {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6",
        12: "grid-cols-12",
    }

    const gapClasses = {
        1: "gap-1", 2: "gap-2", 3: "gap-3", 4: "gap-4",
        5: "gap-5", 6: "gap-6", 8: "gap-8", 12: "gap-12",
    }

    return (
        <div
            ref={ref}
            className={cn(
                "grid",
                gridCols[cols] || `grid-cols-${cols}`,
                gapClasses[gap] || `gap-${gap}`,
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
})
Grid.displayName = "Grid"

const GridItem = React.forwardRef(({
    className,
    colSpan = 1,
    rowSpan = 1,
    children,
    ...props
}, ref) => {
    const colSpanClasses = {
        1: "col-span-1",
        2: "col-span-2",
        3: "col-span-3",
        4: "col-span-4",
        5: "col-span-5",
        6: "col-span-6",
        12: "col-span-12",
        "full": "col-span-full",
    }

    const rowSpanClasses = {
        1: "row-span-1",
        2: "row-span-2",
        3: "row-span-3",
        4: "row-span-4",
        5: "row-span-5",
        6: "row-span-6",
    }

    return (
        <div
            ref={ref}
            className={cn(
                colSpanClasses[colSpan] || `col-span-${colSpan}`,
                rowSpanClasses[rowSpan] || `row-span-${rowSpan}`,
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
})
GridItem.displayName = "GridItem"

export { Grid, GridItem }

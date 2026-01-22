import * as React from "react"
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { cn } from "@/lib/utils"

const CHART_COLORS = {
    1: '#56051B', 2: '#0D0101', 3: '#AA506A', 4: '#38BDF8', 5: '#FB923C',
    6: '#A78BFA', 7: '#34D399', 8: '#FBBF24', 9: '#F472B6', 10: '#4ADE80'
}

const PieChart = React.forwardRef(({
    className,
    data = [],
    dataKey = "value",
    nameKey = "name",
    height = 300,
    showLegend = true,
    showTooltip = true,
    innerRadius = 0,
    ...props
}, ref) => {
    return (
        <div ref={ref} className={cn("w-full", className)} {...props}>
            <ResponsiveContainer width="100%" height={height}>
                <RechartsPieChart>
                    <Pie
                        data={data}
                        dataKey={dataKey}
                        nameKey={nameKey}
                        cx="50%"
                        cy="50%"
                        innerRadius={innerRadius}
                        outerRadius={80}
                        paddingAngle={2}
                        label={(entry) => entry[nameKey]}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={entry.color || CHART_COLORS[(index % 10) + 1]}
                            />
                        ))}
                    </Pie>
                    {showTooltip && (
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'hsl(var(--popover))',
                                border: '1px solid hsl(var(--border))',
                                borderRadius: 'var(--radius)',
                                fontFamily: 'Onest, sans-serif',
                                fontSize: 12
                            }}
                        />
                    )}
                    {showLegend && (
                        <Legend
                            wrapperStyle={{
                                fontFamily: 'Onest, sans-serif',
                                fontSize: 12
                            }}
                        />
                    )}
                </RechartsPieChart>
            </ResponsiveContainer>
        </div>
    )
})
PieChart.displayName = "PieChart"

export { PieChart }

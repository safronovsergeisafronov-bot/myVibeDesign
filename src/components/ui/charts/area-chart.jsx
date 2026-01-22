import * as React from "react"
import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { cn } from "@/lib/utils"

const CHART_COLORS = {
    1: '#56051B', 2: '#0D0101', 3: '#AA506A', 4: '#38BDF8', 5: '#FB923C',
    6: '#A78BFA', 7: '#34D399', 8: '#FBBF24', 9: '#F472B6', 10: '#4ADE80'
}

const AreaChart = React.forwardRef(({
    className,
    data = [],
    areas = [],
    xAxisKey = "name",
    height = 300,
    showGrid = true,
    showLegend = true,
    showTooltip = true,
    stacked = false,
    ...props
}, ref) => {
    return (
        <div ref={ref} className={cn("w-full", className)} {...props}>
            <ResponsiveContainer width="100%" height={height}>
                <RechartsAreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />}
                    <XAxis
                        dataKey={xAxisKey}
                        stroke="hsl(var(--muted-foreground))"
                        style={{ fontFamily: 'Onest, sans-serif', fontSize: 12 }}
                    />
                    <YAxis
                        stroke="hsl(var(--muted-foreground))"
                        style={{ fontFamily: 'Onest, sans-serif', fontSize: 12 }}
                    />
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
                    {areas.map((area, index) => (
                        <Area
                            key={area.dataKey}
                            type="monotone"
                            dataKey={area.dataKey}
                            stroke={area.color || CHART_COLORS[(index % 10) + 1]}
                            fill={area.color || CHART_COLORS[(index % 10) + 1]}
                            fillOpacity={0.6}
                            name={area.name || area.dataKey}
                            stackId={stacked ? "stack" : undefined}
                        />
                    ))}
                </RechartsAreaChart>
            </ResponsiveContainer>
        </div>
    )
})
AreaChart.displayName = "AreaChart"

export { AreaChart }

  "use client"

  import * as React from "react"
  import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "../ui/card"
  import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "../ui/chart"

  export const description = "An interactive bar chart"

  const chartData = [
    { date: "2024-04-01", desktop: 222, mobile: 150, laptop: 100, airpods: 50 },
    { date: "2024-04-02", desktop: 97, mobile: 180, laptop: 120, airpods: 60 },
    { date: "2024-04-03", desktop: 167, mobile: 120, laptop: 90, airpods: 30 },
    { date: "2024-04-04", desktop: 242, mobile: 260, laptop: 200, airpods: 80 },
    { date: "2024-04-05", desktop: 373, mobile: 290, laptop: 250, airpods: 100 },
    { date: "2024-04-06", desktop: 301, mobile: 340, laptop: 220, airpods: 90 },
    { date: "2024-04-07", desktop: 245, mobile: 180, laptop: 130, airpods: 70 },
    { date: "2024-04-08", desktop: 409, mobile: 320, laptop: 280, airpods: 110 },
  ];

  const chartConfig = {
    views: {
      label: "Page Views",
    },
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
    laptop: {
      label: "Laptop",
      color: "hsl(var(--chart-3))",
    },
    airpods: {
      label: "AirPods",
      color: "hsl(var(--chart-4))",
    },
  } satisfies ChartConfig

  export function NewChart() {
    const [activeChart, setActiveChart] =
      React.useState<keyof typeof chartConfig>("desktop")

    const total = React.useMemo(
      () => ({
        desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
        mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
        laptop: chartData.reduce((acc, curr) => acc + curr.laptop, 0),
        airpods: chartData.reduce((acc, curr) => acc + curr.airpods, 0),
      }),
      []
    )

    return (
      <Card className="w-full z-0">
        <CardHeader className="flex flex-col items-stretch border-b p-0 sm:flex-row">
        
          <div className="flex flex-row justify-around items-center px-6 py-3 ">
            {["desktop", "mobile", "laptop", "airpods"].map((key) => {
              const chart = key as keyof typeof chartConfig;
              return (
                <button
                  key={chart}
                  data-active={activeChart === chart}
                  className={`relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6 transition-colors m-3 duration-200 ${
                    activeChart === chart ? "bg-gray-200 dark:bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => setActiveChart(chart)}
                >
                  <span className="text-xs text-muted-foreground">
                    {chartConfig[chart].label}
                  </span>
                  <span className="text-lg font-bold leading-none sm:text-3xl">
                    {total[key as keyof typeof total].toLocaleString()}
                  </span>
                </button>
              )
            })}
          </div>
        </CardHeader>

        <CardContent className="px-2 sm:p-6">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value)
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                }}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px]"
                    nameKey="views"
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    }}
                  />
                }
              />
              <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    )
  }

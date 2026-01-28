"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

const chartData = [
  { month: "January", desktop: 342, mobile: 245 },
  { month: "February", desktop: 876, mobile: 654 },
  { month: "March", desktop: 512, mobile: 387 },
  { month: "April", desktop: 629, mobile: 521 },
  { month: "May", desktop: 458, mobile: 412 },
  { month: "June", desktop: 115, mobile: 598 },
  { month: "July", desktop: 1325, mobile: 312 },
  { month: "August", desktop: 225, mobile: 743 },
  { month: "September", desktop: 647, mobile: 489 },
  { month: "October", desktop: 532, mobile: 476 },
  { month: "November", desktop: 803, mobile: 687 },
  { month: "December", desktop: 0, mobile: 780 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-6)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function Charts() {
  return (
    <Card className="bg-gray-950/40 w-full h-full rounded-sm">
      <CardHeader>
        <CardTitle>
          <p className="tracking-tighter font-mono text-sm font-semibold">
            Model Portfolio
          </p>
        </CardTitle>
        <CardDescription>
          <p className="font-sans text-sm">
            Showing total visitors for the last 6 months
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient
                id="gradient-chart-desktop"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient
                id="gradient-chart-mobile"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="mobile"
              fill="url(#gradient-chart-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
              strokeWidth={0.8}
              strokeDasharray={"3 3"}
            />
            <Area
              dataKey="desktop"
              fill="url(#gradient-chart-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
              strokeWidth={0.8}
              strokeDasharray={"3 3"}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

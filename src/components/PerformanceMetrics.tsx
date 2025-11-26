import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const mockData = [
  { date: "Mon", load: 850 },
  { date: "Tue", load: 920 },
  { date: "Wed", load: 780 },
  { date: "Thu", load: 1050 },
  { date: "Fri", load: 950 },
  { date: "Sat", load: 1200 },
  { date: "Sun", load: 600 },
];

export const PerformanceMetrics = () => {
  return (
    <section className="container mx-auto px-4 pb-12">
      <h2 className="mb-6 text-2xl font-bold">Weekly Training Load</h2>
      <Card className="border-border bg-card p-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mockData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "6px",
              }}
            />
            <Line
              type="monotone"
              dataKey="load"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--primary))" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </section>
  );
};

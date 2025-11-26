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
    <section className="container mx-auto px-4 pb-16">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-3xl font-bold">Weekly Training Load</h2>
        <p className="text-muted-foreground">Track your performance over time</p>
      </div>
      <Card className="border-border bg-card p-8 shadow-glow hover:shadow-glow-secondary transition-all duration-300">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={mockData}>
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis 
              dataKey="date" 
              stroke="hsl(var(--muted-foreground))" 
              style={{ fontSize: '14px', fontWeight: 500 }}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))" 
              style={{ fontSize: '14px', fontWeight: 500 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "12px",
                boxShadow: "var(--shadow-glow)",
                padding: "12px",
              }}
              labelStyle={{ fontWeight: 600, marginBottom: '4px' }}
            />
            <Line
              type="monotone"
              dataKey="load"
              stroke="url(#lineGradient)"
              strokeWidth={3}
              dot={{ fill: "hsl(var(--primary))", r: 6, strokeWidth: 2, stroke: "hsl(var(--card))" }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </section>
  );
};

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, TrendingUp, Target, MessageSquare } from "lucide-react";
import { useState } from "react";
import { ChatInterface } from "@/components/ChatInterface";
import { PerformanceMetrics } from "@/components/PerformanceMetrics";

const Index = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Elevate Your <span className="text-primary">Performance</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Track, analyze, and optimize your athletic performance with AI-powered insights
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="gap-2" onClick={() => setShowChat(true)}>
                <MessageSquare className="h-5 w-5" />
                Chat with AI Coach
              </Button>
              <Button size="lg" variant="outline">
                View Dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-border bg-card p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Training Load</p>
                <p className="text-2xl font-bold">1,247</p>
              </div>
            </div>
          </Card>
          <Card className="border-border bg-card p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-secondary/10 p-3">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Progress</p>
                <p className="text-2xl font-bold">+12%</p>
              </div>
            </div>
          </Card>
          <Card className="border-border bg-card p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-accent/10 p-3">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Goals Met</p>
                <p className="text-2xl font-bold">8/10</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Performance Metrics */}
      <PerformanceMetrics />

      {/* Chat Interface */}
      {showChat && <ChatInterface onClose={() => setShowChat(false)} />}
    </div>
  );
};

export default Index;

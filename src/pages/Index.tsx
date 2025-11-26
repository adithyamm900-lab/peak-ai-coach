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
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-secondary/20 blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        </div>
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-glow">
              AI-Powered Sports Performance
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-secondary">
              Elevate Your Performance
            </h1>
            <p className="mb-10 text-xl text-muted-foreground md:text-2xl max-w-2xl mx-auto">
              Track, analyze, and optimize your athletic performance with AI-powered insights and personalized coaching
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="gap-2 shadow-glow hover:shadow-glow-secondary transition-all duration-300 text-lg px-8 py-6" style={{ background: 'var(--gradient-primary)' }} onClick={() => setShowChat(true)}>
                <MessageSquare className="h-6 w-6" />
                Chat with AI Coach
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:shadow-glow transition-all duration-300">
                View Dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-border bg-card p-8 shadow-glow hover:shadow-glow-secondary transition-all duration-300 hover:scale-105 relative overflow-hidden group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'var(--gradient-primary)' }} />
            <div className="relative flex items-center gap-4">
              <div className="rounded-xl p-4 shadow-glow" style={{ background: 'var(--gradient-primary)' }}>
                <Activity className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Training Load</p>
                <p className="text-3xl font-bold">1,247</p>
              </div>
            </div>
          </Card>
          <Card className="border-border bg-card p-8 shadow-glow-secondary hover:shadow-glow transition-all duration-300 hover:scale-105 relative overflow-hidden group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'var(--gradient-secondary)' }} />
            <div className="relative flex items-center gap-4">
              <div className="rounded-xl p-4 shadow-glow-secondary" style={{ background: 'var(--gradient-secondary)' }}>
                <TrendingUp className="h-8 w-8 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Progress</p>
                <p className="text-3xl font-bold">+12%</p>
              </div>
            </div>
          </Card>
          <Card className="border-border bg-card p-8 shadow-glow hover:shadow-glow-secondary transition-all duration-300 hover:scale-105 relative overflow-hidden group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'var(--gradient-primary)' }} />
            <div className="relative flex items-center gap-4">
              <div className="rounded-xl p-4 shadow-glow" style={{ background: 'var(--gradient-primary)' }}>
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Goals Met</p>
                <p className="text-3xl font-bold">8/10</p>
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

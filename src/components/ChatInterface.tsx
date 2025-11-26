import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, Bot, User } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const ChatInterface = ({ onClose }: { onClose: () => void }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm your AI sports coach. I can help you with training plans, recovery advice, and performance analysis. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Mock AI response (backend needed for real functionality)
    setTimeout(() => {
      const assistantMessage: Message = {
        role: "assistant",
        content: "This is a demo response. Connect backend to enable real AI coaching powered by Cohere!",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md animate-fade-in">
      <Card className="flex h-[600px] w-full max-w-2xl flex-col border-border bg-card shadow-glow animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-4" style={{ background: 'var(--gradient-primary)' }}>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-background/20 p-2 shadow-glow">
              <Bot className="h-6 w-6 text-primary-foreground" />
            </div>
            <h2 className="text-lg font-semibold text-primary-foreground">AI Sports Coach</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-primary-foreground hover:bg-background/20">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl shadow-glow" style={{ background: 'var(--gradient-primary)' }}>
                    <Bot className="h-6 w-6 text-primary-foreground" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl p-4 shadow-md transition-all duration-300 hover:shadow-lg ${
                    message.role === "user"
                      ? "shadow-glow-secondary"
                      : "bg-muted text-foreground"
                  }`}
                  style={message.role === "user" ? { background: 'var(--gradient-secondary)' } : {}}
                >
                  <p className={message.role === "user" ? "text-secondary-foreground" : ""}>{message.content}</p>
                </div>
                {message.role === "user" && (
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl shadow-glow-secondary" style={{ background: 'var(--gradient-secondary)' }}>
                    <User className="h-6 w-6 text-secondary-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="border-t border-border p-4 bg-muted/30">
          <div className="flex gap-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about training, recovery, or performance..."
              className="flex-1 border-border/50 focus:shadow-glow transition-shadow duration-300"
            />
            <Button onClick={handleSend} size="icon" className="h-11 w-11 shadow-glow hover:shadow-glow-secondary transition-all duration-300" style={{ background: 'var(--gradient-primary)' }}>
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

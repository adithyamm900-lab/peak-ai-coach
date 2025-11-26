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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <Card className="flex h-[600px] w-full max-w-2xl flex-col border-border bg-card">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-4">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            <h2 className="text-lg font-semibold">AI Sports Coach</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
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
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {message.content}
                </div>
                {message.role === "user" && (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10">
                    <User className="h-5 w-5 text-secondary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="border-t border-border p-4">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about training, recovery, or performance..."
              className="flex-1"
            />
            <Button onClick={handleSend} size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

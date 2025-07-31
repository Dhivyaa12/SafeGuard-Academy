'use client';

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { recommendTrainingModules, TrainingRecommendationOutput } from '@/ai/flows/training-recommendation';
import { Loader, Send, User, Bot } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { cn } from '@/lib/utils';

type Message = {
  id: string;
  text: string | React.ReactNode;
  sender: 'user' | 'bot';
};

const staffRoles = ['chef', 'front desk', 'housekeeping', 'maintenance', 'manager'];

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I am your AI Chat Coach. What staff role would you like training recommendations for? For example, try "chef" or "housekeeping staff".',
      sender: 'bot',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage: Message = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setInput('');
    
    const role = input.toLowerCase();
    const foundRole = staffRoles.find(r => role.includes(r));

    let botResponse: Message;

    if (foundRole) {
        try {
            const result = await recommendTrainingModules({ staffRole: foundRole });
            const responseText = (
                <div>
                    <p className="font-semibold mb-2">Here are the recommended modules for a {foundRole}:</p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                        {result.recommendedModules.map(m => <li key={m}>{m}</li>)}
                    </ul>
                    <p className="font-semibold mb-2">Reasoning:</p>
                    <p>{result.reasoning}</p>
                </div>
            );
            botResponse = { id: Date.now().toString() + 'r', text: responseText, sender: 'bot'};
        } catch (error) {
            botResponse = { id: Date.now().toString() + 'e', text: 'Sorry, I encountered an error. Please try again.', sender: 'bot' };
        }
    } else {
        botResponse = {
            id: Date.now().toString() + 'n',
            text: "I can only provide training recommendations for specific hotel roles. Please try asking about a role, like 'What should a chef learn?'.",
            sender: 'bot',
        };
    }

    setMessages((prev) => [...prev, botResponse]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-[75vh] w-full">
        <ScrollArea className="flex-1 p-4">
            <div className="space-y-6">
            {messages.map((message) => (
                <div
                key={message.id}
                className={cn(
                    'flex items-start gap-4',
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                )}
                >
                {message.sender === 'bot' && (
                    <Avatar className="h-8 w-8">
                    <AvatarFallback><Bot className="h-4 w-4" /></AvatarFallback>
                    </Avatar>
                )}
                <div
                    className={cn(
                    'max-w-md rounded-lg p-3 text-sm',
                    message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card'
                    )}
                >
                    {message.text}
                </div>
                {message.sender === 'user' && (
                     <Avatar className="h-8 w-8">
                        <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
                    </Avatar>
                )}
                </div>
            ))}
            {loading && (
                 <div className="flex items-start gap-4 justify-start">
                    <Avatar className="h-8 w-8">
                        <AvatarFallback><Bot className="h-4 w-4" /></AvatarFallback>
                    </Avatar>
                    <div className="max-w-md rounded-lg p-3 text-sm bg-card flex items-center">
                        <Loader className="h-5 w-5 animate-spin" />
                    </div>
                </div>
            )}
            </div>
        </ScrollArea>
        <div className="border-t p-4 bg-card">
            <form onSubmit={handleSendMessage} className="flex gap-4">
            <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask for recommendations for a role..."
                disabled={loading}
            />
            <Button type="submit" disabled={loading || !input.trim()}>
                <Send className="h-4 w-4" />
            </Button>
            </form>
        </div>
    </div>
  );
}

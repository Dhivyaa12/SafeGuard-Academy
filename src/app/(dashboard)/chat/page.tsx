import { ChatInterface } from '@/components/ChatInterface';
import { Card, CardContent } from '@/components/ui/card';

export default function ChatPage() {
    return (
        <div className="space-y-6 flex flex-col h-full">
            <header>
                <h1 className="text-3xl font-bold font-headline">AI Chat Coach</h1>
                <p className="text-muted-foreground">Get instant, personalized training advice for any role.</p>
            </header>
            <Card className="flex-1">
                <CardContent className="p-0 h-full">
                    <ChatInterface />
                </CardContent>
            </Card>
        </div>
    );
}

import { RecommendationForm } from '@/components/RecommendationForm';

export default function RecommendationsPage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-3xl font-bold font-headline">AI Training Recommendations</h1>
                <p className="text-muted-foreground">Leverage AI to create personalized learning paths for your staff.</p>
            </header>
            <RecommendationForm />
        </div>
    )
}

'use client';

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { recommendTrainingModules, TrainingRecommendationOutput } from '@/ai/flows/training-recommendation';
import { Loader, Wand2 } from 'lucide-react';

const roles = ['Chef', 'Front Desk Staff', 'Housekeeping', 'Maintenance Staff', 'Manager'];

export function RecommendationForm() {
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<TrainingRecommendationOutput | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!role) return;

    setLoading(true);
    setRecommendation(null);

    const result = await recommendTrainingModules({ staffRole: role });
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Get Personalized Recommendations</CardTitle>
          <CardDescription>
            Select a staff role to receive AI-powered training recommendations tailored to their specific needs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Select onValueChange={setRole} value={role}>
              <SelectTrigger className="w-full sm:w-[280px]">
                <SelectValue placeholder="Select a staff role..." />
              </SelectTrigger>
              <SelectContent>
                {roles.map((r) => (
                  <SelectItem key={r} value={r}>
                    {r}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button type="submit" disabled={!role || loading}>
                {loading ? (
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                )}
              Generate
            </Button>
          </form>
        </CardContent>
      </Card>
      
      {loading && (
        <div className="text-center p-10">
            <Loader className="mx-auto h-8 w-8 animate-spin text-primary" />
            <p className="mt-4 text-muted-foreground">Generating recommendations...</p>
        </div>
      )}

      {recommendation && (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Recommended Modules for {role}</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                        {recommendation.recommendedModules.map((module) => (
                            <li key={module}>{module}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Reasoning</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{recommendation.reasoning}</p>
                </CardContent>
            </Card>
        </div>
      )}
    </div>
  );
}

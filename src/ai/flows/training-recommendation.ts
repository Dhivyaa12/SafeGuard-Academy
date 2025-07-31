'use server';

/**
 * @fileOverview An AI agent that recommends personalized training modules based on staff roles.
 *
 * - recommendTrainingModules - A function that recommends training modules based on staff role.
 * - TrainingRecommendationInput - The input type for the recommendTrainingModules function.
 * - TrainingRecommendationOutput - The return type for the recommendTrainingModules function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TrainingRecommendationInputSchema = z.object({
  staffRole: z
    .string()
    .describe('The role of the staff member (e.g., chef, front desk, housekeeping).'),
});
export type TrainingRecommendationInput = z.infer<typeof TrainingRecommendationInputSchema>;

const TrainingRecommendationOutputSchema = z.object({
  recommendedModules: z
    .array(z.string())
    .describe('A list of recommended training module names for the staff role.'),
  reasoning: z.string().describe('The AI reasoning for recommending the training modules.'),
});
export type TrainingRecommendationOutput = z.infer<typeof TrainingRecommendationOutputSchema>;

export async function recommendTrainingModules(input: TrainingRecommendationInput): Promise<TrainingRecommendationOutput> {
  return recommendTrainingModulesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'trainingRecommendationPrompt',
  input: {schema: TrainingRecommendationInputSchema},
  output: {schema: TrainingRecommendationOutputSchema},
  prompt: `You are an AI training assistant for SafeGuard Academy, a fire safety training platform for hotels.

  Based on the staff role provided, recommend a list of training modules that would be most relevant to their job function in the context of fire safety.
  Also explain your reasoning for choosing each module.

  Staff Role: {{{staffRole}}}

  Respond with a JSON object formatted as follows:
  {
    "recommendedModules": ["Module 1 Name", "Module 2 Name", ...],
    "reasoning": "Explanation of why these modules were recommended for this role."
  }
  `,
});

const recommendTrainingModulesFlow = ai.defineFlow(
  {
    name: 'recommendTrainingModulesFlow',
    inputSchema: TrainingRecommendationInputSchema,
    outputSchema: TrainingRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

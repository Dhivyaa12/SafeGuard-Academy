// The AI chat coach provides personalized fire safety recommendations to hotel staff.
// The exported function is `getPersonalizedFireSafetyRecommendations`.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedFireSafetyRecommendationsInputSchema = z.object({
  staffRole: z
    .string()
    .describe('The role of the staff member (e.g., chef, front desk, housekeeping).'),
  query: z
    .string()
    .describe(
      'The specific question or request related to fire safety (e.g., What extinguisher to use for electric fire?).'
    ),
});

export type PersonalizedFireSafetyRecommendationsInput =
  z.infer<typeof PersonalizedFireSafetyRecommendationsInputSchema>;

const PersonalizedFireSafetyRecommendationsOutputSchema = z.object({
  recommendation: z
    .string()
    .describe(
      'A personalized recommendation or answer to the staff members query related to fire safety.'
    ),
});

export type PersonalizedFireSafetyRecommendationsOutput =
  z.infer<typeof PersonalizedFireSafetyRecommendationsOutputSchema>;

export async function getPersonalizedFireSafetyRecommendations(
  input: PersonalizedFireSafetyRecommendationsInput
): Promise<PersonalizedFireSafetyRecommendationsOutput> {
  return personalizedFireSafetyRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedFireSafetyRecommendationsPrompt',
  input: {
    schema: PersonalizedFireSafetyRecommendationsInputSchema,
  },
  output: {
    schema: PersonalizedFireSafetyRecommendationsOutputSchema,
  },
  prompt: `You are an AI Chat Coach specializing in fire safety training for hotel staff.

You will provide personalized recommendations and answer questions related to fire safety based on the staff role and their specific query.

Staff Role: {{{staffRole}}}
Query: {{{query}}}

Provide a concise and relevant recommendation or answer to the query.
`,
});

const personalizedFireSafetyRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedFireSafetyRecommendationsFlow',
    inputSchema: PersonalizedFireSafetyRecommendationsInputSchema,
    outputSchema: PersonalizedFireSafetyRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

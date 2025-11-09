'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { Award, CheckCircle, Download, XCircle } from 'lucide-react';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type Quiz = {
    question: string;
    options: string[];
    answer: string;
};

type Lesson = {
    title: string;
    content: string;
};

type Props = {
    lessons: Lesson[];
    quiz: Quiz[];
    moduleTitle: string;
};

export function ModuleInteraction({ lessons, quiz, moduleTitle }: Props) {
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [quizResult, setQuizResult] = useState<'passed' | 'failed' | null>(null);
    const { toast } = useToast();

    const handleAnswerChange = (questionIndex: number, value: string) => {
        setAnswers(prev => ({...prev, [questionIndex]: value}));
    };

    const handleSubmitQuiz = () => {
        let correctAnswers = 0;
        quiz.forEach((q, i) => {
            if(answers[i] === q.answer) {
                correctAnswers++;
            }
        });

        if (correctAnswers === quiz.length) {
            setQuizResult('passed');
            toast({
                title: "Quiz Passed!",
                description: "Congratulations! You've earned a new certificate.",
                variant: "default",
            });
        } else {
            setQuizResult('failed');
            toast({
                title: "Quiz Failed",
                description: "Please review the material and try again.",
                variant: "destructive",
            });
        }
    };

    const resetQuiz = () => {
        setAnswers({});
        setQuizResult(null);
    }
    
    return (
        <div className='space-y-6'>
            <Card>
                <CardHeader>
                    <CardTitle>Lessons</CardTitle>
                    <CardDescription>Review these lessons before taking the quiz.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        {lessons.map((lesson, index) => (
                            <AccordionItem value={`item-${index}`} key={lesson.title}>
                                <AccordionTrigger>
                                    <div className="flex justify-between items-center w-full pr-4">
                                        <span>{lesson.title}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="px-4 pb-4 text-muted-foreground">
                                        {lesson.content}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>AR Fire Simulation</CardTitle>
                    <CardDescription>Experience a real-life fire scenario in augmented reality.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative aspect-video rounded-lg overflow-hidden border">
                        <Image src="https://placehold.co/800x450.png" alt="AR Simulation" layout="fill" objectFit="cover" data-ai-hint="fire safety simulation" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <Button size="lg" variant="secondary">Start AR Simulation</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Knowledge Assessment</CardTitle>
                    <CardDescription>Test your knowledge to complete the module.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {quizResult === null && (
                        <form>
                            {quiz.map((q, i) => (
                                <div key={i} className="mb-6">
                                    <p className="font-semibold mb-3">{i + 1}. {q.question}</p>
                                    <RadioGroup onValueChange={(value) => handleAnswerChange(i, value)}>
                                        {q.options.map((option, j) => (
                                            <div key={j} className="flex items-center space-x-2">
                                                <RadioGroupItem value={option} id={`q${i}o${j}`} />
                                                <Label htmlFor={`q${i}o${j}`}>{option}</Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                    <Separator className="mt-6" />
                                </div>
                            ))}
                        </form>
                    )}
                    {quizResult === 'passed' && (
                        <div className="text-center p-6 bg-accent/30 rounded-lg">
                            <CheckCircle className="mx-auto h-12 w-12 text-green-600" />
                            <h3 className="text-xl font-semibold mt-4">Congratulations! You Passed!</h3>
                            <p className="text-muted-foreground mt-2">You have successfully completed the assessment for this module.</p>
                             <Button onClick={resetQuiz} variant="outline" className="mt-4">Retake Quiz</Button>
                        </div>
                    )}
                     {quizResult === 'failed' && (
                        <div className="text-center p-6 bg-destructive/10 rounded-lg">
                            <XCircle className="mx-auto h-12 w-12 text-destructive" />
                            <h3 className="text-xl font-semibold mt-4">Try Again</h3>
                            <p className="text-muted-foreground mt-2">You did not pass the assessment. Please review the lessons and try again.</p>
                            <Button onClick={resetQuiz} variant="outline" className="mt-4">Try Again</Button>
                        </div>
                    )}
                </CardContent>
                {quizResult === null && (
                    <CardFooter>
                        <Button onClick={handleSubmitQuiz} className="w-full">Submit Quiz</Button>
                    </CardFooter>
                )}
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Certification</CardTitle>
                </CardHeader>
                <CardContent>
                    {quizResult === 'passed' ? (
                        <div className="text-center">
                            <div className="p-4 bg-yellow-400/20 rounded-full inline-block">
                                <Award className="h-12 w-12 text-yellow-500" />
                            </div>
                            <h3 className="text-xl font-semibold mt-4">Certificate of Completion</h3>
                            <p className="text-muted-foreground mt-2">You have earned a certificate for completing the "{moduleTitle}" module.</p>
                            <Button className="mt-6">
                                <Download className="mr-2 h-4 w-4" />
                                Download Certificate
                            </Button>
                        </div>
                    ) : (
                         <p className="text-muted-foreground text-center">
                            You must pass the quiz to earn your certificate.
                         </p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

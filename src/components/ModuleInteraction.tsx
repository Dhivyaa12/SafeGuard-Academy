'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Award, CheckCircle, Download, XCircle, BookOpen, Video, Star } from 'lucide-react';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

type Quiz = {
    question: string;
    options: string[];
    answer: string;
};

type Lesson = {
    title: string;
    content: string;
};

type YoutubeVideo = {
    videoId: string;
    title: string;
    channel: string;
}

type Props = {
    lessons: Lesson[];
    quiz: Quiz[];
    moduleTitle: string;
    youtubeVideos: YoutubeVideo[];
};

export function ModuleInteraction({ lessons, quiz, moduleTitle, youtubeVideos }: Props) {
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
        <Tabs defaultValue="lessons" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-card p-1 h-auto">
                <TabsTrigger value="lessons" className="py-2 text-base"><BookOpen className="mr-2" />Lessons</TabsTrigger>
                <TabsTrigger value="videos" className="py-2 text-base"><Video className="mr-2" />Videos</TabsTrigger>
                <TabsTrigger value="assessment" className="py-2 text-base"><Star className="mr-2" />Assessment</TabsTrigger>
            </TabsList>
            
            <TabsContent value="lessons">
                <Card>
                    <CardHeader>
                        <CardTitle>Lessons</CardTitle>
                        <CardDescription>Review these lessons before taking the quiz.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
                            {lessons.map((lesson, index) => (
                                <AccordionItem value={`item-${index}`} key={lesson.title}>
                                    <AccordionTrigger className="text-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-primary/10 text-primary p-2 rounded-full">
                                                <BookOpen className="w-5 h-5"/>
                                            </div>
                                            <span>{lesson.title}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="px-4 pb-4 text-muted-foreground text-base">
                                            {lesson.content}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>

                 <Card className="mt-6">
                    <CardHeader>
                        <CardTitle>AR Fire Simulation</CardTitle>
                        <CardDescription>Experience a real-life fire scenario in augmented reality.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="relative aspect-video rounded-lg overflow-hidden border-4 border-primary/20 shadow-lg">
                            <Image src="https://picsum.photos/seed/arsim/800/450" alt="AR Simulation" layout="fill" objectFit="cover" data-ai-hint="fire safety simulation" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <Button size="lg" className="text-lg">Start AR Simulation</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="videos">
                <Card>
                    <CardHeader>
                        <CardTitle>Training Videos</CardTitle>
                        <CardDescription>Watch these videos to learn more about {moduleTitle}.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {youtubeVideos && youtubeVideos.length > 0 ? (
                            <Carousel className="w-full max-w-4xl mx-auto">
                                <CarouselContent>
                                    {youtubeVideos.map((video) => (
                                    <CarouselItem key={video.videoId}>
                                        <div className="p-1">
                                            <div className="aspect-video mb-4 rounded-lg overflow-hidden shadow-lg">
                                                <iframe
                                                    className="w-full h-full"
                                                    src={`https://www.youtube.com/embed/${video.videoId}`}
                                                    title={video.title}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                            <h3 className="font-semibold text-lg">{video.title}</h3>
                                            <p className="text-sm text-muted-foreground">{video.channel}</p>
                                        </div>
                                    </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        ) : (
                            <p className="text-muted-foreground text-center">No videos available for this module.</p>
                        )}
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="assessment">
                 <Card>
                    <CardHeader>
                        <CardTitle>Knowledge Assessment</CardTitle>
                        <CardDescription>Test your knowledge to complete the module and earn your certificate.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {quizResult === null && (
                            <form>
                                {quiz.map((q, i) => (
                                    <div key={i} className="mb-6 bg-card p-4 rounded-lg border">
                                        <p className="font-semibold text-lg mb-4">{i + 1}. {q.question}</p>
                                        <RadioGroup onValueChange={(value) => handleAnswerChange(i, value)} className="space-y-2">
                                            {q.options.map((option, j) => (
                                                <div key={j} className="flex items-center space-x-3 p-3 rounded-md hover:bg-secondary/50 transition-colors">
                                                    <RadioGroupItem value={option} id={`q${i}o${j}`} className="h-5 w-5"/>
                                                    <Label htmlFor={`q${i}o${j}`} className="text-base cursor-pointer flex-1">{option}</Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    </div>
                                ))}
                            </form>
                        )}
                        {quizResult === 'passed' && (
                            <div className="text-center p-8 bg-green-100/50 dark:bg-green-900/20 rounded-lg border border-green-500/50">
                                <CheckCircle className="mx-auto h-16 w-16 text-green-600" />
                                <h3 className="text-2xl font-bold mt-4">Congratulations! You Passed!</h3>
                                <p className="text-muted-foreground mt-2 text-lg">You have successfully completed the assessment.</p>
                            </div>
                        )}
                         {quizResult === 'failed' && (
                            <div className="text-center p-8 bg-destructive/10 rounded-lg border border-destructive/50">
                                <XCircle className="mx-auto h-16 w-16 text-destructive" />
                                <h3 className="text-2xl font-bold mt-4">Try Again</h3>
                                <p className="text-muted-foreground mt-2 text-lg">You did not pass. Please review the lessons and try again.</p>
                                <Button onClick={resetQuiz} variant="outline" className="mt-6 text-base px-6 py-3">Try Again</Button>
                            </div>
                        )}
                    </CardContent>
                    {quizResult === null && (
                        <CardFooter>
                            <Button onClick={handleSubmitQuiz} className="w-full text-lg py-6">Submit Quiz</Button>
                        </CardFooter>
                    )}
                </Card>
                
                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle>Certification</CardTitle>
                        <CardDescription>Your reward for mastering this module.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {quizResult === 'passed' ? (
                            <div className="text-center flex flex-col items-center gap-4 p-6">
                                <div className="p-4 bg-yellow-400/20 rounded-full animate-pulse">
                                    <Award className="h-16 w-16 text-yellow-500" />
                                </div>
                                <h3 className="text-2xl font-bold">Certificate of Completion</h3>
                                <p className="text-muted-foreground max-w-md">You have earned a certificate for completing the "{moduleTitle}" module.</p>
                                <Button className="mt-4 text-base px-6 py-3">
                                    <Download className="mr-2 h-5 w-5" />
                                    Download Certificate
                                </Button>
                            </div>
                        ) : (
                             <p className="text-muted-foreground text-center py-10">
                                You must pass the quiz to earn your certificate.
                             </p>
                        )}
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
}

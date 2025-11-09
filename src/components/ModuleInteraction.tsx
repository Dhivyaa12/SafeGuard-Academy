'use client';

import { useState, useRef, useEffect } from 'react';
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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog';
import { Alert, AlertTitle, AlertDescription } from './ui/alert';

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
    const [score, setScore] = useState({ correct: 0, incorrect: 0 });
    const { toast } = useToast();

    const [isARMode, setIsARMode] = useState(false);
    const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const streamRef = useRef<MediaStream | null>(null);


    const startARSimulation = async () => {
        setIsARMode(true);
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
                setHasCameraPermission(true);
                streamRef.current = stream;
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error('Error accessing camera:', error);
                setHasCameraPermission(false);
                toast({
                    variant: 'destructive',
                    title: 'Camera Access Denied',
                    description: 'Please enable camera permissions in your browser settings to use this feature.',
                });
            }
        } else {
            setHasCameraPermission(false);
             toast({
                variant: 'destructive',
                title: 'AR Not Supported',
                description: 'Your browser does not support the necessary features for AR.',
            });
        }
    };

    const stopARSimulation = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
        }
        setIsARMode(false);
        setHasCameraPermission(null);
    };

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

        const incorrectAnswers = quiz.length - correctAnswers;
        setScore({ correct: correctAnswers, incorrect: incorrectAnswers });

        if (correctAnswers >= (quiz.length * 0.8)) {
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
                description: `You got ${correctAnswers} out of ${quiz.length} correct. Please review the material and try again.`,
                variant: "destructive",
            });
        }
    };

    const resetQuiz = () => {
        setAnswers({});
        setQuizResult(null);
        setScore({ correct: 0, incorrect: 0 });
    }
    
    const ResultDisplay = ({ result }: { result: 'passed' | 'failed' }) => {
        const isPassed = result === 'passed';
        const bgColor = isPassed ? 'bg-green-100/50 dark:bg-green-900/20' : 'bg-destructive/10';
        const borderColor = isPassed ? 'border-green-500/50' : 'border-destructive/50';
        const iconColor = isPassed ? 'text-green-600' : 'text-destructive';
        const Icon = isPassed ? CheckCircle : XCircle;
        const title = isPassed ? "Congratulations! You Passed!" : "Try Again";
        const description = isPassed ? "You have successfully completed the assessment." : `You got ${score.correct} out of ${quiz.length} correct. You need to score at least 80% to pass. Please review the material and try again.`;

        return (
             <div className={`text-center p-8 ${bgColor} rounded-lg border ${borderColor}`}>
                <Icon className={`mx-auto h-16 w-16 ${iconColor}`} />
                <h3 className="text-2xl font-bold mt-4">{title}</h3>
                <p className="text-muted-foreground mt-2 text-lg">{description}</p>
                <div className="mt-6 flex justify-center gap-4 text-lg">
                    <div className="bg-green-200/50 text-green-800 dark:bg-green-800/30 dark:text-green-300 font-semibold px-4 py-2 rounded-md">
                        Correct: {score.correct}
                    </div>
                    <div className="bg-red-200/50 text-red-800 dark:bg-red-800/30 dark:text-red-300 font-semibold px-4 py-2 rounded-md">
                        Incorrect: {score.incorrect}
                    </div>
                </div>
                {!isPassed && (
                     <Button onClick={resetQuiz} variant="outline" className="mt-6 text-base px-6 py-3">Try Again</Button>
                )}
            </div>
        );
    };

    return (
        <>
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
                                <Button size="lg" className="text-lg" onClick={startARSimulation}>Start AR Simulation</Button>
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
                        {quizResult && <ResultDisplay result={quizResult} />}
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

        <Dialog open={isARMode} onOpenChange={setIsARMode}>
            <DialogContent className="max-w-3xl h-[80vh] flex flex-col p-0">
                <DialogHeader className="p-4 border-b">
                    <DialogTitle>AR Fire Simulation</DialogTitle>
                </DialogHeader>
                <div className="flex-1 relative bg-black">
                    <video ref={videoRef} className="w-full h-full object-cover" autoPlay playsInline muted />

                    {hasCameraPermission && (
                         <video
                            // Use URL-encoded filename so spaces/commas are served correctly from /public
                            src={encodeURI('/videos/Hailuo_Video_A 60-second video, first-perso_443780512455847936.mp4')}
                            className="absolute bottom-0 right-0 w-1/2"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    )}

                    {hasCameraPermission === false && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                            <Alert variant="destructive" className="max-w-sm">
                                <AlertTitle>Camera Access Denied</AlertTitle>
                                <AlertDescription>
                                    Please enable camera permissions in your browser settings to use the AR simulation. You may need to refresh the page after granting permission.
                                </AlertDescription>
                            </Alert>
                        </div>
                    )}
                    {hasCameraPermission === null && (
                         <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                            <p className="text-white">Requesting camera access...</p>
                         </div>
                    )}
                     <div className="absolute top-4 right-4 z-10">
                         <Button variant="destructive" onClick={stopARSimulation}>Exit AR</Button>
                     </div>
                </div>
            </DialogContent>
        </Dialog>
     </>
    );
}

import { modules } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ModuleInteraction } from '@/components/ModuleInteraction';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

type Props = {
    params: { slug: string };
};

export async function generateStaticParams() {
    return modules.map(module => ({
        slug: module.slug,
    }));
}

export default function ModuleDetailPage({ params }: Props) {
    const module = modules.find(m => m.slug === params.slug);

    if (!module) {
        notFound();
    }

    const Icon = module.icon;
    const youtubeVideos = 'youtubeVideos' in module ? module.youtubeVideos : [];


    return (
        <div className="space-y-6">
            <header className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold font-headline">{module.title}</h1>
                    <p className="text-muted-foreground max-w-2xl">{module.description}</p>
                </div>
            </header>

            {'youtubeVideoId' in module && module.youtubeVideoId && typeof module.youtubeVideoId === 'string' && (
                 <Card>
                    <CardHeader>
                        <CardTitle>Training Video</CardTitle>
                        <CardDescription>Watch this video to learn more about {module.title}.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="aspect-video">
                            <iframe
                                className="w-full h-full rounded-lg"
                                src={`https://www.youtube.com/embed/${module.youtubeVideoId}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </CardContent>
                </Card>
            )}
            
            {youtubeVideos && youtubeVideos.length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle>Training Videos</CardTitle>
                        <CardDescription>Watch these videos to learn more about {module.title}.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Carousel className="w-full max-w-4xl mx-auto">
                            <CarouselContent>
                                {youtubeVideos.map((video) => (
                                <CarouselItem key={video.videoId}>
                                    <div className="p-1">
                                        <div className="aspect-video mb-4">
                                            <iframe
                                                className="w-full h-full rounded-lg"
                                                src={`https://www.youtube.com/embed/${video.videoId}`}
                                                title={video.title}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                        <h3 className="font-semibold">{video.title}</h3>
                                        <p className="text-sm text-muted-foreground">{video.channel}</p>
                                    </div>
                                </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </CardContent>
                </Card>
            )}

            <ModuleInteraction 
                lessons={module.lessons}
                quiz={module.quiz}
                moduleTitle={module.title}
            />
        </div>
    );
}

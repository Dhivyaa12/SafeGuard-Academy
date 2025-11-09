import { modules } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ModuleInteraction } from '@/components/ModuleInteraction';

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
        <div className="space-y-8">
            <header className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-sm">
                <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-10 h-10 text-primary" />
                </div>
                <div>
                    <h1 className="text-4xl font-bold font-headline text-primary">{module.title}</h1>
                    <p className="text-muted-foreground max-w-3xl mt-1 text-lg">{module.description}</p>
                </div>
            </header>

            <ModuleInteraction 
                lessons={module.lessons}
                quiz={module.quiz}
                moduleTitle={module.title}
                youtubeVideos={youtubeVideos}
            />
        </div>
    );
}

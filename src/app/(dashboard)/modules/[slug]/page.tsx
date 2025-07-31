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

            <ModuleInteraction 
                lessons={module.lessons}
                quiz={module.quiz}
                moduleTitle={module.title}
            />
        </div>
    );
}

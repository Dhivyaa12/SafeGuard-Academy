import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { modules } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ModulesPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold font-headline">Training Modules</h1>
        <p className="text-muted-foreground">Select a module to begin your training.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {modules.map((module) => (
          <Card key={module.id} className="flex flex-col">
            <CardHeader className="flex-grow">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <module.icon className="w-10 h-10 text-primary" />
                </div>
              </div>
              <CardTitle className="text-center">{module.title}</CardTitle>
              <CardDescription className="text-center pt-2 line-clamp-3">
                {module.description}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/modules/${module.slug}`}>Start Training <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

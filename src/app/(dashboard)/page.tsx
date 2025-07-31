import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { userProgress, modules } from '@/lib/data';
import { BadgeIcon } from '@/components/icons/BadgeIcon';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold font-headline">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your training overview.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>My Progress</CardTitle>
            <CardDescription>
              You've completed {userProgress.completedModules} of {userProgress.totalModules} modules.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={userProgress.progressPercentage} className="w-full" />
          </CardContent>
          <CardFooter>
            <Link href="/progress" className="text-sm font-medium text-primary hover:underline">
              View Detailed Progress
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>My Badges</CardTitle>
            <CardDescription>Keep up the great work!</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            {userProgress.badges.slice(0, 3).map((badge) => (
              <div key={badge.name} className="flex flex-col items-center text-center gap-1">
                <BadgeIcon className="w-12 h-12 text-yellow-500" />
                <span className="text-xs font-medium">{badge.name}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-bold font-headline mb-4">Available Training Modules</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.slice(0, 3).map((module) => (
            <Card key={module.id}>
              <CardHeader className="flex flex-row items-center gap-4">
                <module.icon className="w-8 h-8 text-primary" />
                <div>
                    <CardTitle>{module.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{module.description}</CardDescription>
                </div>
              </CardHeader>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/modules/${module.slug}`}>Start Training <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center">
            <Button variant="outline" asChild>
                <Link href="/modules">View All Modules</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}

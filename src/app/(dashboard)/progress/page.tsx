import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { userProgress } from '@/lib/data';
import { BadgeIcon } from '@/components/icons/BadgeIcon';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { CheckCircle } from 'lucide-react';

export default function ProgressPage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-3xl font-bold font-headline">My Progress</h1>
                <p className="text-muted-foreground">An overview of your training achievements.</p>
            </header>
            <Card>
                <CardHeader>
                    <CardTitle>Overall Progress</CardTitle>
                    <CardDescription>You've completed {userProgress.completedModules} of {userProgress.totalModules} total modules.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Progress value={userProgress.progressPercentage} className="w-full" />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>My Badges</CardTitle>
                    <CardDescription>Recognitions for your hard work and dedication to safety.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {userProgress.badges.map((badge) => (
                            <div key={badge.name} className="flex flex-col items-center text-center gap-2 p-4 border rounded-lg bg-secondary/50">
                                <BadgeIcon className="w-16 h-16 text-yellow-500" />
                                <span className="font-semibold text-sm">{badge.name}</span>
                                <span className="text-xs text-muted-foreground">Earned: {badge.date}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>My Certificates</CardTitle>
                    <CardDescription>Official certifications for completed training modules.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Module</TableHead>
                                <TableHead>Completion Date</TableHead>
                                <TableHead className="text-right">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {userProgress.certificates.map((cert) => (
                                <TableRow key={cert.module}>
                                    <TableCell className="font-medium">{cert.module}</TableCell>
                                    <TableCell>{cert.date}</TableCell>
                                    <TableCell className="text-right">
                                        <span className="flex items-center justify-end text-green-600">
                                            <CheckCircle className="mr-2 h-4 w-4" />
                                            Completed
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}

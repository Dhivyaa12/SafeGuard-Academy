import { Award, BookOpen, Bot, Flame, Users, Zap } from 'lucide-react';
import { FireExtinguisherIcon } from '@/components/icons/FireExtinguisherIcon';

export const modules = [
  {
    id: 1,
    slug: 'kitchen-fire-safety',
    title: 'Kitchen Fire Safety',
    description: 'Essential protocols for preventing and managing fires in a hotel kitchen environment.',
    icon: Flame,
    lessons: [
      { title: 'Understanding Grease Fires', duration: '5 min' },
      { title: 'Kitchen Fire Suppression Systems', duration: '8 min' },
      { title: 'Safe Appliance Handling', duration: '7 min' },
    ],
    quiz: [
      {
        question: 'What is the first step in case of a grease fire?',
        options: ['Pour water on it', 'Cover with a metal lid', 'Use a fire blanket', 'Fan the flames'],
        answer: 'Cover with a metal lid',
      },
      {
        question: 'How often should kitchen fire suppression systems be inspected?',
        options: ['Annually', 'Semi-annually', 'Monthly', 'Every 2 years'],
        answer: 'Semi-annually',
      },
    ],
  },
  {
    id: 2,
    slug: 'handling-electrical-fires',
    title: 'Handling Electrical Fires',
    description: 'Learn to identify electrical hazards and respond correctly to electrical fires.',
    icon: Zap,
    lessons: [
      { title: 'Common Electrical Hazards', duration: '6 min' },
      { title: 'Using a Class C Extinguisher', duration: '5 min' },
      { title: 'Emergency Power-off Procedures', duration: '4 min' },
    ],
    quiz: [
        {
          question: 'Which class of fire extinguisher is suitable for electrical fires?',
          options: ['Class A', 'Class B', 'Class C', 'Class D'],
          answer: 'Class C',
        },
    ],
  },
  {
    id: 3,
    slug: 'guest-evacuation-procedures',
    title: 'Guest Evacuation Procedures',
    description: 'Master the procedures for safely evacuating guests during a fire emergency.',
    icon: Users,
    lessons: [
      { title: 'Communicating with Guests', duration: '10 min' },
      { title: 'Assisting Guests with Disabilities', duration: '12 min' },
      { title: 'Assembly Point Management', duration: '8 min' },
    ],
    quiz: [
        {
          question: 'Where is the primary assembly point located?',
          options: ['Hotel Lobby', 'East Parking Lot', 'Rooftop', 'Basement'],
          answer: 'East Parking Lot',
        },
    ],
  },
  {
    id: 4,
    slug: 'using-fire-extinguishers',
    title: 'Using Fire Extinguishers',
    description: 'A practical guide to the different types of fire extinguishers and their use.',
    icon: FireExtinguisherIcon,
    lessons: [
      { title: 'Types of Extinguishers (A, B, C, D, K)', duration: '10 min' },
      { title: 'The P.A.S.S. Technique', duration: '5 min' },
      { title: 'Hands-on AR Simulation', duration: '15 min' },
    ],
    quiz: [
        {
          question: 'What does "P" in the P.A.S.S. technique stand for?',
          options: ['Pull', 'Push', 'Press', 'Point'],
          answer: 'Pull',
        },
    ],
  },
];

export const userProgress = {
  completedModules: 2,
  totalModules: modules.length,
  progressPercentage: (2 / modules.length) * 100,
  badges: [
    { name: 'Safety Starter', icon: Award, date: 'May 2024' },
    { name: 'Kitchen Guardian', icon: Flame, date: 'May 2024' },
  ],
  certificates: [
    { module: 'Kitchen Fire Safety', date: 'May 15, 2024' },
    { module: 'Handling Electrical Fires', date: 'May 20, 2024' },
  ],
};

export const navItems = [
    { href: '/', icon: BookOpen, label: 'Training Modules' },
    { href: '/progress', icon: Award, label: 'My Progress' },
    { href: '/recommendations', icon: Bot, label: 'AI Recommendations' },
    { href: '/chat', icon: Bot, label: 'AI Chat Coach' },
];

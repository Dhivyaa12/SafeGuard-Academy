import { Award, BookOpen, Bot, Flame, Users, Zap } from 'lucide-react';
import { FireExtinguisherIcon } from '@/components/icons/FireExtinguisherIcon';

export const modules = [
  {
    id: 1,
    slug: 'kitchen-fire-safety',
    title: 'Kitchen Fire Safety',
    description: 'Essential protocols for preventing and managing fires in a hotel kitchen environment.',
    icon: Flame,
    youtubeVideos: [
        { title: 'VR Fire Trainer: Kitchen Scenario', channel: 'Vobling', videoId: 'o1GnqWJLr5c' },
        { title: 'VCFD Kitchen Fire Safety', channel: 'Ventura County Fire Department', videoId: 'rgr7UOYn1S8' },
        { title: 'Kitchen Grease Fire Safety', channel: 'PBC Fire Rescue', videoId: 'PoGkFxtV9Uw' },
        { title: 'Kitchen Fire Safety', channel: 'Fire and Rescue NSW', videoId: 'kj6mMtni3H8' },
        { title: 'Household fire fighting training', channel: 'Industrial Skills', videoId: 'L_WRmhPU1KM' },
    ],
    lessons: [
      { 
        title: 'Understanding Grease Fires',
        content: 'Grease fires are extremely dangerous and can spread quickly. They happen when cooking oils or fats get too hot and ignite. Never use water to put out a grease fire, as it can cause the fire to splash and spread. The best way to handle a small grease fire is to turn off the heat source and cover the pan with a metal lid or a damp cloth to smother the flames by cutting off oxygen.'
      },
      { 
        title: 'Kitchen Fire Suppression Systems',
        content: 'Commercial kitchens are equipped with automatic fire suppression systems, usually located in the range hood. These systems are designed to detect fires and automatically release wet chemicals to extinguish them. It is crucial to ensure these systems are inspected and maintained regularly (typically semi-annually) by certified professionals to ensure they function correctly in an emergency.'
      },
      { 
        title: 'Safe Appliance Handling',
        content: 'Proper use and maintenance of kitchen appliances are key to fire prevention. Always keep appliances clean and free of grease buildup. Ensure electrical cords are not frayed or damaged. Never leave active cooking unattended, and make sure all appliances are turned off at the end of a shift. Faulty equipment should be reported and taken out of service immediately.'
      },
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
      { title: 'Common Electrical Hazards', content: 'Identifying common electrical hazards is the first step in prevention. This includes overloaded outlets, frayed or damaged cords, improper use of extension cords, and placing combustibles near heat-generating appliances. Regular visual inspections of electrical equipment can prevent many fires before they start.' },
      { title: 'Using a Class C Extinguisher', content: 'Electrical fires require a Class C fire extinguisher. These extinguishers use non-conductive agents like carbon dioxide or dry chemical powders that won\'t create a shock hazard. Never use water (Class A) or other conductive agents on a live electrical fire.' },
      { title: 'Emergency Power-off Procedures', content: 'If it\'s safe to do so, the first step in fighting an electrical fire is to de-energize the equipment by unplugging it or shutting off the power at the circuit breaker. This removes the electrical current as a source of ignition and may extinguish the fire on its own. It also makes it safer to use other types of extinguishers if necessary.' },
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
      { title: 'Communicating with Guests', content: 'Clear, calm, and authoritative communication is vital during an evacuation. Use the PA system, go door-to-door, and give concise instructions. Direct guests to the nearest safe exit and assembly point. Avoid causing panic.' },
      { title: 'Assisting Guests with Disabilities', content: 'It is a priority to have a plan for guests who may need extra help, such as the elderly, or those with mobility, hearing, or vision impairments. Staff should be trained on how to assist them, which may involve using evacuation chairs or directing them to areas of refuge until emergency services arrive. Never use elevators during a fire.' },
      { title: 'Assembly Point Management', content: 'Once guests are evacuated, they must gather at a designated assembly point a safe distance from the building. Staff should take a head count if possible, keep guests calm, provide information, and prevent them from re-entering the building until it is declared safe by the fire department.' },
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
      { title: 'Types of Extinguishers (A, B, C, D, K)', content: 'Class A is for combustibles like wood/paper. Class B for flammable liquids like grease/gasoline. Class C for electrical fires. Class D for combustible metals. Class K for commercial kitchen cooking oils. Most hotels use multi-purpose ABC extinguishers.' },
      { title: 'The P.A.S.S. Technique', content: 'P.A.S.S. is an acronym for using an extinguisher: PULL the pin. AIM the nozzle at the base of the fire. SQUEEZE the lever slowly and evenly. SWEEP the nozzle from side-to-side.' },
      { title: 'Hands-on AR Simulation', content: 'Use our Augmented Reality feature to practice the P.A.S.S. technique on a simulated fire. This provides a safe, interactive way to build muscle memory and confidence without the danger of a real fire.' },
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

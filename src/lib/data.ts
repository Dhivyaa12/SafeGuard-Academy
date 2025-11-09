
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
        question: 'What is the first step you should take if you see a small grease fire in a pan?',
        options: ['Pour water on it', 'Turn off the heat source', 'Get a fire extinguisher immediately', 'Fan the flames to blow it out'],
        answer: 'Turn off the heat source',
      },
      {
        question: 'What should you NEVER use to extinguish a grease fire?',
        options: ['A metal lid', 'Baking soda', 'Water', 'A damp cloth'],
        answer: 'Water',
      },
      {
        question: 'How do you smother a small pan fire?',
        options: ['Cover it with a metal lid', 'Use a fan', 'Throw flour on it', 'Let it burn out'],
        answer: 'Cover it with a metal lid',
      },
      {
        question: 'How often should a commercial kitchen\'s fire suppression system be inspected?',
        options: ['Every month', 'Every two years', 'Annually', 'Semi-annually'],
        answer: 'Semi-annually',
      },
      {
        question: 'What is a key practice for safe appliance handling to prevent fires?',
        options: ['Using multiple extension cords', 'Keeping appliances free of grease buildup', 'Leaving appliances on overnight', 'Ignoring frayed cords'],
        answer: 'Keeping appliances free of grease buildup',
      },
      {
        question: 'What should you do if you discover a piece of kitchen equipment is faulty?',
        options: ['Try to fix it yourself', 'Keep using it carefully', 'Report it and take it out of service', 'Ask a coworker what to do'],
        answer: 'Report it and take it out of service',
      },
      {
        question: 'Where are automatic fire suppression systems typically located in a kitchen?',
        options: ['Under the sink', 'In the range hood', 'On the ceiling', 'Next to the exit'],
        answer: 'In the range hood',
      },
      {
        question: 'What is the danger of using water on a grease fire?',
        options: ['It can cause the fire to splash and spread', 'It will create a lot of smoke', 'It won\'t do anything', 'It will damage the pan'],
        answer: 'It can cause the fire to splash and spread',
      },
      {
        question: 'Which action is crucial at the end of a shift to ensure kitchen safety?',
        options: ['Leave the fryers on for the next shift', 'Make sure all cooking appliances are turned off', 'Stack oily rags on the counter', 'Clean the floors with a flammable liquid'],
        answer: 'Make sure all cooking appliances are turned off',
      },
      {
        question: 'What type of fire extinguisher is specifically designed for commercial kitchen grease fires (cooking oils)?',
        options: ['Class A', 'Class B', 'Class C', 'Class K'],
        answer: 'Class K',
      },
    ],
  },
  {
    id: 2,
    slug: 'handling-electrical-fires',
    title: 'Handling Electrical Fires',
    description: 'Learn to identify electrical hazards and respond correctly to electrical fires.',
    icon: Zap,
    youtubeVideos: [
        { title: '5 steps to put out an electrical fire', channel: 'FireRescue1', videoId: 'b-kYm1Yiazw' },
        { title: 'Home Safety Tips : How to Put Out an Electrical Fire', channel: 'homesteady', videoId: 'YUkUJOJDo4c' },
        { title: 'How to Handle an Electrical Fire at Home', channel: 'OXY TV', videoId: 'ASqKEaY8Ey0' },
        { title: 'How To Put Out Electrical Fire (from wikiHow)', channel: 'wikiHow', videoId: '2m0ZAdp-FqQ' },
        { title: 'What Causes Electrical Fires? | Electrical Fire Safety', channel: 'Schneider Electric', videoId: 'kuDfDWUrEus' },
    ],
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
      {
        question: 'What is the very first step you should take when you encounter an electrical fire, if it is safe to do so?',
        options: ['Throw water on it', 'De-energize the equipment', 'Find a Class A extinguisher', 'Cover it with a blanket'],
        answer: 'De-energize the equipment',
      },
      {
        question: 'Why should you not use a water-based extinguisher (Class A) on an electrical fire?',
        options: ['It will make the fire bigger', 'It can create a shock hazard', 'It is not effective', 'It will damage the equipment'],
        answer: 'It can create a shock hazard',
      },
      {
        question: 'What does a "frayed" electrical cord mean?',
        options: ['The cord is brand new', 'The cord\'s insulation is worn or broken', 'The cord is very long', 'The cord is the wrong color'],
        answer: 'The cord\'s insulation is worn or broken',
      },
      {
        question: 'Which of the following is a sign of an overloaded outlet?',
        options: ['A burning smell', 'The outlet is cool to the touch', 'Only one device is plugged in', 'The lights are very bright'],
        answer: 'A burning smell',
      },
      {
        question: 'What is the purpose of a circuit breaker?',
        options: ['To start a fire', 'To automatically shut off power in case of an overload', 'To make electricity flow faster', 'To change the voltage'],
        answer: 'To automatically shut off power in case of an overload',
      },
      {
        question: 'Carbon Dioxide (CO2) extinguishers are effective on which types of fires?',
        options: ['Class A and B', 'Class B and C', 'Class A and C', 'Class D'],
        answer: 'Class B and C',
      },
      {
        question: 'What is a "daisy chain" of extension cords?',
        options: ['A decorative chain of lights', 'Plugging multiple extension cords into each other', 'A special type of fire-safe cord', 'A way to organize cords'],
        answer: 'Plugging multiple extension cords into each other',
      },
      {
        question: 'After de-energizing the equipment, an electrical fire is now considered what class of fire?',
        options: ['It remains a Class C fire', 'It becomes a Class A or B fire', 'It becomes a Class D fire', 'The fire is always out'],
        answer: 'It becomes a Class A or B fire',
      },
      {
        question: 'Where should combustible materials NOT be placed?',
        options: ['In a storage closet', 'Near heat-generating appliances', 'In a metal cabinet', 'Outside the building'],
        answer: 'Near heat-generating appliances',
      },
    ],
  },
  {
    id: 3,
    slug: 'guest-evacuation-procedures',
    title: 'Guest Evacuation Procedures',
    description: 'Master the procedures for safely evacuating guests during a fire emergency.',
    icon: Users,
    youtubeVideos: [
        { title: 'Fire Safety In Hotels', channel: 'Marsden Fire Safety', videoId: '07r1t1Sz9OI' },
        { title: 'Hotel Emergency Evacuation [Training Video]', channel: 'MM', videoId: 'TvVU7AJXYzQ' },
        { title: 'Emergency Evacuation – Know the Plan', channel: 'SafetyVideos.com', videoId: 'm5hRU9b2AZo' },
        { title: 'TIME hotels releases sign language fire safety video', channel: 'HotelierMiddleEast', videoId: 'V8O_NEcV8Ho' },
        { title: 'Fire Safety in Hotels', channel: 'Siemens Knowledge Hub', videoId: 'rFu-XHXzBF8' },
        { title: 'How to Safely Navigate Hotel Fire Exits in Emergencies', channel: 'CERT - Community Emergency Response Team', videoId: '--TI98SMcYI' },
    ],
    lessons: [
      { title: 'Communicating with Guests', content: 'Clear, calm, and authoritative communication is vital during an evacuation. Use the PA system, go door-to-door, and give concise instructions. Direct guests to the nearest safe exit and assembly point. Avoid causing panic.' },
      { title: 'Assisting Guests with Disabilities', content: 'It is a priority to have a plan for guests who may need extra help, such as the elderly, or those with mobility, hearing, or vision impairments. Staff should be trained on how to assist them, which may involve using evacuation chairs or directing them to areas of refuge until emergency services arrive. Never use elevators during a fire.' },
      { title: 'Assembly Point Management', content: 'Once guests are evacuated, they must gather at a designated assembly point a safe distance from the building. Staff should take a head count if possible, keep guests calm, provide information, and prevent them from re-entering the building until it is declared safe by the fire department.' },
    ],
    quiz: [
      {
        question: 'What is the most important aspect of communication during an evacuation?',
        options: ['Speaking loudly', 'Being clear, calm, and authoritative', 'Using complex terms', 'Waiting for instructions'],
        answer: 'Being clear, calm, and authoritative',
      },
      {
        question: 'What should you never use during a fire evacuation?',
        options: ['Stairs', 'Fire exits', 'Elevators', 'Hallways'],
        answer: 'Elevators',
      },
      {
        question: 'What is a primary responsibility of staff at the assembly point?',
        options: ['Allowing guests to go back for belongings', 'Taking a head count, if possible', 'Serving refreshments', 'Dismissing everyone immediately'],
        answer: 'Taking a head count, if possible',
      },
      {
        question: 'How should staff assist guests with mobility issues?',
        options: ['Tell them to wait for the elevator', 'Leave them in their rooms', 'Use evacuation chairs or guide them to areas of refuge', 'Carry them down the stairs without equipment'],
        answer: 'Use evacuation chairs or guide them to areas of refuge',
      },
      {
        question: 'When is it safe for guests and staff to re-enter the building?',
        options: ['When the alarm stops', 'After 10 minutes', 'When a staff member says it\'s okay', 'Only when the fire department gives the all-clear'],
        answer: 'Only when the fire department gives the all-clear',
      },
      {
        question: 'What is the main goal of an evacuation?',
        options: ['To save hotel property', 'To get everyone out of the building safely', 'To find the source of the fire', 'To call the media'],
        answer: 'To get everyone out of the building safely',
      },
      {
        question: 'What does an "area of refuge" provide?',
        options: ['A place to hide from the fire', 'A temporary safe space for people who cannot use stairs', 'The main assembly point', 'A storage area for fire equipment'],
        answer: 'A temporary safe space for people who cannot use stairs',
      },
      {
        question: 'If you are going door-to-door to evacuate rooms, and a door is hot, what should you do?',
        options: ['Open it quickly to check inside', 'Break down the door', 'Do not open it, and report the room number to the fire department', 'Ignore it and move to the next room'],
        answer: 'Do not open it, and report the room number to the fire department',
      },
      {
        question: 'What should be the tone of your voice when giving instructions?',
        options: ['Panicked and rushed', 'Quiet and uncertain', 'Calm and authoritative', 'Angry and demanding'],
        answer: 'Calm and authoritative',
      },
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
        {
          question: 'What does the "A" in P.A.S.S. stand for?',
          options: ['Activate', 'Aim', 'Alert', 'Assess'],
          answer: 'Aim',
        },
        {
            question: 'What does the first "S" in P.A.S.S. stand for?',
            options: ['Spray', 'Squeeze', 'Shout', 'Stop'],
            answer: 'Squeeze',
        },
        {
            question: 'What does the second "S" in P.A.S.S. stand for?',
            options: ['Sweep', 'Side-step', 'Spray', 'Secure'],
            answer: 'Sweep',
        },
        {
            question: 'Where should you aim the fire extinguisher nozzle?',
            options: ['At the top of the flames', 'At the middle of the flames', 'At the base of the fire', 'At the smoke'],
            answer: 'At the base of the fire',
        },
        {
            question: 'What type of fire is a Class A fire?',
            options: ['Flammable liquids', 'Electrical equipment', 'Combustible metals', 'Ordinary combustibles (wood, paper)'],
            answer: 'Ordinary combustibles (wood, paper)',
        },
        {
            question: 'Which fire extinguisher class should be used on a fire involving cooking oils in a commercial kitchen?',
            options: ['Class A', 'Class B', 'Class C', 'Class K'],
            answer: 'Class K',
        },
        {
            question: 'A fire involving gasoline would be classified as which type of fire?',
            options: ['Class A', 'Class B', 'Class C', 'Class D'],
            answer: 'Class B',
        },
        {
            question: 'What is a multi-purpose "ABC" fire extinguisher NOT rated for?',
            options: ['Wood fires', 'Gasoline fires', 'Electrical fires', 'Combustible metal fires'],
            answer: 'Combustible metal fires',
        },
        {
            question: 'How should you approach a fire with an extinguisher?',
            options: ['With your back to an exit', 'Quickly, running towards it', 'From a safe distance, with a clear exit behind you', 'As close as possible'],
            answer: 'From a safe distance, with a clear exit behind you',
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

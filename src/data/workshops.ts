export interface Workshop {
  id: string;
  title: string;
  description: string;
  image: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  price: number;
  date: string;
  location: string;
  spots: number;
}

export const workshops: Workshop[] = [
  {
    id: '1',
    title: 'Macramé Plant Hanger Basics',
    description: 'Learn the fundamental knots and create your first beautiful plant hanger to take home.',
    image: '/placeholder-workshop-1.jpg',
    difficulty: 'Beginner',
    duration: '3 hours',
    price: 75,
    date: 'Every Saturday',
    location: 'Downtown Studio',
    spots: 8,
  },
  {
    id: '2',
    title: 'Advanced Wall Hanging Workshop',
    description: 'Master complex patterns and create a stunning large-scale wall hanging piece.',
    image: '/placeholder-workshop-2.jpg',
    difficulty: 'Advanced',
    duration: '5 hours',
    price: 125,
    date: 'Monthly',
    location: 'Downtown Studio',
    spots: 6,
  },
  {
    id: '3',
    title: 'Boho Dream Catcher',
    description: 'Craft a beautiful dream catcher using traditional and modern macramé techniques.',
    image: '/placeholder-workshop-3.jpg',
    difficulty: 'Beginner',
    duration: '2.5 hours',
    price: 65,
    date: 'Bi-weekly',
    location: 'Downtown Studio',
    spots: 10,
  },
  {
    id: '4',
    title: 'Macramé Home Decor Collection',
    description: 'Create multiple small pieces - coasters, bookmarks, and mini wall hangings.',
    image: '/placeholder-workshop-4.jpg',
    difficulty: 'Intermediate',
    duration: '4 hours',
    price: 95,
    date: 'Every Sunday',
    location: 'Downtown Studio',
    spots: 8,
  },
  {
    id: '5',
    title: 'Natural Dye & Macramé',
    description: 'Learn to naturally dye your own cotton rope and create a custom colored piece.',
    image: '/placeholder-workshop-5.jpg',
    difficulty: 'Intermediate',
    duration: '6 hours',
    price: 140,
    date: 'Once per month',
    location: 'Downtown Studio',
    spots: 6,
  },
  {
    id: '6',
    title: 'Kids Macramé Fun',
    description: 'A fun introduction to macramé for children ages 8-14. Create keychains and bracelets.',
    image: '/placeholder-workshop-6.jpg',
    difficulty: 'Beginner',
    duration: '2 hours',
    price: 45,
    date: 'Saturday afternoons',
    location: 'Downtown Studio',
    spots: 12,
  },
];

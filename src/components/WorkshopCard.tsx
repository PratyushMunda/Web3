import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { Workshop } from '@/data/workshops';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface WorkshopCardProps {
  workshop: Workshop;
  index?: number;
}

const WorkshopCard = ({ workshop, index = 0 }: WorkshopCardProps) => {
  const difficultyColors = {
    Beginner: 'bg-secondary/20 text-secondary-foreground',
    Intermediate: 'bg-primary/20 text-primary',
    Advanced: 'bg-destructive/20 text-destructive',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="relative h-64 overflow-hidden bg-muted">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Workshop Image</span>
        </div>
        <Badge className={`absolute top-4 right-4 ${difficultyColors[workshop.difficulty]}`}>
          {workshop.difficulty}
        </Badge>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors">
          {workshop.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{workshop.description}</p>

        <div className="space-y-2 mb-6 text-sm">
          <div className="flex items-center text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{workshop.date}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Clock className="mr-2 h-4 w-4" />
            <span>{workshop.duration}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4" />
            <span>{workshop.location}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Users className="mr-2 h-4 w-4" />
            <span>{workshop.spots} spots available</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold text-primary">${workshop.price}</span>
          <Button className="btn-primary">Book Now</Button>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkshopCard;

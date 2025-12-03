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
  const CatergoryColors = {
    Decor: 'bg-secondary/20 text-secondary-foreground',
    Lamps: 'bg-primary/20 text-primary',
    Accesories: 'bg-destructive/20 text-destructive',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col"
    >
      <div className="relative h-[450px] overflow-hidden bg-muted">
        <img src={workshop.image} alt={workshop.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <Badge className={`absolute top-4 right-4 ${CatergoryColors[workshop.Category]}`}>
          {workshop.Category}
        </Badge>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors">
          {workshop.title}
        </h3>
        <p className="text-sm text-muted-foreground font-medium mb-2">Article Number: <span className="font-mono text-primary">{workshop.articleNo}</span></p>
        <p className="text-muted-foreground mb-4 line-clamp-2">{workshop.description}</p>



        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-semibold text-primary">₹{workshop.price}</span>
          <Button className="btn-primary">Order Now</Button>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkshopCard;

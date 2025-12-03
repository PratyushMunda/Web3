import { useState } from 'react';
import { motion } from 'framer-motion';
import WorkshopCard from '@/components/WorkshopCard';
import { workshops } from '@/data/workshops';
import { Button } from '@/components/ui/button';

const Workshops = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  const Catergories = ['All', 'Decor', 'Lamps', 'Accesories'];

  const filteredWorkshops =
    selectedDifficulty === 'All'
      ? workshops
      : workshops.filter((w) => w.Category === selectedDifficulty);

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-4"
          >
            Collections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Elevate your space with pieces crafted to bring warmth, character, and artistry into every corner of your home
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            <span className="text-lg font-medium mr-2">Filter by type:</span>
            {Catergories.map((difficulty) => (
              <Button
                key={difficulty}
                variant={selectedDifficulty === difficulty ? 'default' : 'outline'}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={
                  selectedDifficulty === difficulty
                    ? 'btn-primary'
                    : 'btn-outline'
                }
              >
                {difficulty}
              </Button>
            ))}
          </motion.div>

          {/* Workshop Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorkshops.map((workshop, index) => (
              <WorkshopCard key={workshop.id} workshop={workshop} index={index} />
            ))}
          </div>

          {filteredWorkshops.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No workshops found for this difficulty level.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Workshops;

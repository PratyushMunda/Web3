import { motion } from 'framer-motion';
import { Heart, Leaf, Users as UsersIcon } from 'lucide-react';
import workshopHandsImage from '@/assets/img/aboutUsIMG1.png';
import workshopGroupImage from '@/assets/workshop-group.jpg';

const About = () => {
  const team = [
    {
      name: 'Diksha Chandrakar',
      role: 'Founder & Lead Instructor',
      bio: 'Discovered macramé in Morocco and turned passion into purpose. Diksha believes in the meditative power of knotwork.',
    },
    {
      name: 'Diksha Chandrakar',
      role: 'Founder & Lead Instructor',
      bio: 'Ensures all our materials are ethically sourced and eco-friendly. Sophia champions natural fibers and sustainable practices.',
    },
    {
      name: 'Diksha Chandrakar',
      role: 'Founder & Lead Instructor',
      bio: 'Handles scheduling and welcomes newcomers with patience and enthusiasm. Jake has taught over 500 students.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-secondary/30 to-primary/30">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Where craft meets community
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Doodle with Threads brings you an exclusive range of handcrafted home décor items, 
                  proudly created by skilled women artisans.
                </p>
                <p>
                  Through our work, we empower women by providing them with opportunities to showcase 
                  their craftsmanship, preservetraditional weaving techniques, and achieve financial
                  independence.
                </p>
                <p>
                  Your space is unique, and your décor should reflect that. Our bespoke designs allow 
                  you to personalize every detail, from colors and patterns to sizes, ensuring that each
                  piece aligns perfectly withyour aesthetic vision.
                </p>
                <p>

                  Our bespoke creations allow you to personalize colors, patterns, and sizes, ensuring that 
                  each piece seamlessly integrates into your aesthetic vision.
                </p>

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={workshopHandsImage}
                alt="Hands working on macramé"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>



      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Meet the Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The makers behind the magic
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-card p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-serif">{member.name[0]}</span>
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Image */}
      <section className="section-padding bg-accent/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={workshopGroupImage}
              alt="Workshop group session"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-3xl font-serif font-semibold mb-2">Visit Our Studio</h3>
                <p className="text-lg text-white/90">
                  Stop by any weekday afternoon for a tour and to see our creative space in action
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

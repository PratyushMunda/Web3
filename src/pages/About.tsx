import { motion } from 'framer-motion';
import { Heart, Leaf, Users as UsersIcon } from 'lucide-react';
import workshopHandsImage from '@/assets/workshop-hands.jpg';
import workshopGroupImage from '@/assets/workshop-group.jpg';

const About = () => {
  const team = [
    {
      name: 'Emma Craft',
      role: 'Founder & Lead Instructor',
      bio: 'Discovered macramé in Morocco and turned passion into purpose. Emma believes in the meditative power of knotwork.',
    },
    {
      name: 'Sophia Green',
      role: 'Sustainability Coordinator',
      bio: 'Ensures all our materials are ethically sourced and eco-friendly. Sophia champions natural fibers and sustainable practices.',
    },
    {
      name: 'Jake Rivers',
      role: 'Workshop Coordinator',
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
                  Knots & Loom Studio was born from a simple love of fiber art and a desire to create
                  community around the craft. Founded in 2021 by Emma Craft, our studio has grown from
                  a small workshop space into a thriving creative hub.
                </p>
                <p>
                  We believe that macramé is more than just a craft—it's a meditative practice, a form
                  of self-expression, and a way to connect with others who share a passion for
                  handmade beauty.
                </p>
                <p>
                  Every day, we welcome beginners taking their first steps into fiber art and
                  experienced makers pushing the boundaries of what's possible with knots and cord.
                  Our mission is to keep this ancient art form alive while making it accessible and
                  relevant for modern creators.
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

      {/* Philosophy Section */}
      <section className="section-padding bg-accent/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Our Philosophy</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The values that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Quality Over Quantity',
                description:
                  'We focus on teaching proper techniques and using premium natural materials. Every piece should be made with care and intention.',
              },
              {
                icon: Leaf,
                title: 'Sustainable Practice',
                description:
                  'We exclusively use natural, biodegradable fibers and encourage mindful consumption. Our craft honors both tradition and the environment.',
              },
              {
                icon: UsersIcon,
                title: 'Inclusive Community',
                description:
                  'Everyone is welcome here, regardless of skill level or background. We foster a supportive environment where creativity thrives.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-card p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
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

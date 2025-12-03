import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Leaf, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import WorkshopCard from '@/components/WorkshopCard';
import BlogCard from '@/components/BlogCard';
import { workshops } from '@/data/workshops';
import { blogPosts } from '@/data/blogPosts';
import heroImage from '@/assets/Pasted image.png';

const Home = () => {
  const featuredWorkshops = workshops.slice(0, 3);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-end justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black" />
        </div>

        <div className="relative z-10 container-custom text-center pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif font-light text-corn-silk mb-6 mt-16"
          >
            FEEL THE MAGIC OF HAND WOVEN CREATIVITY


          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >

          </motion.div>
        </div>
      </section>

      {/* Featured Workshops */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Our Collection</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Elevate your space with pieces crafted to bring warmth, character, and artistry into every corner of your home
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredWorkshops.map((workshop, index) => (
              <WorkshopCard key={workshop.id} workshop={workshop} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/workshops">
              <Button size="lg" variant="outline" className="btn-outline group">
                View All Collections
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-accent/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">What makes our pieces special</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Handwoven with love',
                description: 'Each lamp is crafted using traditional weaving techniques, ensuring durability and beauty',
              },
              {
                icon: Sparkles,
                title: 'Custom Creations',
                description: 'Tailor your lamp to match your vision, down to the finest details.',
              },
              {
                icon: Leaf,
                title: 'Sustainable',
                description: 'We use eco-friendly materials to promote sustainable living',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-card p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Quote */}
      <section className="section-padding bg-primary/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <blockquote className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-6 leading-relaxed">
              In every knot, there is intention. In every piece, there is soul. Macramé is not just about creating beauty its about weaving moments of mindfulness into our busy lives.
            </blockquote>
            <p className="text-lg text-muted-foreground">— Diksha Chandrakar, Founder</p>
          </motion.div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Recent Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tips, inspiration, and insights from our creative community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {recentPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/blog">
              <Button size="lg" variant="outline" className="btn-outline group">
                View All Posts
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-secondary/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Stay Connected</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our newsletter for store updates, creative tips, and exclusive offers
            </p>

            <form
              className="flex flex-col sm:flex-row gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks for subscribing! (This is a demo)');
              }}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 text-base"
                required
              />
              <Button type="submit" size="lg" className="btn-primary px-8">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

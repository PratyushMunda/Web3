import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Users, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import WorkshopCard from '@/components/WorkshopCard';
import BlogCard from '@/components/BlogCard';
import { workshops } from '@/data/workshops';
import { blogPosts } from '@/data/blogPosts';
import heroImage from '@/assets/hero-macrame.jpg';

const Home = () => {
  const featuredWorkshops = workshops.slice(0, 3);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
        </div>

        <div className="relative z-10 container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Knots & Loom Studio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Discover the art of macramé through hands-on workshops and creative community
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/workshops">
              <Button size="lg" className="btn-primary text-lg px-8 py-6">
                Explore Workshops
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="btn-outline text-lg px-8 py-6 bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-foreground">
                Our Story
              </Button>
            </Link>
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
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Our Workshops</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our creative sessions and learn the timeless art of macramé in a welcoming environment
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
                View All Workshops
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
            <p className="text-xl text-muted-foreground">What makes our studio special</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Craftsmanship',
                description: 'We honor traditional techniques while embracing modern creativity, ensuring every piece tells a story.',
              },
              {
                icon: Sparkles,
                title: 'Creativity',
                description: 'Express yourself through fiber art. We believe everyone has a unique creative voice waiting to be discovered.',
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Building connections through craft. Our studio is a welcoming space for makers of all levels.',
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
              "In every knot, there is intention. In every piece, there is soul. Macramé is not just about creating beauty—it's about weaving moments of mindfulness into our busy lives."
            </blockquote>
            <p className="text-lg text-muted-foreground">— Emma Craft, Founder</p>
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
              Join our newsletter for workshop updates, creative tips, and exclusive offers
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

import { motion } from 'framer-motion';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-secondary/20 to-primary/20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-4"
          >
            Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Stories, tutorials, and inspiration from the world of fiber art
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

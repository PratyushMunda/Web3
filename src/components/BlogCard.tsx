import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/data/blogPosts';
import { Badge } from '@/components/ui/badge';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

const BlogCard = ({ post, index = 0 }: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
    >
      <Link to={`/blog/${post.slug}`}>
        <div className="relative h-56 overflow-hidden bg-muted">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/30 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <span className="text-muted-foreground text-sm">Blog Image</span>
          </div>
          <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm">
            {post.category}
          </Badge>
        </div>

        <div className="p-6">
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <Calendar className="mr-2 h-4 w-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>

          <h3 className="text-xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

          <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
            Read more
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;

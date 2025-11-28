import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button className="btn-outline">Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="container-custom">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6 -ml-3 hover:bg-background/50">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-lg leading-relaxed text-foreground">
                {post.content}
              </div>
            </div>
          </motion.article>

          {/* Related Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto mt-16 pt-16 border-t border-border"
          >
            <h2 className="text-3xl font-serif font-semibold mb-8">More from the Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <div className="bg-card p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                      <Badge className="mb-3">{relatedPost.category}</Badge>
                      <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;

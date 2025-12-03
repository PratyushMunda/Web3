import { useState, useEffect } from 'react';
import { NavLink } from '@/components/NavLink';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY + 50) {
        // Add 50px threshold to prevent flickering
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/workshops', label: 'Workshops' },
    { to: '/about', label: 'About' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="container-custom py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex-1 flex justify-center">
          <img src={logo} alt="Doodle" className="h-20 w-auto" />
        </NavLink>

        {/* Menu Button */}
        <button
          className="px-0 py-2 transition-colors"
          style={{ color: '#FFF8DC' }}
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Bottom decorative line */}
      <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #FFF8DC, transparent)' }} />

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-72 bg-background/95 backdrop-blur-sm z-50 shadow-lg"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <span className="font-serif text-lg">Menu</span>
                  <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                    <X size={24} className="text-foreground/80" />
                  </button>
                </div>
                <nav className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      end={link.to === '/'}
                      className="text-lg text-foreground/70 hover:text-foreground transition-colors py-2"
                      activeClassName="text-foreground font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

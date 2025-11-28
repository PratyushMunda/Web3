export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'beginners-guide-to-macrame',
    title: "A Beginner's Guide to Macramé: Getting Started",
    excerpt: 'Everything you need to know to start your macramé journey, from basic knots to essential supplies.',
    content: `
# A Beginner's Guide to Macramé

Macramé is an ancient art form that has seen a beautiful renaissance in modern home décor. If you're new to this craft, you're in for a treat! This guide will walk you through everything you need to start your macramé journey.

## What is Macramé?

Macramé is a form of textile created using knotting techniques rather than weaving or knitting. The word comes from the Arabic word "migramah," which means "fringe."

## Essential Supplies

To get started with macramé, you'll need:
- **Cotton cord or rope** (3mm-5mm is great for beginners)
- **Scissors**
- **Measuring tape**
- **A dowel or branch** for hanging projects
- **Patience and creativity!**

## Basic Knots to Master

### 1. Square Knot
The square knot is the foundation of macramé. Once you master this, you can create countless patterns.

### 2. Half Hitch
Perfect for creating spirals and detailed patterns.

### 3. Lark's Head Knot
Used to attach your cord to a dowel or ring.

## Your First Project

We recommend starting with a simple plant hanger. It uses basic knots and is incredibly satisfying to complete in just a few hours!

## Tips for Success

- Start with projects that use larger cord (4mm-6mm) - they're more forgiving
- Don't pull your knots too tight at first
- Practice each knot separately before combining them
- Watch video tutorials to see the hand movements

Ready to get started? Join us at one of our beginner workshops, or browse our collection of starter kits in the shop!
    `,
    date: '2024-03-15',
    category: 'Tutorial',
    image: '/placeholder-blog-1.jpg',
    author: 'Emma Craft',
  },
  {
    id: '2',
    slug: 'sustainable-craft-materials',
    title: 'Why Natural Fibers Matter: Sustainable Craft Materials',
    excerpt: 'Discover the importance of choosing eco-friendly materials for your macramé projects.',
    content: `
# Why Natural Fibers Matter

In the world of crafting, our material choices have a significant impact on the environment. Here's why we champion natural fibers at Knots & Loom Studio.

## The Problem with Synthetic Fibers

Synthetic materials may be cheaper, but they:
- Take hundreds of years to decompose
- Release microplastics into our environment
- Are made from petroleum products
- Don't have the same tactile quality as natural fibers

## Natural Fiber Benefits

### Cotton
Our primary material is 100% natural cotton. It's:
- Biodegradable
- Soft and pleasant to work with
- Available in various thicknesses
- Takes natural dyes beautifully

### Hemp
Hemp is incredibly sustainable:
- Grows quickly without pesticides
- Very strong and durable
- Has a rustic, textured appearance
- Excellent for outdoor projects

### Jute
Perfect for:
- Rustic, farmhouse-style projects
- Garden decorations
- Strong, coarse texture

## Making Conscious Choices

When you choose natural fibers, you're:
- Supporting sustainable agriculture
- Creating pieces that will biodegrade naturally
- Enjoying better quality materials
- Investing in timeless craftsmanship

Visit our studio to see and feel the difference natural materials make!
    `,
    date: '2024-03-10',
    category: 'Sustainability',
    image: '/placeholder-blog-2.jpg',
    author: 'Sophia Green',
  },
  {
    id: '3',
    slug: 'studio-spotlight-march',
    title: 'Studio Spotlight: Behind the Scenes at Knots & Loom',
    excerpt: 'Take a peek into our creative space and meet the makers behind your favorite pieces.',
    content: `
# Studio Spotlight: Behind the Scenes

Welcome to Knots & Loom Studio! Today we're pulling back the curtain to show you where all the magic happens.

## Our Creative Space

Our studio is a sun-filled loft in downtown, designed to inspire creativity and community. Natural light floods through large windows, illuminating shelves lined with spools of natural cotton in every thickness imaginable.

## The Team

### Emma - Founder & Lead Instructor
Emma discovered macramé during a trip to Morocco in 2019. What started as a hobby quickly became a passion, leading her to open the studio in 2021.

### Sophia - Sustainability Coordinator
Sophia ensures all our materials are ethically sourced and eco-friendly. She also runs our natural dyeing workshops.

### Jake - Workshop Coordinator
Jake handles all workshop scheduling and loves introducing newcomers to the craft. His patience and teaching style have helped hundreds learn to create.

## A Typical Day

Mornings are quiet - team members work on custom orders and prepare materials for upcoming workshops. Afternoons buzz with energy as students arrive for classes. Evenings often feature open studio time where our community gathers to work on projects together.

## Community Focus

More than a workshop space, we're a community hub. Our gallery wall features student work, and we host monthly gatherings where crafters of all levels share techniques and inspiration.

## Visit Us

Stop by any weekday afternoon to tour the studio, feel our materials, and chat about macramé. We love welcoming visitors and sharing our passion for this timeless craft!
    `,
    date: '2024-03-05',
    category: 'Studio Life',
    image: '/placeholder-blog-3.jpg',
    author: 'Emma Craft',
  },
  {
    id: '4',
    slug: 'macrame-home-decor-trends',
    title: '2024 Macramé Home Décor Trends',
    excerpt: 'Explore the latest trends in macramé and discover how to incorporate them into your home.',
    content: `
# 2024 Macramé Home Décor Trends

Macramé continues to evolve, blending traditional techniques with contemporary design. Here are the trends we're seeing this year.

## Oversized Statements

Go big or go home! Large-scale wall hangings are having a moment. These dramatic pieces serve as focal points, replacing traditional artwork.

## Natural Color Palettes

While dyed pieces are beautiful, there's a growing appreciation for natural, undyed fibers. The subtle variations in natural cotton create organic, calming aesthetics.

## Mixed Media

Combining macramé with:
- Wood elements
- Metal accents
- Ceramic beads
- Dried flowers and grasses

## Functional Art

Macramé isn't just decorative anymore:
- Room dividers and curtains
- Lampshade covers
- Storage solutions (hanging organizers)
- Furniture accents

## Minimalist Patterns

Clean, geometric patterns with lots of negative space create modern, sophisticated looks that work in contemporary interiors.

## Outdoor Living

Weather-resistant macramé pieces for:
- Patio plant hangers
- Outdoor cushion covers
- Garden decorations
- Hammocks and swings

## How to Incorporate These Trends

Start small with one statement piece, or create a gallery wall of smaller works. The key is choosing pieces that speak to your personal style while embracing the handmade aesthetic.

Join our advanced workshop to learn some of these trending techniques!
    `,
    date: '2024-02-28',
    category: 'Trends',
    image: '/placeholder-blog-4.jpg',
    author: 'Emma Craft',
  },
];

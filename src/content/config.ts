import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    imageAlt: z.string(),
    readTime: z.string(),
    author: z.string(),
    primaryKeyword: z.string(),
    keyTakeaways: z.array(z.string()).min(3).max(5),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).default([]),
    relatedLinks: z.array(z.object({
      title: z.string(),
      href: z.string()
    })).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = {
  blog: blogCollection
};

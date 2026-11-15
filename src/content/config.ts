import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    imageAlt: z.string().optional(),
    readTime: z.string(),
    author: z.string(),
    primaryKeyword: z.string().optional(),
    keyTakeaways: z.array(z.string()).min(3).max(5).optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).default([]),
    relatedLinks: z.array(z.object({
      title: z.string(),
      href: z.string().optional(),
      url: z.string().optional()
    })).default([]),
    draft: z.boolean().default(false)
  }).transform((data) => ({
    ...data,
    updatedDate: data.updatedDate ?? data.pubDate,
    imageAlt: data.imageAlt ?? data.title,
    primaryKeyword: data.primaryKeyword ?? data.tags[0] ?? 'jasa laser cutting',
    keyTakeaways: data.keyTakeaways ?? [
      `${data.title} — panduan teknis dan estimasi praktis untuk project fabrikasi Anda.`,
      `Pemilihan material, ketebalan, dan teknologi (${data.category}) menentukan presisi hasil akhir.`,
      `Konsultasikan file desain (CAD/AI/CDR/PDF) secara gratis bersama tim teknis Jasa Cutting Laser.`
    ],
    relatedLinks: data.relatedLinks.map((link) => ({
      title: link.title,
      href: link.href ?? link.url ?? '/'
    }))
  }))
});

export const collections = {
  blog: blogCollection
};

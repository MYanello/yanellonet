import { getBlogPosts } from 'app/db/blog';

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `https://yanello.net/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ['', '/blog', '/guestbook', '/uses', '/work'].map((route) => ({
    url: `https://yanello.net${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}

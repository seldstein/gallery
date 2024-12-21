// https://docs.astro.build/en/guides/rss/
import { getCollection } from "astro:content";
import { site } from "../../config.js";

export async function GET() {
  const posts = await getCollection("blog");
  sortCollectionByDate(posts);
  return rss({
    title: `${site.title}`,
    description: `${site.description}`,
    site: `${site.url}`,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}

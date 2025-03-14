import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { baseUrl } from "../utils/baseUrl";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: "Niklas Ek | Blog",
    description: "A web dev blog with UX thinking",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `${baseUrl}/posts/${post.id}`,
    })),
    customData: `<language>en-us</language>`,
  });
}

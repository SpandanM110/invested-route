import axios from "axios";
import * as cheerio from "cheerio";

const sources = [
  { url: "https://www.wealthfront.com/blog", selector: "article a" },
  { url: "https://www.betterment.com/resources", selector: "article a" },
  { url: "https://www.nerdwallet.com/best/investing/financial-advisors", selector: "a" },
  { url: "https://www.coindesk.com/", selector: "a" },
  { url: "https://www.investopedia.com/investing-4427685", selector: "a" },
  { url: "https://www.fool.com/investing-news/", selector: "a" },
];

export async function scrapeBlogs() {
  let articles: { title: string; link: string; source: string }[] = [];

  for (const { url, selector } of sources) {
    try {
      const { data } = await axios.get(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0 Safari/537.36",
        },
      });

      const $ = cheerio.load(data);

      $(selector).each((_, el) => {
        const title = $(el).text().trim();
        const link = $(el).attr("href");

        if (
          title &&
          link &&
          link.startsWith("http") &&
          title.length > 10 &&
          !title.toLowerCase().includes("sign in") &&
          !title.toLowerCase().includes("learn more")
        ) {
          articles.push({ title, link, source: url });
        }
      });
    } catch (err) {
      console.error("❌ Scrape failed for", url, err.message);
    }
  }

  console.log("✅ Filtered articles:", articles.length);
  return articles.slice(0, 15); // top 15 relevant ones
}

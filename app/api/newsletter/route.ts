import { NextResponse } from "next/server";
import { scrapeBlogs } from "@/lib/scrapeBlogs";
import { generateNewsletter } from "@/components/NewsletterAI";

export async function POST(req: Request) {
  try {
    const { topic } = await req.json();
    if (!topic) {
      return NextResponse.json({ error: "Topic is required" }, { status: 400 });
    }

    console.log("🔎 Requested topic:", topic);

    // Step 1: Scrape
    let articles = [];
    try {
      articles = await scrapeBlogs();
      console.log("✅ Scraped articles:", articles.length);
    } catch (err) {
      console.error("❌ Scraping failed:", err);
      return NextResponse.json({ error: "Failed to scrape blogs" }, { status: 500 });
    }

    // Step 2: AI Newsletter
    try {
      const newsletter = await generateNewsletter(topic, articles);
      console.log("✅ Newsletter generated");
      return NextResponse.json({ newsletter });
    } catch (err) {
      console.error("❌ Gemini failed:", err);
      return NextResponse.json({ error: "Failed to generate newsletter" }, { status: 500 });
    }

  } catch (err) {
    console.error("❌ API crashed:", err);
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}

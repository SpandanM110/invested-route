import { ai, model } from "@/lib/gemini";

export async function generateNewsletter(topic: string, articles: any[]) {
  const inputText = `
You are an AI Finance Newsletter Writer.
The user is searching for: "${topic}".

Here are scraped articles with sources and links:
${articles
  .map(
    (a, i) =>
      `${i + 1}. ${a.title}\n   Source: ${a.source}\n   Link: ${a.link}`
  )
  .join("\n")}

Task:
1. Select the 3 most relevant articles for "${topic}".
2. Summarize each in 3–4 sentences.
3. Always include:
   - Title
   - Short summary
   - "Source: [Domain]" + clickable link

Output in a clean newsletter format.
`;

  const response = await ai.models.generateContentStream({
    model,
    contents: [{ role: "user", parts: [{ text: inputText }] }],
  });

  let output = "";
  for await (const chunk of response) {
    output += chunk.text;
  }

  return output;
}

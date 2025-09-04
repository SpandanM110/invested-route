"use client";
import { useState } from "react";

export default function NewsletterGallery() {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [newsletter, setNewsletter] = useState("");

  const handleGenerate = async () => {
    setLoading(true);
    setNewsletter("");

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic }),
    });

    const data = await res.json();
    setNewsletter(data.newsletter);
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📊 Finance Newsletter</h1>
      <input
        type="text"
        placeholder="Search topic (e.g., Mutual Funds, Crypto)"
        className="w-full border rounded p-2 mb-3"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Generating..." : "Generate Newsletter"}
      </button>

     {newsletter && (
  <div
    className="mt-6 p-4 border rounded bg-gray-50 prose"
    dangerouslySetInnerHTML={{ __html: newsletter }}
  />
)}

    </div>
  );
}

import { GoogleGenAI } from "@google/genai";

export default async (request, context) => {
  try {
    const key = process.env.GEMINI_API_KEY;
    if (!key) return new Response("Missing GEMINI_API_KEY", { status: 500 });

    const prompt = await request.text();
    if (!prompt || !prompt.trim())
      return new Response("Missing prompt", { status: 400 });

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    const resultText = result.text;
    return new Response(resultText);
  } catch (error) {
    return new Response(error.toString(), {
      status: 500,
    });
  }
};

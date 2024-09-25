import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const generateResponse = async (prompt) => {
  const result = await model.generateContent(prompt);
  return result.response.text();
}

export default generateResponse;
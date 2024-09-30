import { GoogleGenerativeAI } from "@google/generative-ai";
import Showdown from "showdown";

const API_KEY = import.meta.env.VITE_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const chat = model.startChat();

const generateResponse = async (prompt) => {
  const result = await chat.sendMessage(prompt);
  const responseText = result.response.text();

  const converter = new Showdown.Converter();
  const finalResponse = converter.makeHtml(responseText);
  return finalResponse;
}

export default generateResponse;
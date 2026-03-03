// import { GoogleGenerativeAI } from "@google/generative-ai";

// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// export async function generateContent(prompt) {
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   return response.text();
// }

// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// const model = genAI.getGenerativeModel({
//   model: "gemini-2.0-flash",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 40,
//   maxOutputTokens: 2048,
// };

// export async function run(prompt) {
//   const chatSession = model.startChat({
//     generationConfig,
//     history: [],
//   });

//   const result = await chatSession.sendMessage(prompt);
//   return result.response.text();
// }

export async function run(prompt) {
  console.log("Sending request...");

  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
        "HTTP-Referer": "http://localhost:5173",
        "X-Title": "My React Chat App",
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3-8b-instruct",
        messages: [{ role: "user", content: prompt }],
      }),
    },
  );

  console.log("Status:", response.status);

  const data = await response.json();
  console.log("Response data:", data);

  return data.choices?.[0]?.message?.content;
}

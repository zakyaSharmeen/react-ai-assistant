import React, { createContext, useState } from "react";
import { run } from "../openRouter.js";

export const dataContext = createContext();

function UserContext({ children }) {
  const [response, setResponse] = useState("");
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompt, setPreviousPrompt] = useState([]);

  function newChat() {
    setShowResult(false);
    setLoading(false);
  }

  async function sent(prompt) {
    setResultData("");
    setShowResult(true);
    setRecentPrompt(input);
    setLoading(true);
    // setPreviousPrompt((prev) => [...prev, input]);
    if (!previousPrompt.includes(prompt)) {
      setPreviousPrompt((prev) => [...prev, prompt]);
    }
    const res = await run(prompt);
    console.log(res);
    setResponse(res);
    setResultData(res);
    setInput("");
    setLoading(false);
  }
  //   async function sent(prompt, fromHistory = false) {
  //     if (!prompt.trim()) return;

  //     setShowResult(true);
  //     setLoading(true);

  //     // 👇 IMPORTANT FIX
  //     if (fromHistory) {
  //       setInput(prompt); // show prompt in input
  //     } else {
  //       setInput(""); // clear only when normal send
  //     }

  //     try {
  //       const res = await run(prompt);
  //       setResultData(res);
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  return (
    <dataContext.Provider
      value={{
        sent,
        response,
        setShowResult,
        input,
        setInput,
        loading,
        setLoading,
        showResult,
        setResultData,
        resultData,
        recentPrompt,
        setRecentPrompt,
        previousPrompt,
        setPreviousPrompt,
        newChat,
      }}>
      {children}
    </dataContext.Provider>
  );
}

export default UserContext;

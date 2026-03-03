import React, { createContext, useState } from "react";
import { run } from "../openRouter";

export const dataContext = createContext();

function UserContext({ children }) {
  const [response, setResponse] = useState("");
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");

  async function sent(prompt) {
    setResultData("");
    setShowResult(true);
    setRecentPrompt(input);
    setLoading(true);
    const res = await run(prompt);
    console.log(res);
    setResponse(res);
    setResultData(res);
    setInput("");
  }

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
      }}>
      {children}
    </dataContext.Provider>
  );
}

export default UserContext;

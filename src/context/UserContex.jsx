import React, { createContext, useState } from "react";
import { run } from "../openRouter";

export const dataContext = createContext();

function UserContext({ children }) {
  const [response, setResponse] = useState("");

  async function sent(prompt) {
    const res = await run(prompt);
    console.log(res);
    setResponse(res); // 🔥 save response
  }

  return (
    <dataContext.Provider value={{ sent, response }}>
      {children}
    </dataContext.Provider>
  );
}

export default UserContext;

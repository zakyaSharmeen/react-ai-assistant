import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Separation from "./components/separation/Separation";
import ChatSection from "./components/chatsection/ChatSection";

function App() {
  return (
    <>
      <Sidebar />

      <Separation />

      <ChatSection />
    </>
  );
}

export default App;

import React, { useContext } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Separation from "./components/separation/Separation";
import ChatSection from "./components/chatsection/ChatSection";
import { dataContext } from "./context/UserContex";

function App() {
  let data = useContext(dataContext);
  console.log(data);

  return (
    <>
      <Sidebar />

      <Separation />

      <ChatSection />
    </>
  );
}

export default App;

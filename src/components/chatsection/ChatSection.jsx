import React, { useContext } from "react";
import "./ChatSection.css";
import Darkmode from "../Darkmode/Darkmode";
import { LuSendHorizontal } from "react-icons/lu";
import { dataContext } from "../../context/UserContex";
// import user from "../../assets/user.png";
// import ai from "../../assets/ai.png";

function ChatSection() {
  const { sent, response } = useContext(dataContext);

  return (
    <div className="chatsection">
      <div className="topsection">
        <div className="headings">
          <span>HELLO AYUSH,</span>
          <span>I'm Your Own Assistant</span>
          <span>What can I help you...?</span>
        </div>
      </div>
      <div className="bottomsection">
        <input type="text" placeholder="Enter a prompt" />
        <button
          id="sentbtn"
          onClick={() => sent("good eveing maouni, i hope u r good")}>
          <LuSendHorizontal />
        </button>
        {/* <p>{response}</p> */}

        <Darkmode />
      </div>
    </div>
  );
}

export default ChatSection;

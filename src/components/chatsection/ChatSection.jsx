import React, { useContext } from "react";
import "./ChatSection.css";
import Darkmode from "../Darkmode/Darkmode";
import { LuSendHorizontal } from "react-icons/lu";
import { dataContext } from "../../context/UserContex";
// import user from "../../assets/user.png";
import user from "../../assets/user.png";
import ai from "../../assets/ai.png";
// import ai from "../../assets/ai.png";

function ChatSection() {
  const {
    sent,

    input,
    setInput,
    loading,
    showResult,
    resultData,
    recentPrompt,
  } = useContext(dataContext);

  return (
    <div className="chatsection">
      <div className="topsection">
        {!showResult ? (
          <div className="headings">
            <span>HELLO AYUSH,</span>
            <span>I'm Your Own Assistant</span>
            <span>What can I help you...?</span>
          </div>
        ) : (
          <div className="result">
            <div className="userbox">
              <img src={user} className="img" />
              <p>{recentPrompt}</p>
            </div>
            <div className="aibox">
              <img src={ai} className="img" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p>{resultData}</p>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="bottomsection">
        <input
          type="text"
          placeholder="Enter a prompt"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {input ? (
          <button id="sentbtn" onClick={() => sent(input)}>
            <LuSendHorizontal />
          </button>
        ) : null}

        <Darkmode />
      </div>
    </div>
  );
}

export default ChatSection;

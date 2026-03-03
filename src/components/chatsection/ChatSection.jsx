// import React from "react";
// import "./ChatSection.css";
// import Darkmode from "../darkmode/Darkmode";

// function ChatSection() {
//   return (
//     <div className="chatsection">
//       <h1>hii</h1>
//       <Darkmode />
//     </div>
//   );
// }

// export default ChatSection;

import React from "react";
import "./ChatSection.css";
import Darkmode from "../Darkmode/Darkmode";
import { LuSendHorizontal } from "react-icons/lu";
// import user from "../../assets/user.png";
// import ai from "../../assets/ai.png";

function ChatSection() {
  return (
    <div className="chatsection">
      <div className="topsection">
        <div className="headings">
          <span>HELLO AYUSH,</span>
          <span>I'm Your Own Assistant</span>
          <span>What can I help you...?</span>
        </div>
        {/* <div className="result">
          <div className="userbox">
            <img src={user} alt="" width="60px" />
            <p>para</p>
          </div>
          <div className="aibox">
            <img src={ai} alt="" width="60px" />
          </div>
        </div> */}
      </div>
      <div className="bottomsection">
        <input type="text" placeholder="Enter a prompt" />
        <button id="sentbtn">
          <LuSendHorizontal />
        </button>

        <Darkmode />
      </div>
    </div>
  );
}

export default ChatSection;

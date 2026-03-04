import React, { useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import "./Sidebar.css";
import { dataContext } from "../../context/UserContex";
function Sidebar() {
  let [extend, setExtend] = useState(false);

  useEffect(() => {
    console.log("Updated extend:", extend);
  }, [extend]);

  const { newChat, setRecentPrompt, sent, previousPrompt } =
    useContext(dataContext);

  async function loadPrevPrompt(item) {
    // sent(item);
    // setInput(item); // ✅ sets input
    sent(item, true);
    setRecentPrompt(item);
  }
  return (
    <div className="sidebar">
      <GiHamburgerMenu
        style={{
          backgroundColor: "var(--background-color)",
          color: "var(--color)",
        }}
        id="ham"
        onClick={() => {
          setExtend((prev) => !prev);
          console.log(extend);
        }}
      />
      <div className="newchat" onClick={() => newChat()}>
        <FaPlus />
        {extend ? <p>New Chat</p> : null}
      </div>

      {previousPrompt.map((item, index) => {
        return (
          <div
            className="recent"
            key={index}
            onClick={() => loadPrevPrompt(item)}>
            <FaRegMessage />
            {extend ? <p>{item.slice(0, 8) + "..."}</p> : null}
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;

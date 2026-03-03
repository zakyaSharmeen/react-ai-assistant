import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import "./Sidebar.css";
function Sidebar() {
  let [extend, setExtend] = useState(false);

  useEffect(() => {
    console.log("Updated extend:", extend);
  }, [extend]);
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
      <div className="newchat">
        <FaPlus />
        {extend ? <p>New Chat</p> : null}
      </div>

      <div className="recent">
        <FaRegMessage
          style={{
            "background-color": "var(--background-color)",
            color: "var(--color)",
          }}
        />
        {extend ? <p>Recent Chats</p> : null}
      </div>
    </div>
  );
}

export default Sidebar;

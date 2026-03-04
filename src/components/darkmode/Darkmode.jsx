import React, { useEffect, useState } from "react";
import { LuMoon } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
import "./Darkmode.css";

export function Darkmode() {
  let [mode, setMode] = useState("darkmode");

  function toggleMode() {
    if (mode === "darkmode") {
      setMode("lightmode");
    } else {
      setMode("darkmode");
    }
  }
  useEffect(() => {
    document.body.className = mode;
  }, [mode]);
  return (
    <div>
      <button
        className="darkmodebtn"
        onClick={() => {
          toggleMode();
          console.log(mode);
        }}>
        {/* dark */}
        {/* {mode === "darkmode" ? "Light Mode" : "Dark Mode"} */}
        {mode === "darkmode" ? <MdOutlineWbSunny /> : <LuMoon />}
      </button>
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import { MdOutlineWbSunny } from "react-icons/md";
// import { LuMoon } from "react-icons/lu";
// import "./Darkmode.css";
// function Darkmode() {
//   const [mode, setMode] = useState("darkmode");
//   function toggle() {
//     if (mode === "darkmode") {
//       setMode("lightmode");
//     } else {
//       setMode("darkmode");
//     }
//   }
//   useEffect(() => {
//     document.body.className = mode;
//   }, [mode]);
//   return (
//     <button
//       className="darkmodebtn"
//       onClick={() => {
//         toggle();
//         console.log(mode);
//       }}>
//       {mode === "darkmode" ? <MdOutlineWbSunny /> : <LuMoon />}
//     </button>
//   );
// }

// export default Darkmode;

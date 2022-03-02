import React, { useState } from "react";

export default function Message() {
  const [message, setmessage] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && message) {
      console.log(message);
      setmessage("");
    }
  };

  return (
    <input
      className="p-1 w-100"
      value={message}
      onChange={(e) => setmessage(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Pigia invio per mandare il messaggio"
    />
  );
}

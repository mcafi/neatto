import React, { useState } from "react";
import { firestore } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Message() {
  const [message, setmessage] = useState("");

  const messagesRef = collection(firestore, "messages");

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && message) {
      await addDoc(messagesRef, {
          author: "cafi",
          message,
          sent: serverTimestamp()
      })
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

import React, { useState } from "react";
import { firestore } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useSelector } from "react-redux";

export default function MessageInput() {
  const [message, setmessage] = useState("");
  const author = useSelector(state => state)

  const messagesRef = collection(firestore, "messages");

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && message) {
      await addDoc(messagesRef, {
          author,
          message,
          sent: serverTimestamp()
      })
      setmessage("");
    }
  };

  return (
    <textarea
      className="p-1 w-full"
      rows="2"
      value={message}
      onChange={(e) => setmessage(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Pigia invio per mandare il messaggio"
    />
  );
}

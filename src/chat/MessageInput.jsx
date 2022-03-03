import React, { useContext, useState } from "react";
import { firestore } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useSelector } from "react-redux";
import { ChatIdContext } from "../App";

export default function MessageInput() {
  const [message, setmessage] = useState("");

  const author = useSelector(state => state.name)
  const chatId = useContext(ChatIdContext)

  const messagesRef = collection(firestore, "chats", chatId, "messages")

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && message) {
      setmessage("");
      await addDoc(messagesRef, {
          author,
          message,
          sent: serverTimestamp()
      })
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

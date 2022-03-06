import React, { useContext, useState } from "react";
import { firestore } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useSelector } from "react-redux";
import { ChatIdContext } from "../App";

export default function MessageInput() {
  const [message, setmessage] = useState("");

  const user = useSelector((state) => state.user);

  const chatId = useContext(ChatIdContext);

  const activeChat = useSelector((state) => state.privateChat.current);

  const messagesRef = collection(firestore, "chats", chatId, "messages");

  const handleKeyDown = async (e) => {
  
    if (e.key === "Enter" && message) {
      e.preventDefault();
      setmessage("");
      let privateMessage = null;
      if (activeChat) {
        privateMessage = [user.userId, activeChat].sort()
      }
      await addDoc(messagesRef, {
        author: user.name,
        message,
        sent: serverTimestamp(),
        privateMessage,
      });

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

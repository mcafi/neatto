import { firestore } from "../firebase";
import { collection, orderBy, query, limit } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import MessageItem from "./MessageItem";
import { useContext, useEffect, useRef } from "react";
import { ChatIdContext } from "../App";

const messageConverter = {
  toFirestore(m) {
    return {author: m.autor, message: m.message, chatId: m.chatId}
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)
    return {
      author: data.author,
      message: data.message,
      chatId: data.chatId,
      id: snapshot.id
    }
  }
}


export default function Messages() {

  const chatId = useContext(ChatIdContext)

  const messagesRef = collection(firestore, "chats", chatId, "messages").withConverter(messageConverter);
  const q = query(messagesRef, orderBy("sent"), limit(20));

  const [messages] = useCollectionData(q);

  const lastMessage = useRef(null);

  useEffect(() => {
    lastMessage.current.scrollIntoView()
  }, [messages])

  return (
    <div className="bg-white h-96 w-full overflow-auto">
      <ul>
        {messages &&
          messages.map((msg) => (
            <MessageItem
              key={msg.id}
              author={msg.author}
              message={msg.message}
            />
          ))}
          <li ref={lastMessage}></li>
      </ul>
    </div>
  );
}

import { firestore } from "../firebase";
import { collection, orderBy, query, limit, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import MessageItem from "./MessageItem";
import { useContext, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { ChatIdContext } from "../App";

const messageConverter = {
  toFirestore(m) {
    return { author: m.autor, message: m.message, privateMessage: m.privateMessage};
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options);
    return {
      author: data.author,
      message: data.message,
      privateMessage: data.privateMessage,
      id: snapshot.id,
    };
  },
};

export default function Messages() {
  const chatId = useContext(ChatIdContext);
  const activeChat = useSelector((state) => state.privateChat.current);
  const user = useSelector((state) => state.user)

  const privateChat = activeChat ? [activeChat, user.userId].sort() : null

  const messagesRef = collection(
    firestore,
    "chats",
    chatId,
    "messages"
  ).withConverter(messageConverter);
  const q = query(messagesRef, where("privateMessage", "==", privateChat), orderBy("sent", "desc"), limit(50));

  const [messages] = useCollectionData(q);

  const lastMessage = useRef(null);

  useEffect(() => {
    lastMessage.current.scrollIntoView();
  }, [messages]);

  return (
    <div className="bg-white h-96 w-full overflow-auto">
      <ul className="flex flex-col-reverse">
        <li ref={lastMessage}></li>
        {messages &&
          messages.map((msg) => (
            <MessageItem
              key={msg.id}
              author={msg.author}
              message={msg.message}
            />
          ))}
      </ul>
    </div>
  );
}

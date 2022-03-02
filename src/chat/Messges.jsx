import { firestore } from "../firebase";
import { collection, limit, orderBy, query } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import MessageItem from "./MessageItem";
import { useEffect, useRef } from "react";

const messageConverter = {
  toFirestore(m) {
    return {author: m.autor, message: m.message}
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)
    return {
      author: data.author,
      message: data.message,
      id: snapshot.id
    }
  }
}

const messagesRef = collection(firestore, "messages").withConverter(messageConverter);
const q = query(messagesRef, orderBy("sent"), limit(25));

export default function Messages() {

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

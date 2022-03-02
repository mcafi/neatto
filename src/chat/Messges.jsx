import { firestore } from "../firebase";
import { collection, limit, orderBy, query } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import MessageItem from "./MessageItem";

export default function Messages() {
  const messagesRef = collection(firestore, "messages");
  const q = query(messagesRef, orderBy("sent"), limit(25));

  const [messages] = useCollectionData(q);

  return (
    <div className="bg-white h-96 w-96 overflow-auto">
      <ul>
        {messages &&
          messages.map((msg) => (
            <MessageItem
              key={msg.sent}
              author={msg.author}
              message={msg.message}
            />
          ))}
      </ul>
    </div>
  );
}

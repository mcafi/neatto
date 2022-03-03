import { addDoc, collection } from "firebase/firestore";
import { createContext } from "react";
import { useSelector } from "react-redux";
import Chat from "./chat";
import { firestore } from "./firebase";
import NameSelector from "./NameSelector";

export const ChatIdContext = createContext()

const chatRef = collection(firestore, "chats")

function App() {
  const id = new URLSearchParams(window.location.search).get('id')

  const initChat = async () => {
    const docRef = await addDoc(chatRef, {messages: []})
    window.location.href = `?id=${docRef.id}`
  }

  if (!id) {
    initChat()
  }

  const name = useSelector(state => state.name)

  return (
    <div className="h-screen container mx-auto flex items-center justify-center">
      <ChatIdContext.Provider value={id}>
        {name ? <Chat /> : <NameSelector />}
      </ChatIdContext.Provider>
    </div>
  );
}

export default App;

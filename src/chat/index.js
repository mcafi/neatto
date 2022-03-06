import ChatTabs from "./ChatTabs";
import List from "./List";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import Name from "./Name";

export default function Chat() {
  return (
    <div className="w-full p-2 border-black border bg-cyan-200">
      <h1 className="font-bold">Neatto</h1>
      <div className="flex">
        <div className="flex-fill w-full">
          <ChatTabs />
          <Messages />
          <Name />
          <MessageInput />
        </div>
        <List />
      </div>
    </div>
  );
}

import List from "./List";
import MessageInput from "./MessageInput";
import Messages from "./Messges";
import Name from "./Name";

export default function Chat() {
  return (
    <div className="w-full p-2 border-black border bg-cyan-300">
      <h1 className="font-bold">Neatto</h1>
      <div className="flex">
        <div className="flex-fill w-full">
          <Messages />
          <Name />
          <MessageInput />
        </div>
        <List />
      </div>
    </div>
  );
}

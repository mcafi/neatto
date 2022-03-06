import { useSelector } from "react-redux";
import ChatTab from "./ChatTab";

export default function ChatTabs() {
  const privateChatList = useSelector((state) => state.privateChat.active);
  return (
    <div className="flex pt-2 pl-5 bg-gray-200">
      <ChatTab id={null} name="Chat room" />
      {privateChatList.map((user) => (
        <ChatTab
          key={"private-" + user.id}
          id={user.id}
          name={user.name}
          closeButton
        />
      ))}
    </div>
  );
}

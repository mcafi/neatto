import { useDispatch, useSelector } from "react-redux";

export default function ChatTab({ name, id, closeButton }) {
  const activeChat = useSelector((state) => state.privateChat.current);

  const dispatch = useDispatch();

  const handleClose = (e) => {
    e.stopPropagation();
    dispatch({ type: "CLOSE_CHAT", payload: id });
  };

  return (
    <div
      className={`p-1 mx-1 cursor-pointer ${
        activeChat === id ? "bg-white font-semibold" : "bg-cyan-200"
      }`}
      key={id}
      onClick={() => dispatch({ type: "SET_PRIVATE_CHAT", payload: id })}
    >
      {name}
      {closeButton && (
        <span className="inline-block ml-2 text-cyan-700" onClick={handleClose}>
          x
        </span>
      )}
    </div>
  );
}

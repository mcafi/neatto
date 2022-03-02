import { useSelector, useDispatch } from "react-redux";

export default function Name() {
  const name = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="py-2">
      Nickname:
      <input
        className="p-1 mx-2"
        type="text"
        value={name}
        onChange={(e) =>
          dispatch({ type: "CHANGE_NAME", payload: e.target.value })
        }
      ></input>
      <button className="rounded-lg p-2 bg-zinc-300">Change</button>
    </div>
  );
}

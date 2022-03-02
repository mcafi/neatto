import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Name() {
  const name = useSelector((state) => state.name);
  const [tempName, setTempName] = useState(name);

  const dispatch = useDispatch();

  return (
    <div className="py-2">
      Nickname:
      <input
        className="p-1 mx-2 border-2 border-neutral-700"
        type="text"
        value={tempName}
        onChange={(e) => setTempName(e.target.value)}
      ></input>
      <button
        className="rounded-lg p-2 bg-zinc-300"
        onClick={(e) =>
          dispatch({ type: "CHANGE_NAME", payload: tempName })
        }
      >
        Change
      </button>
    </div>
  );
}

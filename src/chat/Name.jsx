import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { firestore } from "../firebase";

export default function Name() {
  const name = useSelector(state => state.user.name);
  const userId = useSelector(state => state.user.userId)
  const [tempName, setTempName] = useState(name);

  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch({ type: "CHANGE_NAME", payload: tempName });
    if (userId) {
      const ref = doc(firestore, "users", userId)
      await updateDoc(ref, { name: tempName })
    } else {
      const ref = collection(firestore, "users")
      const docRef = await addDoc(ref, { name: tempName })
      dispatch({ type: "SET_USER_ID", payload: docRef.id})
    }
  };

  return (
    <div className="py-2">
      Nickname:
      <input
        className="p-1 mx-2 border-2 border-neutral-700"
        type="text"
        value={tempName}
        onChange={(e) => setTempName(e.target.value)}
      ></input>
      <button className="rounded-lg p-2 bg-zinc-300" onClick={handleClick}>
        Change
      </button>
    </div>
  );
}

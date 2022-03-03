import { firestore } from "../firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";

const usersConverter = {
  toFirestore(u) {
    return { name: u.name };
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options);
    return {
      name: data.name,
      id: snapshot.id,
    };
  },
};

const messagesRef = collection(firestore, "users").withConverter(
  usersConverter
);
const q = query(messagesRef, orderBy("name"));

export default function List() {
  const user = useSelector((state) => state);

  const [users] = useCollectionData(q);

  return (
    <div className="ml-2 p-2 bg-white h-100 w-48">
      <ul>
        <li className="font-bold">{user.name}</li>
        {users &&
          users.map(
            (u) => u.id !== user.userId && <li key={u.id}>{u.name}</li>
          )}
      </ul>
    </div>
  );
}

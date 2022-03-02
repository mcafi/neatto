import { useSelector } from "react-redux";
import Chat from "./chat";
import NameSelector from "./NameSelector";

function App() {
  const name = useSelector(state => state.name)

  return (
    <div className="h-screen container mx-auto flex items-center justify-center">
      {name ? <Chat /> : <NameSelector />}
    </div>
  );
}

export default App;

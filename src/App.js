import Taskbar from "./components/taskbar/Taskbar";
import background from "./images/background.jpg";

function App() {
  return (
    <div
      className="w-screen h-screen bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Taskbar />
    </div>
  );
}

export default App;

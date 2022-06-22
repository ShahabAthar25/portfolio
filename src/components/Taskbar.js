import windowsLogo from "../images/windowsLogo.png";

export default function Taskbar() {
  return (
    <div className="fixed bottom-0 w-screen bg-[#213540]">
      <button className="px-2 py-1 cursor-default">
        <img
          src={windowsLogo}
          alt=""
          className="h-8 cursor-default"
          draggable="false"
        />
      </button>
    </div>
  );
}

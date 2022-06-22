import { DesktopComputerIcon, SearchIcon } from "@heroicons/react/outline";
import windowsLogo from "../../images/windowsLogo.png";
import Item from "./Item";

export default function Taskbar() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed bottom-0 w-screen bg-[#213540] flex">
      <button className="px-0.5 py-1 cursor-default hover:bg-gray-700 outline-none">
        <img
          src={windowsLogo}
          alt=""
          className="h-8 cursor-default"
          draggable="false"
        />
      </button>
      <form className="bg-[#f2f2f2] w-[343px] flex items-center">
        <button
          className="bg-transparent border-none outline-none cursor-text"
          onClick={(e) => handleOnSubmit(e)}
        >
          <SearchIcon className="h-6 rotate-90 px-2 text-gray-600" />
        </button>
        <input
          type="text"
          className="bg-transparent border-none w-full h-full outline-none"
          placeholder="Type here to search"
        />
      </form>
      <Item Icon={DesktopComputerIcon} />
    </div>
  );
}

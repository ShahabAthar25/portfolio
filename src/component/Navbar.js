import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-20 py-3">
      <img src={logo} alt="" className="h-20 cursor-pointer" />
      <div className="flex items-center space-x-10">
        <Link
          to="/projects"
          className="text-2xl font-marker hover:text-gray-600 transition-all"
        >
          Projects
        </Link>
        <Link
          to="/projects"
          className="text-2xl font-marker hover:text-gray-600 transition-all"
        >
          About Me
        </Link>
        <Link
          to="/projects"
          className="text-2xl font-marker hover:text-gray-600 transition-all"
        >
          Web Stack
        </Link>
        <Link
          to="/projects"
          className="text-2xl font-marker hover:text-gray-600 transition-all"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}

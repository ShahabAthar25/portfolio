import logo from "../images/logo.png";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-4">
      <img src={logo} alt="" className="h-20" />
    </div>
  );
}

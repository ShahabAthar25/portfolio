import React from "react";

export default function Item({ Icon }) {
  return (
    <button className="px-2 py-1 cursor-default hover:bg-gray-700 outline-none">
      <Icon className="h-6 text-white" />
    </button>
  );
}

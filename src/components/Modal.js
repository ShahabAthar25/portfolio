import React from "react";

export default function Modal() {
  return (
    <div className="bg-black bg-opacity-50 absolute inset-0 justify-center z-50">
      <div className="bg-white flex items-center rounded lg:w-50% md:w-50% w-screen h-80%">
        <h1>Hello World</h1>
      </div>
    </div>
  );
}

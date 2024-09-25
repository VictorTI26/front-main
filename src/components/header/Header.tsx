import React from "react";

export default function Header() {
  return (

    <header className="bg-azul h-16 flex items-center font-poppins">
      <div className="flex flex-row justify-between w-[80%] mx-auto items-center">
        <div className=" text-white flex flex-col items-center">
          <h1>Lecajovida</h1>
        </div>
        <nav className="flex gap-10">
          <a className="text-white" href="/feed">Feed</a>
          <a className="text-white" href="/upload">Upload</a>
        </nav>
      </div>
    </header>
  );
}

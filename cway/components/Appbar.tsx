import React from "react";
import SigninButton from "./SigninButton";

const Appbar = () => {
  return (
    <header className="flex flex-row justify-between items-center gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
        <a href="/admin">Admin Panel</a> 
        <a href="/enrolled">Enrolled Content</a>
      <SigninButton />
    </header>
  );
};

export default Appbar;
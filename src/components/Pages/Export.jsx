import React from "react";
import FinalResume from "../themes/FinalResume.jsx";
import ProgressBar from "./ProgressBar.jsx";

export default function Export() {
  const progress = 100;
  return (
    <>
        <ProgressBar progress={progress} />
      <div>
        <FinalResume />
      </div>
    </>
  );
}

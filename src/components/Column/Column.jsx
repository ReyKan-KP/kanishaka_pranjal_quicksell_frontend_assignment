import React from "react";
import "./Column.css";

export default function Column({ children }) {
  return (
    <div className="column-wrapper" id="column-layout">
      {children}
    </div>
  );
}

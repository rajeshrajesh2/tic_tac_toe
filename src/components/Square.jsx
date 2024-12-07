import React from "react";

export default function Square({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "50px",
        height: "50px",
        fontSize: "20px",
        textAlign: "center",
        cursor: "pointer",
        backgroundColor: value === "X"
         ? "lightblue"
          : value === "O"
           ? "lightcoral"
            : "white",
      }}
    >
      {value}
    </button>
  );
}

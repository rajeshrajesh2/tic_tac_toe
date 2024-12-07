import React from "react";
import Board from "./components/Board";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1 style={{ fontFamily: "Comic Sans MS", fontSize: "25px" , textShadow: "2px 2px 2px darkgoldenrod" }}> Welcome to Tic Tac Toe..!!</h1>
      <Board />
    </div>
  );
}

export default App;

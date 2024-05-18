import Board from "./components/Board";
import Piece from "./components/Piece";

function App() {
  /*  const pieceProps = {
    name: "Private",
    rankValue: 1,
    pieceValue: 1,
    position: {
      x: 1,
      y: 1,
    },
  }; */

  return (
    <Board />
    /* <Piece {...pieceProps} /> */
  );
}

export default App;

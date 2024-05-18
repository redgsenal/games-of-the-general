import Square from "./Square";

const Board = () => {
  const SQUARES = [];
  const ROWS = 8; // 8 rows
  const COLS = 9; // 9 cols

  // build the 8 x 9 squares on the board
  // start from bottom left to top right (a1...i8)
  let index = ROWS * COLS;
  for (let r = 0; r < ROWS; r++) {
    for (let c = COLS; c > 0; c--) {
      let row = r + 1;
      let col = c + 1;
      let position = { x: row, y: col };
      let letter = String.fromCharCode(96 + col);
      let id = letter + "" + row; // a -> col, 1 -> row
      let color = row < 5 ? "white" : "black";
      let piece = {
        name: "private",
        rankValue: -1,
        pieceValue: -1,
        position: { x: 1, y: 1 },
      };
      // console.log("row:", row);
      // console.log("letter:", letter);
      const squareItem = {
        id: id,
        index: index--,
        position: position,
        color: color,
        border: "white",
        width: 10,
        height: 10,
        piece: piece,
      };
      const square = <Square {...squareItem} />;
      SQUARES.push(
        <div className="piece-square" key={`${id}`}>
          {square}
        </div>
      );
    }
  }

  return (
    <>
      <div className="game-board">{SQUARES}</div>
    </>
  );
};

export default Board;

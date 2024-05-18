import Square from "./Square";

const Board = () => {
  const ROWS = 8; // 8 rows
  const COLS = 9; // 9 cols

  // build the 8 x 9 squares on the board
  // start from bottom left to top right (a1...i8)
  let index = 0;
  const COLHEADERS = [];
  const ROWITEMS = [];
  const LETTERS = [];

  let i = 0;
  COLHEADERS.push(<th>*</th>);
  while (COLHEADERS.length < COLS + 1) {
    let letter = String.fromCharCode(96 + (i + 1));
    COLHEADERS.push(<th>{letter}</th>);
    LETTERS.push(letter);
    i++;
  }

  for (let r = 0; r < ROWS; ++r) {
    let row = ROWS - r;
    const ROWITEM = [];
    ROWITEM.push(<td>{row}</td>);
    for (let c = 0; c < COLS; ++c) {
      let col = c + 1;
      let position = { x: col, y: row };
      let id = LETTERS[c] + "" + row; // a -> col, 1 -> row
      let color = row < 5 ? "white" : "black";
      let piece = {
        name: "private",
        rankValue: -1,
        pieceValue: -1,
        position: { x: col, y: row },
      };
      // console.log("row:", row);
      // console.log("letter:", letter);
      const squareItem = {
        id: id,
        index: ++index,
        position: position,
        color: color,
        border: "white",
        width: 10,
        height: 10,
        piece: piece,
      };
      const square = <Square {...squareItem} />;
      ROWITEM.push(
        <td>
          <div className="piece-square" key={`${id}`}>
            {square}
          </div>
        </td>
      );
    }
    ROWITEMS.push(<tr>{ROWITEM}</tr>);
  }

  return (
    <>
      <div className="container">
        <table className="game-board">
          <tr>{COLHEADERS}</tr>
          {ROWITEMS}
        </table>
      </div>
    </>
  );
};

export default Board;

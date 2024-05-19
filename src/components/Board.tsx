import ColItem from "./ColItem";
import RowItem from "./RowItem";
import Square from "./Square";

const ROWS = 8; // 8 rows
const COLS = 9; // 9 cols

const Board = () => {
  // build the 8 x 9 squares on the board
  // start from bottom left to top right (a1...i8)
  let index = 0;
  const COLHEADERS = [];
  const ROWITEMS = [];
  const LETTERS = [];

  // build column headers
  let i = 0;
  COLHEADERS.push(<ColItem key={`${i}`}>*</ColItem>);
  while (COLHEADERS.length < COLS + 1) {
    let letter = String.fromCharCode(96 + (i + 1));
    COLHEADERS.push(<ColItem key={`${letter}`}>{letter}</ColItem>);
    LETTERS.push(letter);
    i++;
  }

  for (let r = 0; r < ROWS; ++r) {
    let row = ROWS - r;
    const ROWITEM = [];
    ROWITEM.push(<ColItem key={`${index}`}>{row}</ColItem>);
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
      const square = <Square key={`${id}`} {...squareItem} />;
      ROWITEM.push(
        <ColItem key={`${index}`}>
          <div className="piece-square" key={`${id}`}>
            {square}
          </div>
        </ColItem>
      );
    }
    ROWITEMS.push(<RowItem key={`${index}`}>{ROWITEM}</RowItem>);
  }

  return (
    <>
      <div className="container">
        <table className="game-board">
          <thead>
            <RowItem>{COLHEADERS}</RowItem>
          </thead>
          <tbody>{ROWITEMS}</tbody>
          <tfoot>
            <RowItem>{COLHEADERS}</RowItem>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Board;

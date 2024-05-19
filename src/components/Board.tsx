import { PieceProps } from "../interfaces/PieceProps";
import ColItem from "./ColItem";
import RowItem from "./RowItem";
import Square from "./Square";

const ROWS = 8; // 8 rows
const COLS = 9; // 9 cols

// build letter coordinates
const buildLetterMarkers = () => {
  let i = 0;
  const letters: string[] = [];
  while (letters.length < COLS + 1) {
    let letter = String.fromCharCode(96 + (i + 1));
    letters.push(letter);
    i++;
  }
  return letters;
};

// build column headers
const buildColHeaders = (letters: string[]) => {
  if (letters.length == 0) {
    return [];
  }
  let i = 0;
  const headers = [];
  headers.push(<ColItem key={`${i}`}>*</ColItem>);
  while (headers.length < COLS + 1) {
    let letter = letters[i];
    headers.push(<ColItem key={`${letter}`}>{letter}</ColItem>);
    i++;
  }
  return headers;
};

const buildRankPieces = () => {
  const pieces: PieceProps[] = [];
  pieces.push(
    {
      id: "5-star-general-1-white",
      name: "5 Star General",
      team: "white",
      rankValue: 13,
      pieceValue: 0,
      isActive: false,
    },
    {
      id: "5-star-general-2-white",
      name: "5 Star General",
      team: "white",
      rankValue: 13,
      pieceValue: 0,
      isActive: false,
    },
    {
      id: "4-star-general-1-white",
      name: "4 Star General",
      team: "white",
      rankValue: 12,
      pieceValue: 0,
      isActive: false,
    },
    {
      id: "4-star-general-2-white",
      name: "4 Star General",
      team: "white",
      rankValue: 12,
      pieceValue: 0,
      isActive: false,
    },
    {
      id: "3-star-general-1-white",
      name: "3 Star General",
      team: "white",
      rankValue: 12,
      pieceValue: 0,
      isActive: false,
    },
    {
      id: "3-star-general-2-white",
      name: "3 Star General",
      team: "white",
      rankValue: 12,
      pieceValue: 0,
      isActive: false,
    }
  );
};

const Board = () => {
  // build the 8 x 9 squares on the board
  // start from bottom left to top right (a1...i8)
  let index = 0;
  const letters = buildLetterMarkers();
  const colHeaders = buildColHeaders(letters);
  const rowItems = [];

  // build rank pieces
  const gamePieces = buildRankPieces();

  // render game table
  for (let r = 0; r < ROWS; ++r) {
    let row = ROWS - r;
    const colItems = [];
    colItems.push(<ColItem key={`start-${index}`}>{row}</ColItem>);
    for (let c = 0; c < COLS; ++c) {
      let col = c + 1;
      let position = { x: col, y: row };
      let id = letters[c] + "" + row; // a -> col, 1 -> row
      let color = row < 5 ? "white" : "black";
      let piece = {
        id: id,
        name: "private",
        team: color,
        rankValue: -1,
        pieceValue: -1,
        position: { x: col, y: row },
      };
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
      const square = <Square key={`square-${id}`} {...squareItem} />;
      colItems.push(
        <ColItem key={`piece-${index}`}>
          <div className="piece-square" key={`${id}`}>
            {square}
          </div>
        </ColItem>
      );
    }
    colItems.push(<ColItem key={`end-${index}`}>{row}</ColItem>);
    rowItems.push(<RowItem key={`row-${index}`}>{colItems}</RowItem>);
  }

  return (
    <>
      <div className="container">
        <div className="content">
          <table className="game-board">
            <thead>
              <RowItem>{colHeaders}</RowItem>
            </thead>
            <tbody>{rowItems}</tbody>
            <tfoot>
              <RowItem>{colHeaders}</RowItem>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default Board;

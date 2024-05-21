import { PieceProps } from "../interfaces/PieceProps";
import ColItem from "./ColItem";
import RowItem from "./RowItem";
import Square from "./Square";
import initialPiecesJSON from "../data/initial_pieces.json";

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
const buildColHeaders = (letters: string[], side: string) => {
  if (letters.length == 0) {
    return [];
  }
  let i = 0;
  const headers = [];
  headers.push(<ColItem key={`${i}`}>*</ColItem>);
  while (headers.length < COLS + 1) {
    let letter = letters[i];
    let label = letter + " (" + (i + 1) + ")";
    let colKey = side + '-' + letter;
    headers.push(<ColItem key={`${colKey}`}>{label.toUpperCase()}</ColItem>);
    i++;
  }
  return headers;
};

const buildRankPieces = () => {
  return initialPiecesJSON.pieces;
};

const Board = () => {
  // build the 8 x 9 squares on the board
  // start from bottom left to top right (a1...i8)
  let index = 0;
  const letters = buildLetterMarkers();
  const colTopHeaders = buildColHeaders(letters, 'top');
  const colBottomHeaders = buildColHeaders(letters, 'bottom');
  const rowItems = [];

  // build rank pieces
  const gamePieces = buildRankPieces();
  console.log('game pieces: ', gamePieces);

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
      colItems.push(
        <ColItem key={`piece-${index}`}>
          <div className="piece-square" key={`${id}`}>
              <Square key={`square-${id}`} {...squareItem} />
          </div>
        </ColItem>
      );
    }
    colItems.push(<ColItem key={`end-${index}`}>{row}</ColItem>);
    rowItems.push(<RowItem key={`row-${index}`}>{colItems}</RowItem>);
  }

  return (
    <div className="container">
      <div className="content">
        <table className="game-board">
          <thead>
            <RowItem>{colTopHeaders}</RowItem>
          </thead>
          <tbody>{rowItems}</tbody>
          <tfoot>
            <RowItem>{colBottomHeaders}</RowItem>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Board;

import { SquareProps } from "../interfaces/SquareProps";
import Piece from "./Piece";

// a square can have a piece or not
const Square = (squareProps: SquareProps) => {
  const bgColor = "bg-" + squareProps.color;
  const pieceProps = squareProps.piece;
  console.log(squareProps);
  return (
    <div
      className={bgColor}
      data-index={squareProps.index}
      data-y={squareProps.position.y}
      data-x={squareProps.position.x}
      data-id={squareProps.id}
    >
      <Piece key={`${squareProps.id}`} {...pieceProps}></Piece>
    </div>
  );
};

export default Square;

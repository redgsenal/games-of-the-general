import { SquareProps } from "../interfaces/SquareProps";
import Piece from "./Piece";

const Square = (squareProps: SquareProps) => {
  const bgColor = "bg-" + squareProps.color;
  const pieceProps = squareProps.piece;
  return (
    <>
      {/* {console.log("square:", squareProps)} */}
      <div
        className={bgColor}
        data-index={squareProps.index}
        data-y={squareProps.position.y}
        data-x={squareProps.position.x}
        data-id={squareProps.id}
      >
        <Piece {...pieceProps}></Piece>
      </div>
    </>
  );
};

export default Square;

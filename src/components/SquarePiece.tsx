import { SquareProps } from "../interfaces/SquareProps";
import Square from "./Square";

const SquarePiece = (squareProps: SquareProps) => {
  return (
    <td>
      <div className="piece-square" key={`${squareProps.id}`}>
        <Square {...squareProps} />
      </div>
    </td>
  );
};

export default SquarePiece;

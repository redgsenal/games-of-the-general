import { SquareProps } from "../interfaces/SquareProps";

const Square = (squareProps: SquareProps) => {
  return <>{console.log("square:", squareProps)}</>;
};

export default Square;

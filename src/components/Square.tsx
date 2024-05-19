import { SquareProps } from "../interfaces/SquareProps";

const Square = (squareProps: SquareProps) => {
  const bgColor = "bg-" + squareProps.color;
  return (
    <>
      {/* {console.log("square:", squareProps)} */}
      <div
        className={bgColor}
        data-index={squareProps.index}
        data-y={squareProps.position.y}
        data-x={squareProps.position.x}
        data-id={squareProps.id}
      ></div>
    </>
  );
};

export default Square;

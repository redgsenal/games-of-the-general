import { SquareProps } from "../interfaces/SquareProps";

const Square = (squareProps: SquareProps) => {
  const bgColor = "bg-" + squareProps.color;
  return (
    <>
      {console.log("square:", squareProps)}
      <div
        className={bgColor}
        data-index={squareProps.index}
        data-x={squareProps.position.x}
        data-y={squareProps.position.y}
        data-id={squareProps.id}
      ></div>
    </>
  );
};

export default Square;

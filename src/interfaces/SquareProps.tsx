import { PieceProps } from "./PieceProps";
import { PositionProps } from "./PositionProps";

export interface SquareProps {
  id: string;
  index: 0 | number;
  position: PositionProps;
  color?: "black" | string;
  border?: "white" | string;
  width?: 10 | number;
  height?: 10 | number;
  piece: PieceProps;
  isOccupied: boolean;
}

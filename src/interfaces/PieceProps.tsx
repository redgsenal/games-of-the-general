import { PositionProps } from "./PositionProps";

export interface PieceProps {
  name?: "Private" | string;
  team?: "black" | "white" | string;
  rankValue?: -1 | number;
  pieceValue?: -1 | number;
  position?: PositionProps;
}

import { PlayerProps } from "./PlayerProps";
import { SquareProps } from "./SquareProps";

export interface BoardProps {
  squares: SquareProps[];
  players: PlayerProps[];
}

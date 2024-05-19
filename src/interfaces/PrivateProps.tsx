import { PieceProps } from "./PieceProps";

export interface PrivateProps extends PieceProps {
  id?: "private-1";
  name?: "Private";
  rankValue?: 1;
  pieceValue?: 1;
}

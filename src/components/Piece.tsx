import { PieceProps } from "../interfaces/PieceProps";

const Piece = (pieceProps: PieceProps) => {
  const bgTeamRank = pieceProps.team + " " + pieceProps.name;
  return (
    <>
      {console.log(pieceProps)}
      <div className={`piece ${bgTeamRank}`}>
        <label>{pieceProps.name}</label>
      </div>
    </>
  );
};

export default Piece;

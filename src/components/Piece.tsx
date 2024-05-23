import { PieceProps } from "../interfaces/PieceProps";

const Piece = (pieceProps: PieceProps) => {
  const bgTeamRank =
    "rank-" + pieceProps.rankCode?.toLocaleLowerCase() + " " + pieceProps.team;

  const bgInsignia = pieceProps.insignia;
  return (
    <>
      {console.log(pieceProps)}
      <div
        className={`piece ${bgTeamRank}`}
        style={{
          backgroundImage: `url(${bgInsignia}`,
        }}
      >
        <label>{pieceProps.rankCode}</label>
      </div>
    </>
  );
};

export default Piece;

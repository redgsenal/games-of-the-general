export interface PlayerProps {
  firstName: string;
  lastName: string;
  playerName: string;
  isOnPlay: boolean;
  team: Teams; // black / white
}

export enum Teams {
  BLACK,
  WHITE,
}

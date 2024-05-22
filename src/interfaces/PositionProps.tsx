export interface PositionProps {
  x?: -1 | number;
  y?: -1 | number;
  isSamePosition: (position: PositionProps) => boolean;
}

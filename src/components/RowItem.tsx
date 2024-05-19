import { ChildrenProps } from "../interfaces/ChildrenProps";

const RowItem = ({ children }: ChildrenProps) => {
  return <tr>{children}</tr>;
};

export default RowItem;

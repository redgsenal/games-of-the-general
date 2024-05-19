import { ChildrenProps } from "../interfaces/ChildrenProps";

const ColItem = ({ children }: ChildrenProps) => {
  return <td>{children}</td>;
};

export default ColItem;

import type { ReactElement } from "react";

type HeadingProps = { title: string };
export const Heading = ({ title }: HeadingProps): ReactElement => {
  return <div>{title}</div>;
};

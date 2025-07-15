import type { ReactNode } from "react";

type PropList<T> = {
  items: T[];
  render: (item: T) => ReactNode;
};

export const List = <T,>({ items, render }: PropList<T>) => {
  return (
    <ul>
      {items.map((item, i) => {
        return <li key={i}>{render(item)}</li>;
      })}
    </ul>
  );
};

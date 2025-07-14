import React, { type ReactElement, type ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
};

export const Section = ({
  title = "Hello World",
  children,
}: SectionProps): ReactElement => {
  return (
    <section>
      <p>{title}</p>
      <p>{children}</p>
    </section>
  );
};

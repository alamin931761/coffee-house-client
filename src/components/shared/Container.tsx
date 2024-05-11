import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="pt-16">{children}</div>;
};

export default Container;

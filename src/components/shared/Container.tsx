import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="lg:p-24 p-5">{children}</div>;
};

export default Container;

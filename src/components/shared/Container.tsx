import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="lg:px-24 px-5 py-8">{children}</div>;
};

export default Container;

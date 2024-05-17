import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="px-16 py-8">{children}</div>;
};

export default Container;

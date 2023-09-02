import { PropsWithChildren } from "react";

export default function PanelLayout({ children }: PropsWithChildren<unknown>) {
  return <div className="max-w-2xl mt-48 mb-16 mx-auto">{children}</div>;
}

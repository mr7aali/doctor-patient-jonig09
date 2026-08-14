import type { ReactNode } from "react";
import { Header } from "../_components/SiteChrome";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

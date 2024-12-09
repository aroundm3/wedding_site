import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="m-auto !min-w-[280px] !max-w-[520px] bg-[#ECE0D4]">
      {children}
    </div>
  );
}

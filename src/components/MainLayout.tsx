import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="m-auto !min-w-[280px] !max-w-[560px] bg-[#ECE0D4]">
      {children}
    </div>
  );
}

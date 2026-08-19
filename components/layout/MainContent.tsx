"use client";

import { usePathname } from "next/navigation";

export default function MainContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div
      className={`
        min-h-screen
        ${isHomePage ? "" : "pt-[72px] sm:pt-[82px] lg:pt-[112px]"}
      `}
    >
      {children}
    </div>
  );
}

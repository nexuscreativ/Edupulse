import type { Metadata } from "next";
import { ReactNode } from "react"
import "./globals.css";

export const metadata: Metadata = {
  title: "EduPulse AI",
  description: "Smart School Operating System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

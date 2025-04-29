import type { Metadata } from "next";
import Provider from "./provider"
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Clinical Simulation",
  description: "Clinical Simulation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <Provider>{children}</Provider>
      </body>
    </html>
  );
}

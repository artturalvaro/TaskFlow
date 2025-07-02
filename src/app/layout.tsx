import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TaskFlow",
  description: "sistema de gerenciamento de tarefas (To-Do App)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
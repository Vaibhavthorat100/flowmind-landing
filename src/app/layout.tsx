import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowMind – Your Intelligent Productivity Assistant",
  description:
    "Manage tasks, reminders, calendars, and notes through a simple chat interface powered by AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#020617] text-white antialiased">
        {children}
      </body>
    </html>
  );
}

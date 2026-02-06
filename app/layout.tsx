import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wisdom Kinoti - AI Security Architect",
  description: "Architect of Agentic AI Systems | IBM Cybersecurity Specialist",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white font-sans">
        {children}
      </body>
    </html>
  );
}

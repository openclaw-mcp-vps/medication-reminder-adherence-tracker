import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedTrack – Smart Medication Adherence Tracker",
  description: "Track medications with photo verification and family alerts. Never miss a dose again."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b95f1a62-ec21-4f8d-8b5f-ba35aec1a7ba"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}

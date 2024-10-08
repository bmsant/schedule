import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";


const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Paris021",
  description: "Conexion Rio de Janeiro et Paris",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col`}
      >
        <nav className="bg-gray-800 p-4 flex justify-between items-center">
          <div className="text-white text-lg">Paris021</div>
          <div className="flex gap-4">
            <a href="/" className="text-white">
              Home
            </a>
            <a href="/dashboard" className="text-white">
              Dashboard
            </a>
          </div>
        </nav>
        <section className="flex-1 p-4">{children}</section>
        <footer className="bg-gray-800 p-4 text-center text-white">
          © 2023 Paris021
        </footer>
      </body>
    </html>
  );
}

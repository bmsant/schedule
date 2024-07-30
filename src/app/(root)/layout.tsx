import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Paris021",
  description: "Conexion Rio de Janeiro et Paris",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col`}>
        <nav className="w-full bg-gray-800 p-4 flex justify-end gap-4">
          <a href="/" className="text-white">
            Home
          </a>
          <a href="/about" className="text-white">
            About
          </a>
          <a href="/contact" className="text-white">
            Contact
          </a>
        </nav>
        <header className="text-center my-4">
          <h1 className="text-3xl font-bold">Paris021</h1>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center min-h-full">
          {children}
        </main>
        <footer className="w-full bg-gray-800 p-4 flex justify-end">
          <a href="/dashboard" className="text-white">
            Dashboard
          </a>
        </footer>
      </body>
    </html>
  );
}
import type { Metadata } from "next";

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
      <body>
        <nav></nav>
        <section>{children}</section>
        <footer></footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import { Navbar } from "@/src/components/ui/Navbar";
import Footer from "@/src/components/ui/Footer-section";

export const metadata: Metadata = {
  title: "Optivance - Documentation",
  description: "Documentation | Dependency Analysis Extension",
};

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased scroll-smooth bg-black text-white">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

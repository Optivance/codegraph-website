import type { Metadata } from "next";
import { CodeGraphNavbar } from "@/src/components/ui/CodeGraphNavbar";
import { ThemeProvider } from "@/src/components/theme-provider";

export const metadata: Metadata = {
  title: "CodeGraph - Documentation",
  description: "Documentation | Code Dependency Visualization Tool",
};

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased scroll-smooth bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CodeGraphNavbar />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

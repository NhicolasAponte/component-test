import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/themes/theme-provider";
import { ThemeToggle } from "@/components/themes/ThemeToggle";
import MainHeader from "@/components/nav/main-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Component Library",
  description: "General app for testing components, layouts, and styles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-screen">
            <MainHeader />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

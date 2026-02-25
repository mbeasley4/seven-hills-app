import type { Metadata } from "next";
import "@/styles/global.css";  
import Navigation from "@/components/ui/Navigation";
import SiteFooter from "@/components/ui/SiteFooter";

export const metadata: Metadata = {
  title: { default: "The Seven Hills School", template: "%s | Seven Hills" },
  description: "A K–12 independent school in Cincinnati, Ohio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navigation />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

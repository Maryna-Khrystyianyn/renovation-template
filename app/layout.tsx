import type { Metadata } from "next";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site.config";
import Header from "@/components/layout/header";
import {company} from "@/content/company";

export const metadata: Metadata = {
  title: company.name,
  description: company.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={siteConfig.locale}
      data-theme={siteConfig.theme}
      data-mode={siteConfig.mode}
    >
       <body className="bg-bg text-text">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
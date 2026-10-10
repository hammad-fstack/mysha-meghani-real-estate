
import "./globals.css";
import Header from "@/components/layout/Header";
import { SITE_CONFIG } from "@/config/site-config";

export const metadata = {
  title: {
    default: SITE_CONFIG.brandName,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description:
    `Explore premium rental properties, properties for sale, and real estate development projects with ${SITE_CONFIG.brandName}.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

import { Inter, Space_Grotesk } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata = {
  title: "MABKET | Smart Business Management for Modern SMEs",
  description: "Manage your orders, inventory, and finances in one playful yet powerful platform. Join the MABKET waitlist for smarter business management.",
  keywords: ["business management", "SME tools", "inventory tracking", "order management", "MABKET"],
  icons: {
    icon: "/image/logo.png",
    apple: "/image/logo.png",
  },
  openGraph: {
    title: "MABKET | Smart Business Management for Modern SMEs",
    description: "Manage your orders, inventory, and finances in one playful yet powerful platform. Join the MABKET waitlist for smarter business management.",
    images: [
      {
        url: "/image/logo.png",
        width: 1200,
        height: 630,
        alt: "MABKET Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MABKET | Smart Business Management for Modern SMEs",
    description: "Manage your orders, inventory, and finances in one playful yet powerful platform.",
    images: ["/image/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

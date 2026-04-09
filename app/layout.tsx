import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jef2026.netlify.app'), 
  
  title: "JEF 2026 | BUE FLLAC",
  description: "L'aventure continue ! 7 bus, une destination mystère, une ambiance légendaire. Génère ton visuel dès maintenant.",
  
  icons: {
    icon: '/logojeff.png',
    shortcut: '/logojeff.png',
    apple: '/logojeff.png',
  },

  openGraph: {
    title: "JEF 2026 | BUE FLLAC",
    description: "Rejoignez l'excursion la plus attendue de l'année.",
    images: ['/logojeff.png'],
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "JEF 2026 | BUE FLLAC",
    description: "L'aventure continue !",
    images: ['/logojeff.png'],
  },
};

// C'est cette partie "export default" qui manquait peut-être de clarté pour Next.js
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-jef-dark overflow-x-hidden">
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
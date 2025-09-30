import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/footer/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons:{
    icon: "/profile_pic.jpeg"
  },
  "title": "Aibn Che | Full-Stack & Mobile Developer",
  "description": "Portfolio of Aibn Che – showcasing full-stack web and mobile applications built with ReactJS, Node.js, and Flutter. Explore projects focused on clean architecture, performance, and user experience."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/profile_pic.jpeg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {/* ...existing code... */}
          {children}
          <Footer/>
      </body>
    </html>
  );
}

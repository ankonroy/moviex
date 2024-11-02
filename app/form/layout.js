import localFont from "next/font/local";

import Navbar from "@/components/navbar";
import Logo from "@/components/logo";
import Modebtn from "@/components/modebtn";
import Link from "next/link";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <section className="h-screen dark:bg-gray-900 dark:text-gray-100">
          <Navbar>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:outline-none">
                  Go Back
                </button>
              </Link>
            </div>
            <Modebtn />
          </Navbar>
          {children}
        </section>
      </body>
    </html>
  );
}

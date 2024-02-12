import type { Metadata } from "next"
import { Inter } from "next/font/google"
import App from "@/app/(infrastructure)/_components/App/App"
import Header from "@/app/(infrastructure)/_components/Header/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Oquli"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body 
        className={inter.className}
      >
        <App>
          <Header />
          {children}  
        </App>
      </body>
    </html>
  );
}

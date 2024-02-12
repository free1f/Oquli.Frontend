import type { Metadata } from "next"
import App from "@/app/(infrastructure)/_components/App/App"
import Header from "@/app/(infrastructure)/_components/Header/Header"

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
      <body>
        <App>
          <Header />
          {children}  
        </App>
      </body>
    </html>
  );
}

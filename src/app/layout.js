import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import "./globals.css"
import { Inter, Roboto, Poppins } from 'next/font/google'
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
// import Image from "next/image";
// import styles from "./layout.module.css";
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Shubham Singh | Portfolio',
  description: 'Portfolio Website of Shubham Singh',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

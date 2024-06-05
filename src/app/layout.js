import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Theme";
import Footer from "../Footer/page";
import Navbar from "../Navbar/page";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WDaley Photography",
  description: "Generated by WDaley",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <ThemeProvider theme={theme}>
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
      <Footer />
    </html>
  );
}
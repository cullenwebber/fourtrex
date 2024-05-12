import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { neueMontreal } from "@/components/fonts";
import "./globals.css";

export const metadata = {
  title: "Fourtrex Engineering",
  description: "Experienced Workforce Skilled in Mining & Civil Piping Systems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={neueMontreal.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import Header from "./ui/header/Header";
import Footer from "./ui/footer/Footer";
import { neueMontreal } from "./ui/fonts";
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

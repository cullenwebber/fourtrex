import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from '@/components/Wrapper';
import "./globals.css";

export const metadata = {
  title: "Fourtrex Engineering",
  description: "Experienced Workforce Skilled in Mining & Civil Piping Systems",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Wrapper>
        <Header />
        {children}
        <Footer />
      </Wrapper>
    </html>
  );
}

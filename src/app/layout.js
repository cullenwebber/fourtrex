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
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
      </head>
      <Wrapper>
        <Header />
        {children}
        <Footer />
      </Wrapper>
    </html>
  );
}

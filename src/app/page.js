import About from "./components/About";
import Hero from "./components/Hero";
import Services from "./components/Services";
import styles from "./page.module.css";
import { yapari } from "@/components/fonts";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
    </main>
  );
}

import About from "./components/About";
import Hero from "./components/Hero";
import Services from "./components/Services";
import styles from "./page.module.css";
import { yapari } from "@/components/fonts";
import gsap from "gsap";

export default function Home() {

  gsap.config({
    force3D: true,
  });

  return (
    <main>
      <Hero />
      <About />
      <Services />
    </main>
  );
}

import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}

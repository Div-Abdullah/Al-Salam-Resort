import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroImage from "./components/Heroimage";
import Bar from "./components/Bar"
import About from "./components/About";
import Packages from "./components/Packages";
import Reviews from "./components/Reviews";
import Callus from "./components/Callus";
import Offers from "./components/Offers";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero/>
      <HeroImage/>
      <Bar/>
      <About/>
      <Packages/>
      <Reviews/>
      <Callus />
      <Offers />
      <Footer/>
    </main>
  );
}

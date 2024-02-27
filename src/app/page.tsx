import Hero from "./sections/Hero";
import Whyus from "./sections/Whyus";
import Gallery from "./sections/Gallery";
import Benefits from "./sections/Benefits";
import CallToAction from "./sections/CallToAction";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <Whyus />
      <Gallery />
      <Benefits />
      <CallToAction />
    </main>
  );
}

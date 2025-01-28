import Hero from "../components/Hero";
import Causes from "../components/Causes";
import AboutSection from "../components/about/AboutSection";
import ContactSection from "../components/contact/ContactSection";
import NewsScroller from "../components/headline";
import Stats from "../components/Stats";
import Event from "./events";
import MapSection from "../components/map/MapSection";
import WhoWeAre from "../components/WhoweAre";

const Home = () => {
  return (
    <>
      <NewsScroller />
      <Hero />
      <WhoWeAre/>
      <AboutSection />
      <Causes />
      <Stats />
      <Event />
      <ContactSection />
      <MapSection />
    </>
  );
};

export default Home;

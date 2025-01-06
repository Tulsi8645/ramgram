import About from "../components/About"
import AboutSection from "../components/about/AboutSection"
import JourneySection from "../components/journey/JourneySection"
import Stats from "../components/Stats"
import CoreServices from "../components/CoreServices"
import TeamSection from "../components/Teams"


const AboutPage = () => {
  return (
    <>
      <JourneySection />
      <CoreServices />
      <About />
      <TeamSection />
      <AboutSection />
      <Stats />
    </>
  );
}

export default AboutPage
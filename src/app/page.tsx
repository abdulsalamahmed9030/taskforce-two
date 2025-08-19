import AboutOurOrganization from "./components/AboutOurOrganization";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LatestProjects from "./components/LatestProjects";
import OurTeam from "./components/OurTeam";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      
      <Hero />
      <AboutOurOrganization />
      <AboutUs />
      <LatestProjects />
      <Services />
      <OurTeam />
      <ContactUs />
      <Footer />
    </>
  );
}

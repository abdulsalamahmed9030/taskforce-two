import AboutOurOrganization from "./components/AboutOurOrganization";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LatestProjects from "./components/LatestProjects";
import OurTeam from "./components/OurTeam";
import Preloader from "./components/Preloader";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
    <Preloader />
      <Hero />
      <AboutOurOrganization />
      <WhyChooseUs />
      <LatestProjects />
      <Services />
      <OurTeam />
      <ContactUs />
      <Footer />
    </>
  );
}

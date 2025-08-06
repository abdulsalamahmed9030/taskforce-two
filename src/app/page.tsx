import AboutOurOrganization from "./components/AboutOurOrganization";
import CompleteRangeOfServices from "./components/CompleteRangeOfServices";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import LatestProjects from "./components/LatestProjects";
import OurTeam from "./components/OurTeam";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return (
    <>
    <Hero />
    <AboutOurOrganization />
    <WhyChooseUs />
    <LatestProjects />
    <Services />
    <CompleteRangeOfServices />
    <Gallery />
    <OurTeam />
    <ContactUs />
    <Footer />
    </>
  );
}

import AboutOurOrganization from "./components/AboutOurOrganization";
import CompleteRangeOfServices from "./components/CompleteRangeOfServices";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LatestProjects from "./components/LatestProjects";
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
    <Footer />
    </>
  );
}

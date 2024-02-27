import Landing from "./components/Landing";
import AboutUs from "./sections/AboutUs";
import ContactUs from "./sections/ContactUs";
import Foooter from "./sections/Foooter";
import OurStory from "./sections/OurStory";
import OurTeams from "./sections/OurTeams";
import Processes from "./sections/Processes";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <>
      <div className="">
        <Landing />
        <AboutUs />
        <Services />
        <Processes />
        <OurStory />
        <OurTeams />
        <Testimonials />
        <ContactUs />
        <Foooter />
      </div>
    </>
  );
}

export default App;

import NavBar from "../components/NavBar";
import DownloadSection from "../sections/DownloadSection";
import FeatureSection from "../sections/FeatureSection";
import TechSection from "../sections/TechSection";
import DeveloperSection from "../sections/DeveloperSection";
import ContactSection from "../sections/ContactSection";

function HomePage() {
  return (
    <>
      <NavBar />

      <div className="w-full flex flex-col items-center scroll-smooth mt-[4rem]">
        <section id="download">
          <DownloadSection />
        </section>

        <section id="features">
          <FeatureSection />
        </section>

        <section id="tech">
          <TechSection />
        </section>

        <section id="developers">
          <DeveloperSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </div>
    </>
  );
}

export default HomePage;

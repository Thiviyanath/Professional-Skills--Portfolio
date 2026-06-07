import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ModuleOverview from "./components/ModuleOverview";
import GuestLecturers from "./components/GuestLecturers";
import Timeline from "./components/Timeline";
import Reflection from "./components/Reflection";
import Stats from "./components/Stats";
import SkillsDashboard from "./components/SkillsDashboard";
import VivaNotes from "./components/VivaNotes";
import EvidenceGallery from "./components/EvidenceGallery";
import Footer from "./components/Footer";
import TransformationJourney from "./components/TransformationJourney";
import Achievements from "./components/Achievements";
import IndustryReadiness from "./components/IndustryReadiness";
import AnimatedBackground from "./components/AnimatedBackground";
import LectureHighlights from "./components/LectureHighlights";
import CSRShowcase from "./components/CSRShowcase";
import CSRGallery from "./components/CSRGallery";

function App() {
  return (
    <>
      <LectureHighlights />
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <AboutMe />
      <ModuleOverview />
      <GuestLecturers />
      <Timeline />
      <Reflection />
      <Stats />
      <SkillsDashboard />
      <VivaNotes />
      <EvidenceGallery />
      <CSRGallery />
      <CSRShowcase />
      <Footer />
      <TransformationJourney />
      <Achievements />
      <IndustryReadiness />
    </>
  );
}

export default App;
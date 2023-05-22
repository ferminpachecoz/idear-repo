import EquipoSection from "../components/EquipoSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IdearTigre from "../components/IdearTigre";
import MainBanner from "../components/MainBanner";
import Mision from "../components/Mision";
import OdsSection from "../components/OdsSection";

function Home() {
  return (
    <div>
      <Header />
      <MainBanner />
      <Mision />
      <OdsSection />
      <EquipoSection />
      <Footer />
    </div>
  );
}

export default Home;

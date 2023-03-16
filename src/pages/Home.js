import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IdearTigre from "../components/IdearTigre";
import MainBanner from "../components/MainBanner";
import Mision from "../components/Mision";

function Home() {
  return (
    <div>
      <Header />
      <MainBanner />
      <Mision />
      <IdearTigre />
      <Contacto />
      <Footer />
    </div>
  );
}

export default Home;

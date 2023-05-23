import EquipoSection from "../components/EquipoSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IdearTigre from "../components/IdearTigre";
import MainBanner from "../components/MainBanner";
import Mision from "../components/Mision";
import OdsSection from "../components/OdsSection";

function Home() {
  let equipo = [
    {
      image: "icons/blank-profile.png",
      name: "Carlos Fernandez",
      trabajo: "Abogado"
    },
    {
      image: "icons/blank-profile.png",
      name: "Matias Ortiz",
      trabajo: "Ingeniero Industrial"
    },
    {
      image: "icons/blank-profile.png",
      name: "Martina Fernandez",
      trabajo: "Publicista"
    },
    {
      image: "icons/blank-profile.png",
      name: "Mateo Rodriguez",
      trabajo: "Marketing Digital"
    },
  ]
  return (
    <div>
      <Header />
      <MainBanner />
      <Mision />
      <OdsSection />
      <EquipoSection equipo={equipo} title="Nuestro Equipo" subtitle="Reuniendo el talento más destacado y la vasta experiencia en el campo de las obras públicas, nuestro equipo de expertos está comprometido en impulsar una transformación significativa en el sector" />
      <EquipoSection equipo={equipo} title="Colaboradores" subtitle="En Idear, nos enorgullece contar con una red de colaboradores talentosos y comprometidos. Junto a ellos, establecemos alianzas estratégicas que nos permiten llevar a cabo nuestra visión de desarrollo sostenible. Con sus habilidades y experiencia diversa, estos socios clave son piezas fundamentales en nuestra misión de transformar ciudades y regiones" />
      <EquipoSection equipo={equipo} title="Socios" subtitle="Aliados de prestigio se unen a Idear, compartiendo nuestra visión transformadora. Referentes políticos y destacadas personalidades aportan su apoyo invaluable para potenciar nuestras iniciativas de cambio y sostenibilidad." />
      <Footer />
    </div>
  );
}

export default Home;

import HomePage from "@/pages/home/Index";
import BandPage from "@/pages/band/Index";
import Topbar from "@/components/topbar/Topbar";
import AgendaPage from "@/pages/agenda/Index";
import ContactPage from "@/pages/contact/Index";
import Footer from "@/components/footer/Footer";

export default function HomeComponent() {
  return (
    <div>
      <Topbar />
      <div id="home">
        <HomePage />
      </div>
      <div id="banda">
        <BandPage />
      </div>
      <div id="agenda">
        <AgendaPage />
      </div>
      <div id="contato">
        <ContactPage />
      </div>
      <div id="footer">
        <Footer />
      </div>

    </div>

  );
}
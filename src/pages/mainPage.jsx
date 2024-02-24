import Header from "../components/Header";
import Footer from "../components/Footer";
import MainHello from '../components/MainHello';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import News from '../components/News';

export default function MainPage() {
  return(
    <div>
      <Header/>
      <MainHello/>
      <Services/>
      <AboutUs/>
      <News/>
      <Footer/>
    </div>
  )
}
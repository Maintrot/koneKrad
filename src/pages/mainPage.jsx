import Header from "../components/header";
import Footer from "../components/footer";
import MainHello from '../components/mainHello';
import Services from '../components/services';
import AboutUs from '../components/aboutUs';
import News from '../components/news';

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
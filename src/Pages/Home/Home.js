import HotData from "../../Data/HotData";
import NewArrivalsData from "../../Data/NewArrivalsData";
import SeasonSaleData from "../../Data/SeasonSaleData"
import { Footer, Header, HomeHero, Popular, Yeezy } from "../../Section"
import SaleData from "./../../Data/SaleData";

const Home = () => {
  return (
    <>
      <Header/>
      <HomeHero/>
      <SeasonSaleData/>  {/* for calling all seasonSale : seasonSaleData>SeasonSale>CarouselSlider>seasonSaleCard  */}
      <Yeezy/>
      <Popular/>
      <SaleData/>
      <NewArrivalsData/>
      <HotData/>
      <Footer/>
    </>
  )
}

export default Home

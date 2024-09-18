
import { CarouselSliderSale, SeasonSaleCard, SectionHeader, SectionWrapper } from '../../Components';
// import SeasonSaleData from '../../Data/SeasonSaleData';

const SeasonSale = ({items,children}) => {


  return (
    <SectionWrapper>
      <SectionHeader>{children}</SectionHeader>
     <CarouselSliderSale items={items}>
                <SeasonSaleCard items={items}/>
      </CarouselSliderSale>
    </SectionWrapper>
  );
};

export default SeasonSale;

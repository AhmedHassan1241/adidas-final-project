import {
  CardContainer,
  IndicatorButton,
  SeasonSaleCard,
  SectionHeader,
  SectionWrapper,
} from "../../Components";
import SeasonSaleData from "../../Data/SeasonSaleData";
import styles from "./SeasonSale.module.css";

const SeasonSale = () => {
  const cardData = SeasonSaleData.map((card) => {
    return <SeasonSaleCard key={card.id} data={card} />;
  });

  return (
    <>
      <SectionWrapper>
        <SectionHeader>End Of Season Sale</SectionHeader>
        <CardContainer>{cardData}</CardContainer>
        {/* <!-- Carousel-indicators --> */}
        <div
          className={`mt-5 ${styles["Carousel-indicators"]} w-25 mx-auto d-flex justify-content-evenly`}
        >
          <IndicatorButton acive={"activeCurs"} />
          <IndicatorButton />
        </div>
        {/* <!-- Carousel-indicators --> */}
      </SectionWrapper>
      {/* <!-- END OF SEASON SALE -->  */}
    </>
  );
};

export default SeasonSale;

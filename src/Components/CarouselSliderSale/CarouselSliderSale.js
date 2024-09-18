import React, {useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from 'react-icons/fa';

const CarouselSliderSale = ({items,children}) => {
  
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex(-1);
  };

  const handlePrev = () => {
    setActiveIndex(.25);
  };
  return (
    <>
 <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-inner d-flex overflow-visible" style={{ transition: 'transform 0.5s ease-in-out', transform: `translateX(${activeIndex* 12}%)`}}>
                    {children}
                    </div>
        <button className="carousel-control-prev d-lg-block" style={{position:"absolute",left:"0",bottom:"35%"}} id="previous" type="button" onClick={handlePrev}>
        <FaArrowLeft className="fa-solid fa-arrow-right-long" aria-hidden="true" style={{ fontSize: '50px', backgroundColor: '#FFFFFF', color: '#000', padding: '8px', border: '2px solid #000',display:`${activeIndex>=0?"none":" "}`}}></FaArrowLeft>
        </button>
        <button className="carousel-control-next d-lg-block" style={{position:"absolute",right:"0" ,bottom:"35%"}} id="Next" type="button" onClick={handleNext}>
          <FaArrowRight className="fa-solid fa-arrow-right-long" aria-hidden="true" style={{ fontSize: '50px', backgroundColor: '#FFFFFF', color: '#000', padding: '8px', border: '2px solid #000',display:`${activeIndex<0?"none":" "}` }}></FaArrowRight>
        </button>

        {/* Carousel Indicators */}
        <div className="Carousel-indicators mt-5" style={{width: "10%",margin: "0 auto", display: "flex",justifyContent: "space-between"}}>
          {/* {items.map((_, index) => ( */}
            <button
              // key={index}
              type="button"
              className={activeIndex <=0? ' w-25 h-50' : ''}
              style={{ backgroundColor: '#000', width:"10px",height:"5px" }}
              onClick={() => setActiveIndex(.25)}
            ></button>
             <button
              // key={index}
              type="button"
              className={activeIndex>=0 ? ' w-25' : ''}
              style={{ backgroundColor: '#000',width:"10px",height:"5px" }}
              onClick={() => setActiveIndex(-1)}
            ></button>
          {/* ))} */}
        </div>
        {/* End of Carousel Indicators */}
      </div>
    </>
  );
};

export default CarouselSliderSale;



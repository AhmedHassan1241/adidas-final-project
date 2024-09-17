import React, { useState } from 'react';
import jacket from '../../Assets/Images/jacket.jpg';
import shoes from '../../Assets/Images/shoes.jpg';
import shoWhite from '../../Assets/Images/sho-white.jpg';
import sho from '../../Assets/Images/sho.jpg';
import tShirt from '../../Assets/Images/tShirt.jpg';
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from 'react-icons/fa';
// import "./CardContainer.module.css"



const CardContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      img: jacket,
      title: 'SPORTSWEAR',
      description: 'Elevate your active lifestyle and workouts with up to 50% off',
    },
    {
      img: shoes,
      title: 'SHOES',
      description: 'Bring home our best-selling shoes with up to 50% off',
    },
    {
      img: shoWhite,
      title: 'ORIGINALS',
      description: 'Make a bold statement with our Originals collection with up to 50% off',
    },
    {
      img: sho,
      title: 'SLIDES',
      description: 'Effortless style, unmatched comfort, and vibrant designs.',
    },
    {
      img: tShirt,
      title: 'KIDS COLLECTION',
      description: 'Save big on our best-selling kids apparel, shoes, and slides.',
    },
   
  ];

  const handleNext = () => {
    setActiveIndex(-1);
  };

  const handlePrev = () => {
    setActiveIndex(.25);
  };

  return (
    <div className="container-fluid" style={{ paddingTop: '5rem', paddingBottom: '5rem',position: 'relative', overflow: 'hidden' }}>
      <h2 className="mb-3 ms-3">END OF SEASON SALE</h2>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-inner d-flex overflow-visible" style={{ transition: 'transform 0.5s ease-in-out', transform: `translateX(${activeIndex* 12}%)`}}>
                {items.map((item, index) => (
                  <div key={index} className="carousel-items mx-auto" style={{ flex: "1 0 23%", marginRight: "2.5%", marginLeft: "2.5%"}}>
                    <div className='text-center'>
                    <img src={item.img} className="w-75 h-75" alt={item.title} />
                    </div>
                    <div className="title1 text-center mt-3 w-75 mx-auto">
                      <h6 style={{ fontSize: '16px',fontWeight:"bold" }}>{item.title}</h6>
                      <p style={{ fontWeight: 300, fontSize: '15px' }} className="mb-2">{item.description}</p>
                      <a href="#." style={{ color: '#000', fontSize: '14px' ,cursor:"pointer",fontWeight:"bold"}}><u>SHOP NOW</u></a>
                    </div>
                  </div>
                ))}
        </div>
        <button className="carousel-control-prev d-lg-block" style={{position:"absolute",left:"0",bottom:"35%"}} id="previous" type="button" onClick={handlePrev}>
        <FaArrowLeft className="fa-solid fa-arrow-right-long" aria-hidden="true" style={{ fontSize: '50px', backgroundColor: '#FFFFFF', color: '#000', padding: '8px', border: '2px solid #000',display:`${activeIndex>=0?"none":" "}`}}></FaArrowLeft>
        </button>
        <button className="carousel-control-next d-lg-block" style={{position:"absolute",right:"0" ,bottom:"35%"}} id="Next" type="button" onClick={handleNext}>
          <FaArrowRight className="fa-solid fa-arrow-right-long" aria-hidden="true" style={{ fontSize: '50px', backgroundColor: '#FFFFFF', color: '#000', padding: '8px', border: '2px solid #000',display:`${activeIndex<0?"none":" "}` }}></FaArrowRight>
        </button>

        {/* Carousel Indicators */}
        <div className="Carousel-indicators mt-5" style={{width: "25%",margin: "0 auto", display: "flex",justifyContent: "space-between"}}>
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === activeIndex ? 'activeCurs' : ''}
              style={{ backgroundColor: '#000', border: 'none' }}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>
        {/* End of Carousel Indicators */}
      </div>
    </div>
  );
};

export default CardContainer;



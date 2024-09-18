import React from "react";

const SeasonSaleCard = ({ items = [] }) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className="carousel-items mx-auto"
          style={{ flex: "1 0 23%", marginRight: "2.5%", marginLeft: "2.5%" }}
        >
          {item.img ? (
            <div className="text-center">
              <img src={item.img} className="w-75 h-75" alt={item.title} />
            </div>
          ) : (
            <video class="w-75 h-75" id="vd" autoplay loop muted>
              <source
                id="source"
                src={item.video}
                type="video/mp4"
              />
               Your browser does not support the video tag.

            </video>
          )}
          <div className="title1 text-center mt-3 w-75 mx-auto">
            <h6 style={{ fontSize: "16px", fontWeight: "bold" }}>
              {item.title}
            </h6>
            <p style={{ fontWeight: 300, fontSize: "15px" }} className="mb-2">
              {item.description}
            </p>
            <a
              href="#."
              style={{
                color: "#000",
                fontSize: "14px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              <u>SHOP NOW</u>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default SeasonSaleCard;

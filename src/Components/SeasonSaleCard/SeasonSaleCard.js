import React from "react";

const SeasonSaleCard = ({data}) => {
  return (
    <>
      <div className="">
        <img src={data.img} className="w-100" alt="" />
        <div className="title1 text-center mt-3">
          <h6 style={{ fontSize: "16px" }}>{data.title}</h6>
          <p style={{ fontWeight: "300", fontSize: "15px" }} className="mb-2">
            {data.text}
          </p>
          <a href="#.." style={{ color: "#000", fontSize: "14px" }}>
            <u>SHOP NOW</u>
          </a>
        </div>
      </div>
    </>
  );
};

export default SeasonSaleCard;

import React from "react";
import { SecondaryButton, SectionHeader } from "../../Components";

import arrowImg from "../../Assets/Images/arrow.svg";
import menImg from "../../Assets/Images/men.jpg";
import womenImg from "../../Assets/Images/woman.jpg";
import kidsImg from "../../Assets/Images/kids.jpg";

import styles from "./Popular.module.css";
const Popular = () => {
  return (
    <>
      <div
        className={styles.popular}
        style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        <div className="container-fluid">
          <div className="head pb-3">
            <div className="row">
              <div className="col-12">
                <SectionHeader>POPULAR RIGHT NOW</SectionHeader>
              </div>
            </div>
          </div>
          <div className={styles.data}>
            <div className="row gy-5 gx-4 gx-4">
              <div className="col-lg-4">
                <a href="#." className="text-dark">
                  <h2 className="pb-1 fw-bold">gazelle</h2>
                </a>
              </div>
              <div className="col-lg-4">
                <a href="#." className=" text-dark">
                  <h2 className="pb-1 fw-bold">vI court</h2>
                </a>
              </div>
              <div className="col-lg-4">
                <a href="#." className=" text-dark">
                  <h2 className="pb-1 fw-bold">campus</h2>
                </a>
              </div>
              <div className="col-lg-4">
                <a href="#." className=" text-dark">
                  <h2 className="pb-1 fw-bold">end of season sale</h2>
                </a>
              </div>
              <div className="col-lg-4">
                <a href="#." className=" text-dark">
                  <h2 className="pb-1 fw-bold">ultraboost</h2>
                </a>
              </div>
              <div className="col-lg-4">
                <a href="#." className=" text-dark">
                  <h2 className="pb-1 fw-bold">football</h2>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.images}>
            <div className="row gx-3 gy-3" style={{ marginTop: "6rem" }}>
              <div className="div-img col-md">
                <div
                  style={{
                    position: "relative",
                    backgroundImage: `url(${menImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    height: "300px",
                  }}
                  className="d-flex justify-content-center  align-items-end "
                >
                  <SecondaryButton>Men </SecondaryButton>
                </div>
              </div>
              <div className="div-img col-md">
                <div
                  style={{
                    position: "relative",
                    backgroundImage: `url(${womenImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    height: "300px",
                  }}
                  className="d-flex justify-content-center  align-items-center "
                >
                  <SecondaryButton>WOMENS </SecondaryButton>
                </div>
              </div>
              <div className="div-img col-md">
                <div
                  style={{
                    position: "relative",
                    backgroundImage: `url(${kidsImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    height: "300px",
                  }}
                  className="d-flex justify-content-center  align-items-end "
                >
                  <SecondaryButton>KIDS </SecondaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;

import React from "react";

const SectionHeader = (props) => {
  return (
    <>
      <div
        className="container-fluid"
        style={{ paddingTop: "5.5rem", paddingBottom: "5.5rem" }}
      >{props.children}</div>
    </>
  );
};

export default SectionHeader;

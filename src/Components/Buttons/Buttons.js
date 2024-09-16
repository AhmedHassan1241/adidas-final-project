// import styles from "./Buttons.module.css"
const IndicatorButton = (props) => {
  return (
    <>
      <button
        type="button"
        className={`${props.active}`}
        style={{ backgroundColor: "#000", border: "none" }}
        id="btn2"
      ></button>
    </>
  );
};

export default IndicatorButton;

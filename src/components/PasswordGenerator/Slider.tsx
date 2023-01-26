import ReactSlider from "react-slider";

function Slider() {
  return (
    <>
      <ReactSlider
        className="customSlider"
        thumbClassName="customSlider-thumb"
        trackClassName="customSlider-track"
        min={5}
        max={20}
      />
    </>
  );
}

export default Slider;

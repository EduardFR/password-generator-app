import ReactSlider from "react-slider";

interface SliderType {
  onChange: (e: number) => void;
  value: number;
}
function Slider({ onChange, value }: SliderType) {
  return (
    <>
      <ReactSlider
        className="customSlider"
        thumbClassName="customSlider-thumb"
        trackClassName="customSlider-track"
        value={value}
        min={5}
        max={20}
        onChange={(e) => onChange(e)}
      />
    </>
  );
}

export default Slider;

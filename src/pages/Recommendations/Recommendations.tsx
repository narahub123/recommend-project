import Map from "../../components/Map";
import "./recommendations.css";
import { useLocation } from "react-router-dom";

const Recommendations = () => {
  const { state } = useLocation();

  return (
    <div className="recommendations">
      <div className="recommendations-place-list">추천 장소</div>
      <Map state={state} />
    </div>
  );
};

export default Recommendations;

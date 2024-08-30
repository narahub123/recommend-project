import { useState } from "react";
import Map from "../../components/Map";
import "./recommendations.css";
import { useLocation } from "react-router-dom";
import { handleRadius } from "../../utils/recommendations";

const Recommendations = () => {
  const radiusList: number[] = [100, 150, 200, 250];
  const { state } = useLocation();
  const [openDropdown, setOpenDropdown] = useState(true);
  const [radius, setRadius] = useState(radiusList[0]);

  return (
    <div className="recommendations">
      <div className="recommendations-list">
        <div className="recommendations-list-header">
          <p className="recommendation-list-header-title">추천 장소</p>
          <div className="recommendations-list-header-radius">
            <div className="recommendatinos-list-header-radius-title">
              <span className="recommendatinos-list-header-radius-title-name">
                반경 :
              </span>
              <span
                className="recommendatinos-list-header-radius-title-representative"
                onClick={() => setOpenDropdown(!openDropdown)}
              >
                {radius}m
              </span>
              <ul
                className={`recommendations-list-header-radius-container${
                  openDropdown ? " open" : ""
                }`}
              >
                {radiusList.map((item, idx) => (
                  <li
                    key={idx}
                    className="recommendations-list-header-radius-item"
                    onClick={() =>
                      handleRadius(item, setRadius, setOpenDropdown)
                    }
                  >
                    {item}m
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Map state={state} radius={radius} />
    </div>
  );
};

export default Recommendations;

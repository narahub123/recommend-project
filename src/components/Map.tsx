import { MutableRefObject, useEffect, useRef } from "react";
import { initMap } from "./utils/map";

declare global {
  interface Window {
    kakao: any;
  }

  const kakao: any;
}

interface MapType {
  state: {
    latitude: number;
    longitude: number;
  };
  radius: number;
}

const Map = ({ state, radius }: MapType) => {
  const mapRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    window.kakao.maps.load(() => {
      initMap(state, radius);
    });
  }, [mapRef, state, radius]);

  return (
    <div className="map" id="map" style={{ width: "100%" }}>
      Map
    </div>
  );
};

export default Map;

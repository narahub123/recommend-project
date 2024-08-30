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
}

const Map = ({ state }: MapType) => {
  const mapRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    window.kakao.maps.load(() => {
      initMap(state);
    });
  }, [mapRef, state]);

  return (
    <div className="map" id="map" style={{ width: "100%" }}>
      Map
    </div>
  );
};

export default Map;

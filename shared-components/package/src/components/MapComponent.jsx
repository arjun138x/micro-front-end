import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import data from "../data.json";

const MapComponent = () => {
  useEffect(() => {
    const map = L.map("map").setView([51.505, -0.09], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map
    );

    data.locations.forEach((location) => {
      L.marker([location.lat, location.lng]).addTo(map);
    });

    return () => map.remove();
  }, []);

  return <div id="map" style={{ width: "100%", height: "400px" }} />;
};

export default MapComponent;

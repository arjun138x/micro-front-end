import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import geoJsonData from "./geoJsonData.json";

const GeoJSONMap = () => {
  useEffect(() => {
    // Initialize Map
    const map = L.map("geojson-map").setView([12.9716, 77.5946], 5);

    // Add Tile Layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add GeoJSON Layer
    L.geoJSON(geoJsonData, {
      pointToLayer: (feature, latlng) => {
        return L.circleMarker(latlng, {
          radius: 8,
          fillColor: "blue",
          color: "white",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8,
        });
      },
      style: (feature) => {
        switch (feature.geometry.type) {
          case "LineString":
            return { color: "green", weight: 3, opacity: 0.8 };
          case "MultiLineString":
            return { color: "orange", weight: 3, opacity: 0.8 };
          case "Polygon":
            return { color: "blue", weight: 3, opacity: 0.8 };
          case "MultiPolygon":
            return {
              color: "red",
              weight: 2,
              fillColor: "blue",
              fillOpacity: 0.5,
            };
          default:
            return {};
        }
      },
      onEachFeature: (feature, layer) => {
        layer.on("mouseover", function () {
          this.bindTooltip(
            `<b>${feature.properties.name}</b><br/>${feature.properties.description}`,
            { permanent: false, direction: "top" }
          ).openTooltip();
        });

        layer.on("mouseout", function () {
          this.closeTooltip();
        });
      },
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div id="geojson-map" style={{ height: "500px", width: "100%" }}></div>
  );
};

export default GeoJSONMap;

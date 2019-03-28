import React from "react";
import Marker from "./Marker";
import GoogleMapReact from "google-map-react";

const Map = props => {
  const key = "AIzaSyC0OyV5AleQHaNYkrwPC8q2DegYgSagb5E";
  return (
    <div id="map" style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        center={[props.coords.lat, props.coords.lng]}
        defaultZoom={14}
      >
        <Marker {...props.coords} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;

import React from "react";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { REACT_APP_GOOGLE_MAPS_API_KEY } from "@utils/helpers";

import { mapStyles } from "./mapStyles";
import styles from "./Map.module.scss";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
};

const center = {
  lat: 40.705628,
  lng: -74.047852,
};

const markers = [{ latitude: 40.705628, longitude: -74.047852 }];

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps</div>;

  return (
    <div className={styles.WrapperMap}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        options={options}
      >
        {markers.map((marker, i) => (
          <Marker
            key={i}
            position={{ lat: marker.latitude, lng: marker.longitude }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;

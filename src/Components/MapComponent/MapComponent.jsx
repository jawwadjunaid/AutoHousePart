import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 29.739456895552287, // Change to your desired latitude
  lng:  -95.37666955916286, // Change to your desired longitude
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyACAAZXFGYFY_3Gdkm3NGX1FkG_7M7FrEE">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {/* Marker at center */}
        <Marker position={center}
        icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", // Red marker icon URL
          }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 29.739456895552287, 
  lng: -95.37666955916286, 
};

const MapComponent = () => {
  return (
    <div>
      {/* Google Maps API-based Interactive Map */}
      {/* <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          <Marker
            position={center}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", 
            }}
          />
        </GoogleMap>
      </LoadScript> */}

      {/* Embedded Google Maps Iframe */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.323832055782!2d-95.3793164244268!3d29.739339775078673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf6dbe20420d%3A0x9de6bc0b6f8642c4!2s3402%20San%20Jacinto%20St%2C%20Houston%2C%20TX%2077004%2C%20USA!5e0!3m2!1sen!2s!4v1740682356662!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: "0", width: "100%", maxWidth: "" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapComponent;

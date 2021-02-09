import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const Map = ({ data }) => {

    const mapStyles = {
        height: "50vh",
        width: "100%"
    }

    const defaultCenter = {
        lat: data.lat, lng: data.lng 
    }

    return(
      <LoadScript googleMapsApiKey="AIzaSyBo4zhIPx5-0V6sEm9NVkKk02ZaglYz8ME">
        <GoogleMap 
          mapContainerStyle={mapStyles}
          zoom={9}
          center={defaultCenter}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    )
}

export default Map;
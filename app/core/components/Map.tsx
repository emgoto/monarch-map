import { useEffect } from "react"
import mapbox, { Map as MapboxMap } from "mapbox-gl"
import MapboxGeocoder from "mapbox-gl-geocoder"

const Map = ({ setAddress, setCoords }) => {
  useEffect(() => {
    var map = new MapboxMap({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-122.47825510132367, 37.820072657260425],
      zoom: 10,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
    })

    const geocoder = new MapboxGeocoder({
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      mapboxgl: mapbox,
    })

    geocoder.on("result", ({ result: { center, place_name } }) => {
      setAddress(place_name)
      setCoords(center)
    })

    map.addControl(geocoder)
  }, [])

  return <div id="map" />
}

export default Map

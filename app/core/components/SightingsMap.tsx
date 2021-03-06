import { useEffect, useState, useRef } from "react"
import { Map as MapboxMap } from "mapbox-gl"
import { useQuery } from "blitz"
import getEvents from "../../queries/getEvents"
import { getLastSevenDays } from "../utils"

// Convert New Relic data to geojson format
const eventsToGeoJson = (events, date) => {
  const features = events.map((event) => {
    const { x, y, date } = event
    return {
      type: "Feature",
      properties: {
        date,
      },
      geometry: {
        type: "Point",
        coordinates: [x, y],
      },
    }
  })

  return {
    type: "FeatureCollection",
    features,
  }
}

const SightingsMap = () => {
  const [events] = useQuery(getEvents, undefined)
  const [sliderIndex, setSliderIndex] = useState("6")
  const [loaded, hasLoaded] = useState(false)
  const mapRef = useRef<any>()
  const lastSevenDays = getLastSevenDays().reverse()

  const sliderValue = lastSevenDays[parseInt(sliderIndex)]
  const data = eventsToGeoJson(events?.data.actor.account.nrql.results, sliderValue)
  const filter = ["==", ["string", ["get", "date"]], sliderValue]

  useEffect(() => {
    mapRef.current = new MapboxMap({
      container: "sightings-map",
      style: "mapbox://styles/mapbox/light-v10",
      center: [-122.47825510132367, 37.820072657260425],
      zoom: 12,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
    })

    mapRef.current.on("load", function () {
      hasLoaded(true)
      mapRef.current.addLayer({
        id: "sightings",
        type: "circle",
        source: {
          type: "geojson",
          data,
        },
        paint: {
          "circle-radius": 10,
          "circle-color": "#FBBF24",
          "circle-opacity": 0.5,
        },
      })

      mapRef.current.setFilter("sightings", ["all", filter])
    })
  }, [])

  useEffect(() => {
    if (!loaded) return
    mapRef.current.setFilter("sightings", ["all", filter])
  }, [sliderIndex])

  return (
    <div>
      <div id="sightings-map" />
      <div id="console">
        <h1 className="text-yellow-600">Monarch sightings</h1>
        <div className="session" id="sliderbar">
          <div className="text-sm text-gray">{sliderValue}</div>
          <input
            id="slider"
            className="row"
            type="range"
            min="0"
            max="6"
            step="1"
            value={sliderIndex}
            onChange={(event) => setSliderIndex(event.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default SightingsMap

import { useState } from "react"
import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import Form from "app/core/components/Form"
import Hero from "app/core/components/Hero"
import Map from "app/core/components/Map"
import { getLastSevenDays } from "../core/utils"

const MapWithForm = ({ children }) => (
  <div className="flex rounded-2xl bg-white w-full mx-auto m-8">{children}</div>
)

const Home: BlitzPage = () => {
  const [address, setAddress] = useState()
  const [coords, setCoords] = useState()
  const lastSevenDays = getLastSevenDays()
  const [date, setDate] = useState(lastSevenDays[0])

  return (
    <>
      <Hero />
      <MapWithForm>
        <Map setAddress={setAddress} setCoords={setCoords} />
        <Form address={address} coords={coords} setDate={setDate} date={date} />
      </MapWithForm>
    </>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home

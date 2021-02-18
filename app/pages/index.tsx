import { Suspense, useState } from "react"
import { Link, BlitzPage, dynamic } from "blitz"
import Layout from "app/core/layouts/Layout"
import Navigation from "app/core/components/Navigation"
import Form from "app/core/components/Form"
import Hero from "app/core/components/Hero"
import Map from "app/core/components/Map"

const MapWithForm = ({ children }) => (
  <div className="flex rounded-2xl bg-white w-9/12 mx-auto my-8">{children}</div>
)

const Home: BlitzPage = () => {
  const [address, setAddress] = useState()
  const [coords, setCoords] = useState()
  const [date, setDate] = useState()

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

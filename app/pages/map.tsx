import { Suspense } from "react"
import Layout from "app/core/layouts/Layout"
import SightingsMap from "app/core/components/SightingsMap"

const Map = () => (
  <div>
    <Suspense fallback={null}>
      <SightingsMap />
    </Suspense>
  </div>
)

Map.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Map

import { ReactNode, useEffect } from "react"
import Navigation from "app/core/components/Navigation"
import { Head } from "blitz"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  useEffect(() => {
    const script = document.createElement("script")

    script.src = "/NewRelicScript.js"
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <Head>
        <title>{title || "monarch-map"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-yellow-50 min-h-screen">
        <Navigation />
        {children}
      </div>
    </>
  )
}

export default Layout

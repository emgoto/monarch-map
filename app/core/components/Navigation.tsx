const Navigation = () => {
  return (
    <div>
      <div className="w-full h-16 border-b-4 border-yellow-600 bg-white flex items-center px-8">
        <a href="/" className="text-3xl font-bold text-gray-600 flex-1">
          monarch<span className="text-yellow-500">map</span>
        </a>
        <a href="/map" className="text-xl font-bold text-yellow-700">
          view sightings
        </a>
      </div>
    </div>
  )
}

export default Navigation

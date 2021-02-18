// Image credit: https://unsplash.com/photos/hwl01nLxtA8
const Hero = () => {
  return (
    <div className="w-full h-80 bg-cover flex items-center relative">
      <div
        className="w-full h-full bg-cover opacity-100 absolute"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("https://images.unsplash.com/photo-1506797352304-c571d2604617?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")`,
        }}
      />
      <div className="text-6xl text-white z-10 w-full m-8 text-right">
        Help save the <br></br>Monarch butterfly.
      </div>
    </div>
  )
}

export default Hero

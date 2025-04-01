import { useState } from 'react'

function App() {
 const [ latitude , setLatitude ] = useState()
 const [ longitude , setLongitude ] = useState()
 const geo = navigator.geolocation
 geo.getCurrentPosition(userCoords)
 function userCoords(position){
  let userLatitude = position.coords.latitude
  let userLongitude = position.coords.longitude
  setLatitude(userLatitude)
  setLongitude(userLongitude)

 }
   return (
    <>
  <h1>{latitude}</h1>
  <h1>{longitude}</h1>
    </>
  )
}

export default App

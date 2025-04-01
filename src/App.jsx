import { useState } from "react";

function App() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [useraddress, setUserAddress] = useState();
  const [GPSlattitude, setGPSlattitude] = useState();
  const [GPSlongitude, setGPSlongitude] = useState();
  const geo = navigator.geolocation;
  geo.getCurrentPosition(userCoords);

  function userCoords(position) {
    let userLatitude = position.coords.latitude;
    let userLongitude = position.coords.longitude;
    setLatitude(userLatitude);
    setLongitude(userLongitude);
  }

  const getuserAddress = async () => {
    let url = `https://api.opencagedata.com/geocode/v1/json?key=8afb9b8333ea4e559cde14267cf72630&q=${latitude}%2C+${longitude}&pretty=1&no_annotations=1`;
    const loc = await fetch(url);
    const data = await loc.json();
    console.log(data);
    setUserAddress(data.results[0].components.country);
  };
  const handelgetUserAddress = () => {
    getuserAddress();
  };
  const Watshed = geo.watchPosition(userGPSCoords);

  function userGPSCoords(position) {
    let  GPSlattitude = position.coords.latitude;
    let GPSlongitude = position.coords.longitude;
    console.log("longitude", GPSlongitude);
    console.log("lattitude", GPSlattitude);
    setGPSlattitude(GPSlattitude);
    setGPSlongitude(GPSlongitude);
  }
  const clearWatch = () => {
    geo.clearWatch(Watshed);
  }
  return (
    <>
      <h1>{latitude}</h1>
      <h1>{longitude}</h1>
      <h1>user address : {useraddress}</h1>
      <button onClick={handelgetUserAddress}>Get Address</button>
      <hr />

      <h1>{GPSlattitude}</h1>
      <h1>{GPSlongitude}</h1>
      <button onClick={clearWatch}> stop wach</button>
    </>
  );
}

export default App;

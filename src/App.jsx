// import React, { useState } from 'react'


// function App(){
//   var[input,setInput] = useState("")
//   var [data,setData] = useState({})


//   async function handleSearch(){
//     var API_KEY = "58e5674f79504d622a8c3623c4280cd7"
//     var result = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}`)
//     var myres =  await result.json ()
//     setData(myres.main)
//     console.log(data)
//   }
//  console.log(data);




//   return(

//     <div>

//       <h1>
//         Weather Forecast 🌤️
//       </h1>
//       <div>
//         <input placeholder='Enter City name ' value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" />
//         <button onClick={handleSearch}> Search </button>

//         {
//           data ? <div>
//               <h1>{data.humidity}</h1>
//               <h1>{data.temp}</h1>
              
//               </div> : "not found"
//         }
//       </div>

//     </div>
//   )
// }

// export default App




import React, { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [data, setData] = useState(null)

  async function handleSearch() {
    const API_KEY = "2f32298ba7b29f94d74ec200d9742252"
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`)
    const myres = await result.json()
    setData(myres.main)
  }

  return (
    <div className="weather-container">
      <h1>Weather Forecast 🌤️</h1>

      <div>
        <input
          placeholder="Enter City Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {data ? (
        <div className="weather-info">
          <h2>Temperature: {data.temp} °C</h2>
          <h3>Humidity: {data.humidity}%</h3>
          <h3>Min Temp: {data.temp_min} °C</h3>
          <h3>Max Temp: {data.temp_max} °C</h3>
          <h3>Sea Level : {data.sea_level}</h3>
        </div>
      ) : (
        <h3 style={{ marginTop: "20px" }}>Search for a city to see the weather 🌍</h3>
      )}
    </div>
  )
}

export default App

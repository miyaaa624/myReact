import { useEffect, useState } from "react"
import axios from 'axios';
import './App.css';
import ShowWeather from "./component/ShowWeather";


function App() {
  const [weatherList, setWeatherList] = useState([]);


  useEffect(() => {
    (async () => {
      // 本地端要在web-server伺服器才可以執行
      // json的連結必須是公開網址下的來源
      const data = await axios.get('https://miyaaa624.github.io/myReact/json/F-C0032-001.json');

      const { location } = data.data.cwaopendata.dataset;

      // console.log(location)
      setWeatherList(location);
    })()
  }, [])



  return (

    // locationName => 縣市名稱 
    // elementName => Wx => 天氣概況
    // elementName => pop => 降雨機率


    <div className="wrap">
      <h2>36小時天氣預報</h2>
      <div className="container">
        {
          weatherList.map((city) => {
            return (
              <div className="item" key={city.locationName}>
                <h3>{city.locationName}</h3>
                <ShowWeather city={city} />
              </div>
            )
          })

        }
      </div>
    </div>


  )
}
export default App
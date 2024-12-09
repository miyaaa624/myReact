import { FaUmbrella } from "react-icons/fa";
// 元件名稱要大寫
// function ShowWeather() {
//   return<div>123</div>
// }
// export default ShowWeather

export default function ShowWeather({city}){

  return (
    <div className="content">
              {
                city.weatherElement[0].time.map((time, index) => {
                  return (
                    <div className="item2" key={index}>

                      {/* 日期 */}
                      <p>
                        {
                          new Date(city.weatherElement[0].time[0].startTime).toLocaleString(undefined, {
                            day: 'numeric'
                          })
                        }
                      </p>
                      {/* 時間 */}
                      <p>
                        {
                          new Date(time.startTime).toLocaleString(undefined, {
                            hour: 'numeric',
                            minute: 'numeric'
                          })
                        }
                        <br />~<br />
                        {
                          new Date(time.endTime).toLocaleString(undefined, {
                            hour: 'numeric',
                            minute: 'numeric'
                          })
                        }
                      </p>

                      {/* 天氣圖 */}
                      <p><img src={`./weatherIcon/${time.parameter.parameterName}.svg`} alt="" /></p>

                      {/* 天氣圖名稱 */}
                      <p>{time.parameter.parameterName}</p>

                      {/* <p><FaUmbrella />30</p> */}
                      {/* 降雨機率 */}
                      <p>
                        <FaUmbrella />
                        {
                          city.weatherElement[4].time[index].parameter.parameterName
                        }
                        </p>

                    </div>
                  )
                })
              }
            </div>
  )
}

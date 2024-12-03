import { useEffect } from "react"
import axios from 'axios';
import './App.css';
function App() {

  // useEffect(() => {
  //   (async () => {
  //     const data = await axios.get('https://github.com/miyaaa624/myReact/blob/main/F-C0032-001.json');
  //     const { location }=data.data.cwaopendata.dataset;
  //     const option={}
  //     console.log(location);
  //   })
  // }, [])

  return (
    <>
      <h2>36小時天氣預報</h2>
      {/* 第一個 */}
      <div className="twoBox">
        <div className="box">
          <div className="title"><h3>臺北市</h3></div>
          <div className="listbox">
            <div className="content">
              <h3>2日</h3>
              <p>上午6:00</p>
              <p>~</p>
              <p>下午6:00</p>
              <img src="public\weatherIcon\晴時多雲.svg" alt="" />
              <p>晴時多雲</p>
              <p>10%</p>
            </div>
            <div className="content">
              <h3>2日</h3>
              <p>上午6:00</p>
              <p>~</p>
              <p>下午6:00</p>
              <img src="public\weatherIcon\晴時多雲.svg" alt="" />
              <p>晴時多雲</p>
              <p>10%</p>
            </div>
            <div className="content">
              <h3>2日</h3>
              <p>上午6:00</p>
              <p>~</p>
              <p>下午6:00</p>
              <img src="public\weatherIcon\晴時多雲.svg" alt="" />
              <p>晴時多雲</p>
              <p>10%</p>
            </div>
          </div>
        </div>
        {/* 第二個 */}
        <div className="box">
          <div className="title"><h3>臺北市</h3></div>
          <div className="listbox">
            <div className="content">
              <h3>2日</h3>
              <p>上午6:00</p>
              <p>~</p>
              <p>下午6:00</p>
              <img src="public\weatherIcon\晴時多雲.svg" alt="" />
              <p>晴時多雲</p>
              <p>10%</p>
            </div>
            <div className="content">
              <h3>2日</h3>
              <p>上午6:00</p>
              <p>~</p>
              <p>下午6:00</p>
              <img src="public\weatherIcon\晴時多雲.svg" alt="" />
              <p>晴時多雲</p>
              <p>10%</p>
            </div>
            <div className="content">
              <h3>2日</h3>
              <p>上午6:00</p>
              <p>~</p>
              <p>下午6:00</p>
              <img src="public\weatherIcon\晴時多雲.svg" alt="" />
              <p>晴時多雲</p>
              <p>10%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
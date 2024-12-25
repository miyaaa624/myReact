import { useEffect, useState } from "react"
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function () {
  const [CurrentImgIndex, setCurrentImgIndex] = useState(0)
  // 建立圖片陣列
  const slides = [
    { url: "./images/01.jpg", title: "photo1" },
    { url: "./images/02.jpg", title: "photo2" },
    { url: "./images/03.jpg", title: "photo3" },
    { url: "./images/04.jpg", title: "photo4" },
  ]

  // 當CurrentImgIndex改變時，會觸發useEffect
  useEffect(() => {
    // 每3秒呼叫nextSlider()換下一張圖
    const autoplay = setInterval(() => {
      nextSlider();
    }, 3000);
    // 每3秒後，移除autoplay，這樣才能取得最新的索引編號
    return () => clearInterval(autoplay);
  }, [CurrentImgIndex])

  // 下一張
  const nextSlider = () => {
    // 取得前一張的索引編號，檢查是否為最後一個編號
    // ? 是 => 回到第一張
    // : 否 => 跳下一張
    setCurrentImgIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }

  const preSlider = () => {
    // 取得前一張的索引編號，檢查是否為第一個編號
    // ? 是 => 跳到最後一張
    // : 否 => 跳前一張
    setCurrentImgIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }

  // 建立左右icon
  const Arrow = ({ direction, onclick }) => (
    // 擺放icon的區域
    <div style={{
      position: "absolute",
      top: "50%",
      cursor: "pointer",
      color: "white",
      [direction]: "20px", //將icon拆開，並且可以調整左右間距
    }}>
      {
        direction === "left" ? (
          <FaChevronLeft size={50} onclick={onclick} />
        ) : (<FaChevronRight size={50} onclick={onclick} />)
      }
    </div>
  )

  return (
    <>
      {/* 滿版最外層 */}
      <div className="wrapper" style={{
        // border: "1px solid red",
        maxwidth: "100vw",
        height: "100vh",
        margin: "auto",
      }}>
        {/* 滿版背景輪播區 */}
        <div style={{
          backgroundImage: `url(${slides[CurrentImgIndex].url})`,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          margin: "auto",
        }}>
          {/* 文字區 */}
          <h2 style={{ color: "red" }}>{slides[CurrentImgIndex].title}</h2>
          {/* 上一張 */}
          <Arrow direction="left" onclick={preSlider} />
          {/* 下一張 */}
          <Arrow direction="right" onclick={nextSlider} />
        </div>
      </div>
    </>
  )
}
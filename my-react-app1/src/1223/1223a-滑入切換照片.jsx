import { useState } from 'react';
import img1 from '/images/01.jpg';
import img2 from '/images/02.jpg';
import img3 from '/images/03.jpg';
import img4 from '/images/04.jpg';

export default function () {

  // 建立目前縮圖的變數
  const [currentImage, setCurrentImage] = useState(0);


  // 建立圖片陣列
  const arrPhotos = [img1, img2, img3, img4];
  return (
    <>
      <div className="wrapper">

        <div style={{
          // display: "flex",
          width: "700px",
          // justifyContent: "space-around",
          margin: "50px auto",
          textAlign: "center"
        }}>



          {/* 大圖區 */}
          <div>
            <img src={arrPhotos[currentImage]} alt="photos" width={580} height={350} />
          </div>


          {/* 縮圖區 */}
          <div style={{
            display: "flex",
            // flexDirection: 'column',
            // border: "1px solid red",
            justifyContent: "center",

          }}>

            {/* <img src={arrPhotos[0]} alt="photos" width={100} height={80} />
            <img src={arrPhotos[1]} alt="photos" width={100} height={80} />
            <img src={arrPhotos[2]} alt="photos" width={100} height={80} />
            <img src={arrPhotos[3]} alt="photos" width={100} height={80} /> */}

            {/* 使用map跑圖片陣列 */}
            {arrPhotos.map((photo, index) => {
              return (
                <img key={index} src={photo} alt="photos" width={100} height={80}
                  onMouseOver={(e) => setCurrentImage(index)} //這行是切換重點 !
                  style={{ cursor: "pointer" }} //改成手指樣式
                />
              )
            })
            }
          </div>

        </div>
      </div>
    </>
  )
}
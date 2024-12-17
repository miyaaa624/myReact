import './App.css';
import ShowContnet from '../ShowContnet.jsx'
import ShowCourse from '../ShowCourse.jsx'


//另外建元件檔案 ShowContnet , ShowCourse
//App要  import 元件檔案
//元件要 import App檔案 ; export default 自己的檔案名稱



/* return以內是jsx的範圍 */ 
/* for迴圈不能再jsx中寫 */ 
/* jsx使用迴圈 , 要使用map迴圈寫 */ 
/* 使用js語法前後加大括號{} */ 


function App() {
  
  return (
    <>
      <div className="wrap">

        {/* banner */}
        <header>
          <img src="images/banner.jpg" alt="" />
        </header>

        {/* 特色 */}
        <div className="feature">
          <ShowContnet/>
        </div>


        {/* 主標 */}
        <div className="slogan">
          <h3>讓學習成為一種習慣</h3>
        </div>

        {/* 推薦課程 */}
        <div className="course">

          <h1>推薦課程</h1>

          <div className="courseClass">
          <ShowCourse/>
          </div>
        </div>

        {/* 頁尾 */}
        <div className="footer">
          <p>2024.11.12 name</p>
        </div>

      </div>
    </>
  )

}


export default App



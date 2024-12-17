import './App.css';

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
          <div className="box">
            <h2><strong>教學影音</strong></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse molestias corporis rerum, minima laudantium nemo ullam illo vitae nesciunt cumque eos itaque numquam, quis pariatur suscipit veritatis! Soluta, praesentium itaque?</p>
          </div>
          <div className="box">
            <h2><strong>良性互動</strong></h2>
            <p>Lor sit amet consectetur adipisicing elit. Excepturi enim ipsa unde, temporibus nulla corrupti non, nihil, fugiat rem autem voluptate harum beatae nemo. Inventore officiis non sapiente doloremque dolorem!</p>
          </div>
          <div className="box">
            <h2><strong>趨勢分享</strong></h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam nobis, nam in veniam esse, labore ea perferendis quasi dolor quos assumenda, quis molestias minima! Optio tempora qui facilis! Dolores, excepturi.</p>
          </div>
        </div>

        {/* 主標 */}
        <div className="slogan">
          <h3>讓學習成為一種習慣</h3>
        </div>

        {/* 推薦課程 */}
        <div className="course">

          <h1>推薦課程</h1>

          <div className="courseClass">
            {/* 課程1 */}
            <div className="box2">
              <p><img src="images/unity.jpg" alt="" /></p>
              <p><h3>Unity 5</h3></p>
              <p className='p-blue'>最新的Unity公開課程</p>
              <p>講師</p>
              <p>影音課程時數</p>
              <p><span className='span1'>原價 NT$3200</span><span className='span2'>NT$1600</span></p>
              <p><button>付款線上去</button></p>
            </div>

            {/* 課程2 */}
            <div className="box2">
              <p><img src="images/gamesalad.jpg" alt="" /></p>
              <p><h3>GameSalad 2D</h3></p>
              <p className='p-blue'>視覺化操作</p>
              <p>講師</p>
              <p>影音課程時數</p>
              <p><span className='span1'>原價 NT$3200</span><span className='span2'>NT$1600</span></p>
              <p><button>付款線上去</button></p>
            </div>

            {/* 課程3 */}
            <div className="box2">
              <p><img src="images/gwd.jpg" alt="" /></p>
              <p><h3>Google Web Design</h3></p>
              <p className='p-blue'>廣告動畫</p>
              <p>講師</p>
              <p>影音課程時數</p>
              <p><span className='span1'>原價 NT$3200</span><span className='span2'>NT$1600</span></p>
              <p><button>付款線上去</button></p>
            </div>

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



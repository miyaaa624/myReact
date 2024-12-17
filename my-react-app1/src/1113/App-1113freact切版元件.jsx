import './App.css';
import ShowContnet from '../ShowContnet.jsx'


// 建立元件步驟 ====>  建立區域資料 => function()建立元件 => retrun元件
// 兩種方式 1.ShowContnet => 資料和元件放一起 , rerurn <ShowContnet/>
//          2.ShowCourse => 資料和元件分開 , rerurn <ShowCourse arrData2={courseData}/>

/* return以內是jsx的範圍 */
/* for迴圈不能再jsx中寫 */
/* jsx使用迴圈 , 要使用map迴圈寫 */
/* 使用js語法前後加大括號{} */

//建立特色區元件
function ShowContnet() {
    //   建立特色區資料 使用陣列
    const contentData = [
        {
            id: 1,
            title: "教學影音",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse molestias corporis rerum, minima laudantium nemo ullam illo vitae nesciunt cumque eos itaque numquam, quis pariatur suscipit veritatis! Soluta, praesentium itaque?"
        },
        {
            id: 2,
            title: "良性互動",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse molestias corporis rerum, minima laudantium nemo ullam illo vitae nesciunt cumque eos itaque numquam, quis pariatur suscipit veritatis! Soluta, praesentium itaque?"
        },
        {
            id: 3,
            title: "趨勢分享",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse molestias corporis rerum, minima laudantium nemo ullam illo vitae nesciunt cumque eos itaque numquam, quis pariatur suscipit veritatis! Soluta, praesentium itaque?"
        },
    ]
    return (
        <>
            {
                contentData.map((item) => {
                    return (
                        <>
                            <div className="box" key={item.id}>
                                <h2><strong>{item.title}</strong></h2>
                                <p>{item.desc}</p>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}


//建立課程區元件
function ShowCourse({arrData2}) 
{
    return (
        <>
            {
                arrData2.map((item) => {
                    return (
                        <>
                            <div className="box2" key={item.id}>
                                <p><img src={item.img} alt="" /></p>
                                <h3>{item.title}</h3>
                                <p className='p-blue'>{item.text}</p>
                                <p>講師:{item.teacher}</p>
                                <p>時數:{item.hour}小時</p>
                                <p><span className='span1'>原價:{item.price}</span><span className='span2'>{item.price2}</span></p>
                                <button>付款線上去</button>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}


function App() {

    //建立課程區資料 使用陣列
    const courseData = [
        {
            id: 1,
            img: "images/unity.jpg",
            title: 'Unity 5',
            text: '最新的Unity公開課程',
            teacher: 'xxx',
            hour: 4,
            price: 'NT$3200',
            price2: 'NT$1600',
        },
        {
            id: 2,
            img: "images/gamesalad.jpg",
            title: 'GameSalad 2D',
            text: '最新的Unity公開課程',
            teacher: 'xxx',
            hour: 4,
            price: '原價 NT$3200',
            price2: 'NT$1600',
        },
        {
            id: 3,
            img: "images/gwd.jpg",
            title: 'Google Web Design',
            text: '最新的Unity公開課程',
            teacher: 'xxx',
            hour: 4,
            price: '原價 NT$3200',
            price2: 'NT$1600',
        },
    ]




    return (
        <>
            <div className="wrap">

                {/* banner */}
                <header>
                    <img src="images/banner.jpg" alt="" />
                </header>

                {/* 特色 */}
                <div className="feature">
                    <ShowContnet />
                </div>


                {/* 主標 */}
                <div className="slogan">
                    <h3>讓學習成為一種習慣</h3>
                </div>

                {/* 推薦課程 */}
                <div className="course">

                    <h1>推薦課程</h1>

                    <div className="courseClass">
                        <ShowCourse arrData2={courseData} />
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



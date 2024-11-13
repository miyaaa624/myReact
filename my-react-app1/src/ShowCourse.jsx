import './App.css';
function ShowCourse() {
        //建立特色區資料 使用陣列
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
            {
                courseData.map((item) => {
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

export default ShowCourse
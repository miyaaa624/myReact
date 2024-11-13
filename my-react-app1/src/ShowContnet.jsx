import './App.css';

function ShowContnet() {
    //建立特色區資料 使用陣列
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

export default ShowContnet

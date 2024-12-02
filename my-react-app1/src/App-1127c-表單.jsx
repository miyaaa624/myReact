import { useEffect, useState } from "react"

function App() {
  // 使用者名稱
  const [inputUserName, setInputUserName] = useState("我是文字方塊")

  // 縣市名
  const [selCity, setSelCity] = useState('');
  //建立陣列
  const arrCity = ['台北市', '桃園市', '新北市', '台中市', '台南市', '高雄市'];

  // 單一核取方塊
  const [Check, setCheck] = useState(false)

  // 多個核取方塊
  const [CheckList, setCheckList] = useState([]);
  const arrList = ['html', 'css', 'js'];
  // 建立函式處理被勾選的項目
  const hadleCheckList = (e) => {
    // console.log(e.target.value)
    //使用其餘運算子保留已經被勾選的項目+目前被勾選的項目
    //檢查是否被勾宣
    if (e.target.checked) {
      // 是 => 原本+新的
      setCheckList([...CheckList, e.target.value])
    } else {
      // 否 => 從原本被勾選的項目中 , 拿掉不要的(filter)
      setCheckList(
        CheckList.filter((list) => {
          return list !== e.target.value
        })
      )
    }
  }

  //圓形選項按鈕
  const [q1Ans, setQ1Ans] = useState('');
  const [q2Ans, setQ2Ans] = useState('');
  // 統計次數
  const [ans1Count, setAns1Count] = useState('');
  const [ans2Count, setAns2Count] = useState('');
  const [ans3Count, setAns3Count] = useState('');

  useEffect(() => {

    const btn1 = document.getElementById('btn1');
    btn1.addEventListener('click', totCount)
    function totCount() {
      setAns1Count(0);
      setAns2Count(0);
      setAns3Count(0);

    }
  }, [q1Ans, q2Ans])




  return (
    <>
      <h1>react表單</h1>
      <hr />
      {/* input */}
      <label htmlFor="username">使用者名稱</label>
      <input type="text" id="username"
        value={inputUserName}
        onChange={(e) => {
          setInputUserName(e.target.value);
        }}
      />
      {inputUserName}
      <br />

      {/* select */}
      <label htmlFor="city">縣市名</label>
      <select name="" id="city" value={selCity}
        onChange={(e) => {
          setSelCity(e.target.value)
        }}>

        {/* 逐行寫法 */}
        {/* <option value="台北市">台北市</option>
      <option value="桃園市">桃園市</option>
      <option value="新北市">新北市</option>
      <option value="台中市">台中市</option>
      <option value="台南市">台南市</option>
      <option value="高雄市">高雄市</option> */}

        {/* 讀取陣列寫法 */}
        {/* disabled => 無法使用(只能看不能操作) */}
        <option value="" disabled>請選擇</option>
        {
          arrCity.map((city) => {
            return <option value={city} key={city}>{city}</option>
          })
        }
      </select>
      {selCity}
      <br />

      {/* 單一核取方塊 */}
      <label htmlFor="isCheck">閱讀確認</label>
      <input type="checkbox" id="isCheck" value={Check}
        onChange={(e) => {
          // 處理勾選值的變化
          setCheck(e.target.checked)
        }} />
      {Check.toString()}
      <br />


      {/* 複選:多個核取方塊 */}
      {
        arrList.map((list) => {
          return <div key={list}>
            <input type="checkbox" name="like" id={list}
              value={list}
              onChange={hadleCheckList}
            />
            <label htmlFor={list}>{list}</label>
          </div>
        })
      }

      {/* <label htmlFor="checkList1">html</label>
      <input type="checkBox" id="checkList1" name="like" value='html' onChange={hadleCheckList} />
      <label htmlFor="checkList2">css</label>
      <input type="checkBox" id="checkList2" name="like" value='css' onChange={hadleCheckList} />
      <label htmlFor="checkList3">js</label>
      <input type="checkBox" id="checkList3" name="like" value='js' onChange={hadleCheckList} /> */}
      <br />
      {CheckList}
      <br />

      {/* 選項按鈕 */}
      1.請選擇最愛的飲料
      <input type="radio" name="Q1" value="美式咖啡" id="q1-1" onChange={(e) => {
        setQ1Ans(e.target.value);
      }} />
      <label htmlFor="q1-1">美式咖啡</label>

      <input type="radio" name="Q1" value="拿鐵" id="q1-2" onChange={(e) => {
        setQ1Ans(e.target.value);
      }} />
      <label htmlFor="q1-2">拿鐵</label>

      <input type="radio" name="Q1" value="紅茶" id="q1-3" onChange={(e) => {
        setQ1Ans(e.target.value);
      }} />
      <label htmlFor="q1-3">紅茶</label>
      <br />
      您選擇的飲料是:{q1Ans}
      <br />

      2.請選擇不喜愛的食物
      <input type="radio" name="Q2" value="茄子" id="q2-1" onChange={(e) => {
        setQ2Ans(e.target.value);
      }} />
      <label htmlFor="q2-1">茄子</label>

      <input type="radio" name="Q2" value="綠豆" id="q2-2" onChange={(e) => {
        setQ2Ans(e.target.value);
      }} />
      <label htmlFor="q2-2">綠豆</label>

      <input type="radio" name="Q2" value="胡蘿蔔" id="q2-3" onChange={(e) => {
        setQ2Ans(e.target.value);
      }} />
      <label htmlFor="q2-3">胡蘿蔔</label>
      <br />
      您選擇的食物是:{q2Ans}
      <br />

      <button onClick={()=>{
        // 將所有次數=0
        setAns1Count(0);
        setAns2Count(0);
        setAns3Count(0);

        // 統計次數
        
        if(q1Ans=='美式咖啡' || q2Ans=='茄子'){
          setAns1Count(ans1Count+1);
        }else if(q1Ans=='拿鐵' || q2Ans=='綠豆'){
          setAns2Count(ans2Count+1);
        }else if(q1Ans=='紅茶' || q2Ans=='胡蘿蔔'){
          setAns2Count(ans2Count+1);
        }
      }}>送出統計結果</button>

      統計次數結果:
      <p>選項1次數:{ans1Count}</p>
      <p>選項2次數:{ans2Count}</p>
      <p>選項3次數:{ans3Count}</p>

    </>
  )
}

export default App
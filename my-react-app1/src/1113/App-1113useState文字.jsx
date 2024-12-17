import { useState } from "react"

function App() {
  //定義變數name
  //執行中若要改變const值 , 必須使用useState方法
  const [name, setName] = useState('111');
  const [name2, setName2] = useState('111');

  function changeName(e) {
    setName2(e.target.value);
  }
  

  return (
    <>
      <h2>設計一個輸入名字的欄位 , 並且即時顯示出來</h2>
      <hr />
      {/* <h3>目前文字方塊的內容:{name}</h3> */}
      {/* 使用value一定要搭配onChange */}

      {/* 事件綁定 : 使用箭頭函式 */}
      {/* e = event (通用寫法) */}
      請輸入姓名:<input type="text" value={name} onChange={(e) => {
        setName(e.target.value);
      }}
      />{name}

      <br />

      請輸入姓名2:<input type="text" value={name2} onChange={changeName} />{name2}

    </>
  )
}
export default App
//導入外部css檔案
import "./App.css"

//建立新的元件
//return只能包一個元素
//放一層以上元素加小括號或空標籤 return () , return <>
function MyComponent() {
  return (
    //空標籤 : Fragment
    <>
      <h1>React</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, molestias est! Reprehenderit, rerum iusto voluptatem ex aliquid at fuga ut, culpa repudiandae iure dolorem saepe magnam eum! Nihil, sed debitis.</p>
      <p>llll</p>
    </>
  )
}
// 呼叫元件 ; 元件寫在function App()以上
// function App()內僅寫使用的原件
function App() {

  //建立變數
  //要有結尾標籤</>
  //CSS要加大括號{}, 要加雙引號或單飲"", 分號;改成逗號,
  //jsx中使用javascript變數 , 前後加大括號{變數名稱} 
  const strName = "健仔"

  return (
    <div>

      <h1 className="unLineColor" style={{
        color:'red',
        backgroundColor:'yellow',
        width:'300px',
      }}>{strName.toLocaleUpperCase()},午安</h1>
      
      {/* 屬性中使用變數傳送 */}

      {/* <label> 標籤是用來為 form 元素提供文字標籤，它可以幫助使用者理解 form 元素的用途。 */}
      {/* 和input一起用,点击文字，会自动触发对应表单框的聚焦动作 */}
      <label className="unLineColor" htmlFor="userName">請輸入姓名</label>
      {/* placeholder => 提示字 */} 
      <input type="text" id="userName" placeholder={strName}/> 

    </div>
  )
}

//獨立檔案需要用export
export default App

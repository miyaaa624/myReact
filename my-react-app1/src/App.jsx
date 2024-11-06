
//建立新的元件
//return只能包一個元素
//放一層以上元素加小括號或空標籤 return () , return <>

function MyComponent() {
  return (
    //空標籤 : Fragment
    <>
      <h1>React</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, molestias est! Reprehenderit, rerum iusto voluptatem ex aliquid at fuga ut, culpa repudiandae iure dolorem saepe magnam eum! Nihil, sed debitis.</p>
    </>
  )
}
// 呼叫元件 ; 元件寫在function App()以上
// function App()內僅寫使用的原件
function App() {
  return (
    <div>
      <MyComponent />
    </div>
  )
}

//獨立檔案需要用export
export default App

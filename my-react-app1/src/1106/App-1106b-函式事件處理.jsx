function App() {

  // 建立函示方法 1
  function sayHi() {
    alert('Hello3')
  }

  // 建立函示方法 1
  const sayHi2=() => {
    alert('Hello4')
  }


  return (

    <div>
      {/* 事件處理 1:在HTML標籤上綁定事件 */}
      {/* 第一個{} =>js在jsx裡面應用 第二個{} => 函式的括號 */}

      {/* 匿名函式 */}
      <button onClick={
        function () { 
          alert('Hello1') }}>打招呼</button>

      {/* 箭頭函式 */}
      <button onClick={
        () => {
          alert('Hello2')
        }
      }>打招呼2</button>

      {/* 事件處理 2:呼叫函式 */}
      {/* 先建立函示 再呼叫函示 */}
      {/* 等待被呼叫的函式 , 函式名稱後面不可加上();加()會直接顯示不會等待被執行 */}
      <button onClick={sayHi}>打招呼3</button>
      <button onClick={sayHi2}>打招呼4</button>

    </div>
  )
}

//獨立檔案需要用export
export default App

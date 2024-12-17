function Component() {
  return <h1>React</h1>
}
function App() {

  //建立陣列(可以是任何形式資料 => 元件)
  //同個陣列中key屬性的值不可重複
  //Key 幫助 React 分辨哪些項目被改變、增加或刪除。
  //在 array 裡面的每個 element 都應該要有一個 key，如此才能給予每個 element 一個固定的身份
  const listItem = [
    <Component key='0' />,
    <Component key='1' />,
    <Component key='2' />,

  ]

  const listBook = [
    { bookName: 'html', id: 'book1' },
    { bookName: 'css', id: 'book2' },
    { bookName: 'javaScript', id: 'book3' },
  ]

  //過濾出陣列中除了CSS的書本
  const filterBooks = listBook.filter((book) => {
    // if (book.bookName != 'css') {
    //   return true
    // }

    //三元運算子的判斷式
    //判斷式? 條件成立: 條件不成立
    //只能用在單層判斷
    return book.bookName != 'css'?true:false
  })

  return (

    <>
      {/* 使用陣列方法1 */}
      {listItem}
      <hr />
      {/* 使用陣列方法2 map()=>{} 此方法可以把一個陣列轉換成另一個陣列的形式 */}
      {/* 要用div包住+key */}
      {
        listBook.map((book) => {
          return <div key={book.id}>{book.bookName}</div>
        })
      }
      <hr />
      {/* 使用filter()過濾陣列資料 */}
      {
        filterBooks.map((book) => {
          return <div key={book.id}>{book.bookName}</div>
        })
      }
    </>

  )
}

//獨立檔案需要用export
export default App

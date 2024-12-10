import $ from 'jquery'
// import jquery
// 不用寫$(function(){})
export default function App() {
  return (
    <div>
      <h2>jquery</h2>
      <button onClick={()=>{
        console.log($('h2').text())
      }}>click</button>
    </div>
  )
}
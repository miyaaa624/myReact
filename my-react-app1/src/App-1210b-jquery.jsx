import $ from 'jquery'
import { useEffect } from 'react';
// import jquery
// 不用寫$(function(){})
export default function App() {


 //寫法1 : 過時寫法
//   useEffect(() => {
//     $('.cssAnim1').hover(function(){
//       $(this).addClass('.cssAnim1:hover');
//   },function(){
//       $(this).removeClass('imgScale');
//   })
// }, [])

  //寫法2 : 建議寫法
  useEffect(() => {
    $('.cssAnim1').on('mouseover', function () {
      $(this).addClass('imgScale');
    })
    $('.cssAnim1').on('mouseout', function () {
      $(this).removeClass('imgScale');
    })
  }, [])

  return (
    <div>
      <a href="#" class="cssAnim1">
        {/* 結尾標籤 */}
        {/* 圖片要在public才抓的到 */}
        <img src="./images/03.jpg" alt="" />
      </a>
    </div>
  )
}
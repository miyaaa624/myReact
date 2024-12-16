import { useEffect } from 'react';
import $ from 'jquery';

export default function App() {
  useEffect(() => {
    //移入 => mouseover()
    //移出 => mouseout()
    //移動 => mousemove()
    // X,Y座標 => pageX ,pageY
    //取得html內容 => html()
    //淡入 => fadeIn()
    //淡出 => fadeOut()
    //速度 => 毫秒 => (slow, normal, fast)  
    //尋找指定名稱 => has()
    //新增html元素 => append()
    //取得子元素 => children()

    $('a:has(.ttpShow)').mouseover(function(e){
      $('body').append('<div id="ttpPanel">'+$(this).children('.ttpShow').html()+'</div>')
      $('#ttpPanel').css({
        top:(e.pageY+10)+'px',
        left:(e.pageX+10)+'px',
      }).fadeIn('fast');
    }).mouseout(function(e){
      $('#ttpPanel').remove();
    }).mousemove(function(e){
      $('#ttpPanel').css({
        top:(e.pageY+10)+'px',
        left:(e.pageX+10)+'px',
      })
    })
  }, [])

  return (
    <>
      <h2>ToolTip顯示說明</h2>
      <p>Lorem, ipsum dolor sit amet
        <a href="#">
          consectetur
          <span className='ttpShow'>
            <img src="./images/03.jpg" alt="" style={{width:'100px'}}/>
          </span>
        </a>
        adipisicing elit. Dolores consequuntur dolorum sapiente eligendi quos magnam officia ad at beatae doloremque, voluptate vel aliquam consequatur dignissimos porro totam, iure dicta libero.
        adipisicing elit. Dolores consequuntur dolorum sapiente eligendi quos magnam officia ad at beatae doloremque, voluptate vel aliquam consequatur dignissimos porro totam, iure dicta libero.
        adipisicing elit. Dolores consequuntur dolorum sapiente eligendi quos magnam officia ad at beatae doloremque, voluptate vel aliquam consequatur dignissimos porro totam, iure dicta libero.
        adipisicing elit. Dolores consequuntur dolorum sapiente eligendi quos magnam officia ad at beatae doloremque, voluptate vel aliquam consequatur dignissimos porro totam, iure dicta libero.
        adipisicing elit. Dolores 
        <a href="#">
        dolorum
          <span className='ttpShow'>dolorum內容</span>
        </a>
        consequuntur dolorum sapiente eligendi quos magnam officia ad at beatae doloremque, voluptate vel aliquam consequatur dignissimos porro totam, iure dicta libero.
        adipisicing elit. Dolores consequuntur dolorum sapiente eligendi quos magnam officia ad at beatae doloremque, voluptate vel aliquam consequatur dignissimos porro totam, iure dicta libero.</p>
    </>
  )
}
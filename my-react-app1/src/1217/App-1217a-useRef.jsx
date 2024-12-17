import { useRef, useState } from "react";


export default function App() {

  //  const{value, setvalue}=useState("")
  // 建立一個useRef的變物 
  const inputRef = useRef(null);

  console.log('App render...');
  const submitHandler = () => {
    // 查看輸入值 =>輸入123顯示123
    console.log(inputRef.current.value);
    // 查看類型 => text
    console.log(inputRef.current.type);
    //更改類型為password
    inputRef.current.type = "password"
    // 查看類型 => password
    console.log(inputRef.current.type);
  }
  return (
    <>
      {/* 方法一 使用onChange要搭配useState */}
      <input type="text" onChange={(e) => setvalue(e.target.value)} />
      {/* 方法二 使用Ref */}
      <input type="text" ref={inputRef} />
      <button onClick={submitHandler}>送出</button>
    </>
  )
}
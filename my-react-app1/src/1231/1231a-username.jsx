import { createContext, useContext, useState } from "react"

// --------------- 登入葉面 ----------------
// --------------- 跨元件使用變數 ----------------

//字首大寫是元件 小寫是function
// step1 所有元件需要使用 => 建立共用區 UserContext (可以自己取名)
// step2 從中建立變數
// step3 從共用區取得變數 => 使用usercontext解構

export default function App() {
  // 建立共用環境區域
  const UserContext = createContext({});
  //建立使用者變數
  const [username, setUsername] = useState("demo");
  //建立登入鈕控制
  const [isLogiin, setIsLogiin] = useState(false);

  //建立登入元件
  const LoginForm = () => {
    //因為要被放在共用區，移到App
    // const [username, setUsername] = useState("");

    //從共用區usercontext解構出username,setUsername
    const { username, setUsername, setIsLogiin } = useContext(UserContext)

    return (
      <>
        <label htmlFor="username">使用者名稱</label>
        <input
          type="text"
          id="username"
          placeholder="請輸入使用者名稱"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="button" onClick={() => { setIsLogiin(true) }}>登入</button>

      </>
    )
  }

  //登入後的歡迎元件
  const Greeting = () => {
    //從共用區UserContext取得username
    const { username } = useContext(UserContext);
    return (
      <div>
        Hi,{username}
      </div>
    )
  }



  return (
    <>
      <h1>useContext</h1> <hr style={{ marginBottom: "50px" }} />
      <UserContext.Provider value={{ username, setUsername, setIsLogiin }}>
        {/* 將原本的架構改成三元運算子 */}
        {/* <LoginForm />
        <br /> 
        <Greeting /> */}

        {
          isLogiin ? <Greeting /> : <LoginForm />
        }
      </UserContext.Provider>
    </>
  )
}
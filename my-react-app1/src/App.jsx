import { useRef } from "react"



export default function App() {
const greenRef=useRef(null);
const yellowRef=useRef(null);

const gogreen=()=>{
  window.scrollTo({
    top:greenRef.current.offsetTop,
    behavior:'smooth',
  })
}

const goyellow=()=>{
  window.scrollTo({
    top:yellowRef.current.offsetTop,
    behavior:'smooth',
  })
}

    return (
        <>
        {/* offsetTop */}
            <div ref={yellowRef} style={{height:"800px",background:"yellow"}}>
                <button onClick={gogreen}>green</button>
            </div>
            <div ref={greenRef} style={{height:"800px",background:"green"}}>
                <button onClick={goyellow}>yellow</button>
            </div>

        </>
    )
}
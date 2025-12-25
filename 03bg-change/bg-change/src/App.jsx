import { useState } from "react"


function App() {
  
  const [color,setColor] = useState("white")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
           
            <button className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor:"red"}}
            onClick={()=>setColor("red")}>RED</button>

            <button className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor:"green"}}
            onClick={()=>setColor("green")}>GREEN</button>

            <button className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor:"yellow"}}
            onClick={()=>setColor("yellow")}>YELLOW</button>

            <button className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor:"olive"}}
            onClick={()=>setColor("olive")}>OLIVE</button>

            <button className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor:"grey"}}
            onClick={()=>setColor("grey")}>GREY</button>

            <button className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor:"pink"}}
            onClick={()=>setColor("pink")}>PINK</button>

            <button className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor:"blue",color:"white"}}
            onClick={()=>setColor("blue")}>BLUE</button>

            <button className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor:"white"}}
            onClick={()=>setColor("white")}>WHITE</button>

            <button className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor:"aliceblue"}}
            onClick={()=>setColor("aliceblue")}>ALICEBLUE</button>

            <button className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor:"black",color:"white"}}
            onClick={()=>setColor("black")}>BLACK</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

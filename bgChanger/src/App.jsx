import "./App.css";
import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 inset-x-0">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
            onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
            onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
            onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
           
          </div>
        </div>
      </div>
    </>

  );
}

// function App() {

//   const [color, setColor] = useState("olive")
//   return (

//       <div
//         className="w-full h-screen duration-200"
//         style={{ backgroundColor:color}}
//       >
//         <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
//           <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white text-black px-2 py-2 rounded">
//             <button onClick={()  => setColor("red")}
//               className="outline-none px-4 rounded-full  shadow-sm"
//               style={{ backgroundColor: "red" }}
//             >
//               Red
//             </button>
//             <button onClick={()  => setColor("green")}
//               className="outline-none px-4 text-white rounded-full shadow-sm"
//               style={{ backgroundColor: "green" }}
//             >
//               Green
//             </button>
//             <button onClick={()  => setColor("blue")}
//               className="outline-none px-4 text-white rounded-full  shadow-sm"
//               style={{ backgroundColor: "blue" }}
//             >
//               Blue
//             </button>
//             <button onClick={()  => setColor("olive")}
//               className="outline-none px-4 rounded-full text-white  shadow-sm"
//               style={{ backgroundColor: "olive" }}
//             >
//               Olive
//             </button>
//             <button onClick={()  => setColor("grey")}
//               className="outline-none px-4 rounded-full text-white shadow-sm"
//               style={{ backgroundColor: "grey" }}
//             >
//               Grey
//             </button>

//             <button onClick={()  => setColor("yellow")}
//               className="outline-none px-4 rounded-full shadow-sm"
//               style={{ backgroundColor: "yellow" }}
//             >
//               yellow
//             </button>
//             <button onClick={()  => setColor("pink")}
//               className="outline-none px-4 rounded-full shadow-sm"
//               style={{ backgroundColor: "pink" }}
//             >
//               Pink
//             </button>
//             <button onClick={()  => setColor("purple")}
//               className="outline-none px-4 text-white rounded-full shadow-sm"
//               style={{ backgroundColor: "purple" }}
//             >
//               Purple
//             </button>
//             <button onClick={()  => setColor("lavender")}
//               className="outline-none px-4 rounded-full shadow-sm"
//               style={{ backgroundColor: "lavender shade-300" }}
//             >
//               Lavender
//             </button>
//             <button onClick={()  => setColor("white")}
//               className="outline-none px-4 rounded-full shadow-sm"
//               style={{ backgroundColor: "white" }}
//             >
//               White
//             </button>
//             <button onClick={()  => setColor("black")}
//               className="outline-none px-4 rounded-full text-white shadow-sm"
//               style={{ backgroundColor: "black" }}
//             >
//               Black
//             </button>
//           </div>
//         </div>
//       </div>

//   );
// }

// export default App;

// import { useState } from "react"

// function App() {
//   const [color, setColor] = useState("olive")

//   return (
//     <div className="w-full h-screen duration-200"
//     style={{backgroundColor: color}}
//     >
//       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
//           <button
//           onClick={() => setColor("red")}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: "red"}}
//           >Red</button>
//           <button
//           onClick={() => setColor("green")}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: "green"}}
//           >Green</button>
//           <button
//           onClick={() => setColor("blue")}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: "blue"}}
//           >Blue</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App

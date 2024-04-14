import { useCallback, useEffect, useState, useRef } from "react";

// function App() {
//   const [length, setLength] = useState(8);
//   const [numAllowed, setNumAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [password, setPassword] = useState("");

//   // use ref hook
//   const passRef = useRef(null);

//   const passGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//     if (numAllowed) {
//       str += "0123456789";
//     }
//     if (charAllowed) {
//       str += "!@#$%^&*-_+=[{}~`";
//     }

//     for (let i = 0; i < length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1);
//       pass += str.charAt(char);
//     }
//     setPassword(pass);
//   }, [length, numAllowed, charAllowed, setPassword]);

//   const copyPasswordToClipboard = useCallback(() => {
//     passRef.current?.select();
//     passRef.current?.setSelectionRange(0, 99);
//     window.navigator.clipboard.writeText(password);
//   }, [password]);

//   useEffect(() => {
//     passGenerator();
//   }, [length, numAllowed, charAllowed, passGenerator]);

//   return (
//     <>
//       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
//         <h1 className="text-white text-center my-3">Password Generator</h1>
//         <div className="flex shadow rounded-lg overflow-hidden mb-4">
//           <input
//             type="text"
//             value={password}
//             className="outline-none w-full py-1 px-3 "
//             placeholder="Password"
//             readOnly
//             ref={passRef}
//           />
//           <button
//             onClick={copyPasswordToClipboard}
//             className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
//           >
//             Copy
//           </button>
//         </div>
//         <div className="flex text-sm gap-x-2">
//           <div className="flex items-center gap-x-1">
//             <input
//               type="range"
//               min={6}
//               max={100}
//               value={length}
//               className="cursor-pointer"
//               onChange={(e) => {
//                 setLength(e.target.value);
//               }}
//             />
//             <label>Length: {length}</label>
//           </div>
//           <div className="flex items-center gap-x-1 py-2">
//             <input
//               className="py-2"
//               type="checkbox"
//               defaultChecked={numAllowed}
//               id="numberInput"
//               onChange={() => {
//                 setNumAllowed((prev) => !prev);
//               }}
//             />
//             <label htmlFor="numberInput">Numbers</label>
//           </div>
//           <div className="flex items-center gap-x-1 py-2">
//             <input
//               className="py-2"
//               type="checkbox"
//               defaultChecked={charAllowed}
//               id="charInput"
//               onChange={() => {
//                 setCharAllowed((prev) => !prev);
//               }}
//             />
//             <label htmlFor="charInput">Characters</label>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

export default function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

// useRef hook
const  passwordRef = useRef(null)

const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,99)
  window.navigator.clipboard.writeText(password)},
  [password])


  const passwordGenertor = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";

    if (charAllowed) str += "!@#$%^&*-_+=[{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenertor();
  }, [length, numAllowed, charAllowed, passwordGenertor]);



  return (
    <>
      <div className="w-full max-w-md mx-auto  shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 "
         
          onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className=" flex items-center gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

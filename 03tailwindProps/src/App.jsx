import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Card from "./components/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "kamlesh",
    desc: `Hey, I'm a B.tech Graduate. I want to pursue a career in tech. And i've expertise in React & Js.`,
  };

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind CSS</h1>
    <Card username='chaiaurcode'  btnText="visit me"/>
    <Card username='kamlesh' />

      {/* <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind CSS
      </h1>

      <Card c />
      <Card /> */}
    </>
  );
}

export default App;

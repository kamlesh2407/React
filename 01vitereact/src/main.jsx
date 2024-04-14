import React from 'react'
import ReactDOM from 'react-dom/client'
import App from  './App'



// function MyApp(){
//   return (
//     <div>
//       <h1>Custom app</h1>
//     </div>
//   )
// }

// const ReactElement = {
//      type: 'a',
//      props:{
//         href: 'https://google.com',
//         target:'_blank'
//      },
//      children: 'Click me to visit google'
// }


const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)



const anotherUser = "Kamlesh"

// eslint-disable-next-line no-unused-vars
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google',
  anotherUser,
  anotherElement
)


ReactDOM.createRoot(document.getElementById('root')).render(
 
  <App />
  // <reactElement/>
  // ReactElement
  // anotherElement
  // reactElement
  // <MyApp/>
)

import Chai from "./chai";
function App() {
  const username = "Kamlesh";

  return (
    // in this return we can only return one element to avoid the error div is used to return multiple tags
    // And to avoid using div we can also use empty fragments "<>"
    <>
      <Chai />
      <h1>Good Evening {username}</h1>
    </>
  );
}

export default App;

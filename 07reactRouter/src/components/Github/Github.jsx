import React, { useState } from "react";
// import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData()


  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/kamlesh2407")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div
      className="
      text-center m-4 bg-gray-600 text-white
       p-4 tet-3xl
       "
    >
      Github Followers: {data?.followers}
      <img src={data?.avatar_url} alt="Git picture" />
    </div>
  );
}



export const githubInfoLoader = async()=>{
  const response = await fetch('https://api.github.com/users/kamlesh2407')
  return response.json();
}
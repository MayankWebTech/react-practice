import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()

//   const [data, setData] = useState([])
//     useEffect(() => {
//     fetch('https://api.github.com/users/MayankWebTech')
//     .then( response => response.json())
//     .then( data => {
//         console.log(data);
//         setData(data)
//     })

//     },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white'>Github Repos: {data.public_repos}</div>
  )
}

export default Github

export const gitHubInfo = async() =>{
   const response = await fetch('https://api.github.com/users/MayankWebTech')
   return response.json()
}
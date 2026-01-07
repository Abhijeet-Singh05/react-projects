import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  
const data = useLoaderData()    
// const [data,setData] = useState()
//
//   useEffect(()=>{
//     fetch('https://api.github.com/users/abhijeet-singh05')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         setData(data)
//     })
//   },[])

  return (
    <div className="bg-white/30 backdrop-blur-xl border border-white/20 p-10 rounded-2xl shadow-2xl text-3xl m-4"
    > 
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTZF3fbcp3OOLsLrjk1rVjbcO1gY2fx9eSag&s" alt="Git picture" width={250}/>  
      GitHub Followers: {data?.followers}  
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/abhijeet-singh05')
    return res.json()
}
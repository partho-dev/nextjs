'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
const base_url = process.env.NEXT_PUBLIC_API_BASE_URL

export default function Home() {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    const userapi = `${base_url}/users/`
    const fetchdata = async () =>{
      try {
        const response = await axios.get(userapi)
        setUsers(response.data)
      } catch (error) {
        
      }
    }
    fetchdata()
  }, [])
 
  return (
    <main className="flex min-h-screen flex-col  items-center">

    
<nav className=" w-full bg-slate-800 flex justify-around p-2">
      <Link href={"/"}>
      <p className=" cursor-pointer p-2 rounded-md hover:bg-sky-700"> Home </p>
      </Link>
      
      <Link href={"/users"}>
      <p className=" cursor-pointer p-2 rounded-md hover:bg-sky-700 "> Users </p>
      </Link>

      <Link href={"/products"}>
      <p className=" cursor-pointer p-2 rounded-md  hover:bg-sky-700"> Product </p>
      </Link>
    </nav>

    <div className="bg-slate-900 p-8 mt-10 rounded-lg">

    <h1 className="mt-11 mb-11" > List of <span className="text-lg text-red-500"> users</span>  from backend - /api/v1/users/ from <span className="text-lg text-red-500"> Mongo DB </span>  </h1>
    <div className="bg-slate-900 p-6 rounded-md bg-gradient-to-r from-red-800 to-black-900 ">
    {users.length > 0 ? users.map((elem, index)=> (<p className="mb-2 text-nowrap" key={elem._id} > Hello - <span className="text-xl text-cyan-200">{elem.Name}</span>, You made profit of: <span className="text-xl text-cyan-200"> {elem.Profit} </span> </p>)) : "There are no Users to show; Add from Home Page"}
    </div>

    </div>
    </main>
  );
}

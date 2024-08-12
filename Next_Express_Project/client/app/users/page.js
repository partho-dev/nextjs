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
      <p className=" cursor-pointer "> Home </p>
      </Link>
      
      <Link href={"/users"}>
      <p className=" cursor-pointer "> Users </p>
      </Link>
    </nav>

    <h1 className="mt-11 mb-11" > List of users from backend - /api/v1/users/  </h1>
    {users.map((elem, index)=> (<h1 key={index} > Hello - {elem.Name}, You made profit of {elem.Profit}</h1>))}
    </main>
  );
}

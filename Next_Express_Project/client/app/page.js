'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
const base_url = process.env.NEXT_PUBLIC_API_BASE_URL

export default function Home() {
  const [message, setMessage ] = useState("...Loading")
  const [name, setName ] = useState()
  const [profit, setProfit] = useState()

  const handleNameChange = (e) =>{
    setName(e.target.value)
  }

  const handleProfitChange = (e) =>{
    setProfit(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Checking if the input fields are not empty
    if(!name.trim() || !profit.trim()){
      setMessage("Please ensure, none of the fields be empty")
      return // This prevents the submit
    } 

    const newUser = {
      Name: name,
      Profit: profit,
    };

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`, newUser)
      setMessage(`User created: ${response.data.Name} with a profit of ${response.data.Profit}`)
      setName("")  // Clear the form fields
      setProfit("") // Clear the form fields
    } catch (error) {
      console.error("Error creating user", error)
      setMessage("Error creating user")
    }
  };

  useEffect(()=>{
    const fetchdata = async ()=>{
      try {
        const response = await axios.get(base_url)
        setMessage(response.data)
      } catch (error) {
        console.log(error.message)
        setMessage("Error Loading the data")
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

    <h1 className="mt-5"> I am from NextJs - Coming from /api/v1</h1>
    {/* Message from Backend */}
    {message}

    {/* Creating an input form to collect data from users  */}
    <h1 className="mt-5"> Create the users - This will go to /api/v1/users</h1>
    <div className="bg-slate-700 p-3 rounded-md mt-4">

    <form onSubmit={handleSubmit}>
      <div>
      <input className=" text-slate-950 rounded-md mr-2 placeholder-slate-400 focus:outline-none mt-1 px-2 py-2" type="text" value={name} onChange={handleNameChange} placeholder="John" />
      <input className=" text-slate-950 rounded-md mr-2 placeholder-slate-400 focus:outline-none mt-1 px-2 py-2" type="text" value={profit} onChange={handleProfitChange} placeholder="$300" />
      </div>
      <div className="flex justify-center">
      <button className="px-2 py-1 rounded-md bg-green-600 mt-2" type="submit" > Create User</button>
      </div>
    </form>

    </div>
    </main>
  );
}

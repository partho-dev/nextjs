'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
const base_url = process.env.NEXT_PUBLIC_API_BASE_URL

export default function Home() {
  const [message, setMessage ] = useState("...Loading")
  const [name, setName ] = useState()
  const [profit, setProfit] = useState()
  const [productName, setProductName] = useState()
  const [productPrice, setProdPrice] = useState()

  // Manage the state of user data
  const handleNameChange = (e) =>{
    setName(e.target.value)
  }

  const handleProfitChange = (e) =>{
    setProfit(e.target.value)
  }

  // Manage the state of Products
  const handleProdNameChange = (e) =>{
    setProductName(e.target.value)
  }

  const handleProdPriceChange = (e) =>{
    setProdPrice(e.target.value)
  }

  // Handle the submit for User Data
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Checking if the input fields are not empty
    if(!name.trim() || !profit.trim()){
      setMessage("Please ensure, none of the fields be empty")
      return // This prevents the submit
    } 

    const newUser = {
      Name: name,
      Profit: profit
    }


    try {
      const userResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`, newUser)
      setMessage(`User created: ${userResponse.data.Name} with a profit of ${userResponse.data.Profit}`)
      setName("")  // Clear the form fields
      setProfit("") // Clear the form fields
    } catch (error) {
      console.error("Error creating user", error)
      setMessage("Error creating user")
    }
  }

    // Handle the submit for Product Data
    const handleProdSubmit = async (e) => {
      e.preventDefault()
  
      // Checking if the input fields are not empty
      if(!productName.trim() || !productPrice.trim()){
        setMessage("Please ensure, none of the fields be empty")
        return // This prevents the submit
      } 
  
      const newProd = {
        name: productName,
        price: productPrice,
      }
  
  
      try {
        const prodResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`, newProd)
        // setMessage(`User created: ${prodResponse.data.Name} with a profit of ${prodResponse.data.Profit}`)
        setProductName("")  // Clear the form fields
        setProdPrice("") // Clear the form fields
      } catch (error) {
        console.error("Error creating Products", error)
        setMessage("Error creating Products")
      }
    }

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
      <p className=" cursor-pointer p-2 rounded-md hover:bg-sky-700"> Home </p>
      </Link>
      
      <Link href={"/users"}>
      <p className=" cursor-pointer p-2 rounded-md hover:bg-sky-700 "> Users </p>
      </Link>

      <Link href={"/products"}>
      <p className=" cursor-pointer p-2 rounded-md  hover:bg-sky-700"> Product </p>
      </Link>
    </nav>

    <div className="mainbox bg-slate-900 p-10 mt-10">
    {/* Message from Backend */}
    🔥 {message}

    {/* Creating an input form to collect data from users  */}
    <h1 className="mt-20"> ✅ Create the <span className="text-red-500 text-2xl"> users </span>  - This will go to /api/v1/users on <span className="text-red-500 text-2xl"> MongoDB </span></h1>
    <div className="usersform bg-slate-700 p-3 rounded-md mt-4 bg-gradient-to-r from-slate-600 to-slate-900">

    <form onSubmit={handleSubmit}>
      <div>
      <input className=" text-slate-950 rounded-md mr-2 placeholder-slate-400 focus:outline-none mt-1 px-2 py-2" type="text" value={name} onChange={handleNameChange} placeholder="John" />
      <input className=" text-slate-950 rounded-md mr-2 placeholder-slate-400 focus:outline-none mt-1 px-2 py-2" type="text" value={profit} onChange={handleProfitChange} placeholder="$300" />
      <button className="px-2 py-1 rounded-md bg-green-500 hover:bg-green-700 mt-2" type="submit" > Create User</button>
      </div>
    </form>

    </div>

    {/* Product Form  */}
    <h1 className="mt-20"> ✅ Create the <span className="text-red-500 text-2xl"> Products </span>  - This will go to /api/v1/products on <span className="text-red-500 text-2xl"> postgres </span></h1>
    <div className="productform bg-slate-700 p-3 rounded-md mt-4 bg-gradient-to-r from-slate-600 to-slate-900">

    <form onSubmit={handleProdSubmit}>
      <div>
      <input className=" text-slate-950 rounded-md mr-2 placeholder-slate-400 focus:outline-none mt-1 px-2 py-2" type="text" value={productName} onChange={handleProdNameChange} placeholder="Product Name" />
      <input className=" text-slate-950 rounded-md mr-2 placeholder-slate-400 focus:outline-none mt-1 px-2 py-2" type="text" value={productPrice} onChange={handleProdPriceChange} placeholder="Product price, eg:1000" />
      <button className="px-2 py-1 rounded-md bg-green-500 hover:bg-green-700 mt-2" type="submit" > Create Products</button>
      </div>
    </form>
    </div>

    </div>
    </main>
  )
}

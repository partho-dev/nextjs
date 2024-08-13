'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
const base_url = process.env.NEXT_PUBLIC_API_BASE_URL

export default function Home() {
//   const [users, setUsers] = useState([])
  const [products, setProducts] = useState([])

  useEffect(()=>{
    const prodapi = `${base_url}/products/`
    const fetchdata = async () =>{
      try {
        const response = await axios.get(prodapi)
        setProducts(response.data)
      } catch (error) {
        
      }
    }
    fetchdata()
  }, [])
 
  // handle delete items 
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${base_url}/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.log("Failed to delete product:", error.message);
    }
  }

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
    <h1 className="mt-11 mb-11" > List of <span className="text-xl text-blue-500"> Products </span>  from backend - /api/v1/products/ from <span className="text-xl text-blue-500"> Postgress DB </span>  </h1>
    <div className="bg-slate-800 p-6 rounded-md bg-gradient-to-r from-blue-800 to-slate-900 ">
    {products.length>0 ? products.map((elem)=> ( <div key={elem.id} className="flex justify-between items-center mb-2"> <p className="mb-2 text-nowrap" key={elem.id} > Product-Name - {elem.name} & its price is {elem.price}</p> <button onClick={() => handleDelete(elem.id)}> 🗑️ </button> </div>) ): "No products found - Add products from Home page" }
    </div>
    </div>

    </main>
  );
}

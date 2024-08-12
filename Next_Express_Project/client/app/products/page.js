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
 
  return (
    <main className="flex min-h-screen flex-col  items-center">

    <nav className=" w-full bg-slate-800 flex justify-around p-2">
      <Link href={"/"}>
      <p className=" cursor-pointer "> Home </p>
      </Link>
      
      <Link href={"/users"}>
      <p className=" cursor-pointer "> Users </p>
      </Link>

      <Link href={"/products"}>
      <p className=" cursor-pointer "> Product </p>
      </Link>
    </nav>

    <h1 className="mt-11 mb-11" > List of Products from backend - /api/v1/products/ from Postgress DB  </h1>
    <div className="bg-slate-800 p-6 rounded-md bg-gradient-to-r from-slate-600 to-slate-900 ">
    {products.length>0 ? products.map((elem, index)=> (<p className="mb-2 text-nowrap" key={elem.id} > Product-Name - {elem.name} & its price is {elem.price}</p>)): "No products found - Add products from Home page"}
    </div>
    </main>
  );
}

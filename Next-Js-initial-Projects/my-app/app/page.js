'use client'
import { useEffect } from "react";

export default function Home() {

  useEffect(()=>{
    console.log("Mounting")

    return ()=>{
      console.log("dismounting")
    }
  })
  
  return (
    <>
      <h1 className="p-10"> Hello Next JS</h1>
    </>
  );
}

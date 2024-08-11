'use client'
import React, { useEffect } from 'react'

const page = () => {
    useEffect(()=>{
        console.log("About is mounting")
        return (()=>{
            console.log("About is dismounting")
        })
    }, [])
  return (
    <div>
      about
    </div>
  )
}

export default page

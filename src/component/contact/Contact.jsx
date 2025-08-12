import React, { useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
    useEffect(()=>{
        const topButton = () =>{
            if (window.scrollY > 100) {
                console.log("pokk sei");
 
            }
            window.addEventListener("scrool",topButton)
        }
    },[])
  return (
    <div className='relative'>
        <div className=" fixed bottom-12 right-8 -0 w-[25px] h-[25px] rounded-full text-[#48DC62]  ">
            <a href="">
                <FaWhatsapp  size={40} />
            </a>
        </div>
    </div>
  )
}

export default Contact
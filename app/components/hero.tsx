import { Heebo } from "next/font/google";
import Image from "next/image";
import React from'react'

const heebo = Heebo({subsets:['latin']})
export default function Hero(){
    return(
        <div className="my-[66px] flex items-center justify-between mx-auto w-[1030px]  h-[308px] p-6">
      <div className="w-[521px] h-[305] flex flex-col justify-between items-start">
      <h1 className={'${heebo.className}text-[48px] font-black text-myBlack'}>Hi, I am John, <br/>
      Creative Technologist.</h1>
      <p className={`${heebo.className} text-myBlack text-[16px] font-normal`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p><br/><br/><br/>

      <button className={`${heebo.className} w-[205px] h-[50px] bg-myPink text-[18px] font-medium rounded-sm shadow-md shadow-black`}> Download Resume</button></ div>
<div className="w-[292px] h-[299px] relative">
<Image className='z-50' src={"/assets/image.png"}alt='image.png' width={292} height={299}/>
</div>                       
      <div className="bg-heroElipse w-[299px] h-[299px] top-40 right-12 -z-10 rounded-full absolute "></div>  
    </div> 
    )
}
import { Heebo } from "next/font/google";
import Link from "next/link";
    const heebo = Heebo({subsets:['latin']})
export default function RecentPost(){
    return(
        <div className='bg-recentBackground my-[66px] h-[502px] flex flex-col justify-evenly'>
        <div className=' w-[1030px] p-6 mx-auto flex justify-between'></div>
<div className='w-[483px] j-[356px] flex items_center bg-white'>
<div className='m-auto w-[391px] h-[286px] flex flex-col items-start justify-between'>
            <h2 className={`${heebo.className} font-bold text-[26px]`}>Making a design system from scratch</h2>
            <div className='w-[301.28px] h-[42.12px] flex items-center justify-between'>
                <p className={'${heebo.className} text-[18px] font-normal text-black/70'}>12 Feb 2009</p>
                <p className={'${heebo.className} text-[18px] font-normal text-black/70'}>I</p>
               <p> Design, Pattern</p>    
                
                
            <Link href={""} className={`${heebo.className}text-[22px] text-myPink font-medium`}>View All</Link>    
            </div>
            <p>Making a design system from scratch
12 Feb 2020
Design , Pattern
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          
            </div></div></div>
    )
}
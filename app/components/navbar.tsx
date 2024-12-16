import { Inter } from "next/font/google"
import Link from"next/link";
//FONT HERE//
const inter = Inter({subsets:["latin"]})
export default function Navbar(){
    //NAVEBAR ITEMS HERE//
    const navItems = [{
        name:"works",
        link:"#",
    },
    {
        name:"works",
        link:"#",
    },

    {
        name:"Blog",
        link:"#",
    },
    {
        name:"Contact",
        link:"#",
    }]
    return (
        <ul className={`${inter.className} flex item-center justify-end h-[24px] m-[66px] font-medium text-[20px] space-x-6`}>

            {navItems.map((item, i)=>(
                <li key={i}>
                    <Link href={item.link}>{item.name}</Link></li>
                    ))}


            {/*<li>Works</li>
            <li>Blog</li>
            <li>Contact</li>*/}
             
             </ul>
            )}
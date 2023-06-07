import react from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ImFacebook2 } from 'react-icons/Im';
import { BsYoutube } from 'react-icons/Bs';
import {BsBookFill}  from 'react-icons/Bs';
const Footer = ()=>  {
    return(
        <div  className='bg-green-200 z-50 sticky bottom-0'>
            <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src={require("../../../public/asseds/pic/f162.png")}
     alt="Swabi F16 Nasware"
     width={90} 
     height={100} />
      <span className="ml-3 text-xl">Swabi F16 nsware</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      F16 2023 Swabi F16 Naswar 
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500">
        
      </a>
      <Link href={"https://www.piaic.org/"} className="ml-5 text-3xl hover:text-green-950 text-yellow-500">

        <BsBookFill/>
      </Link>
      <Link href={"https://www.youtube.com/watch?v=hfDSmDgbFRY&list=PLplW4d4HPsEJ_KTL4rT0tpYSlMTOG0s0X&index=9"} className="ml-5 text-3xl hover:text-pink-700 text-red-500">
      <BsYoutube/>
      </Link>
      <Link href={"https://web.facebook.com/profile.php?id=100090638882853"} className="ml-5 text-2xl  hover:text-pink-950 text-blue-700">
      <ImFacebook2/>
         
      </Link>
    </span>
  </div>
</footer>

        </div>
    )
}
export default Footer;
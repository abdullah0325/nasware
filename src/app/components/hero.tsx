"use client";
import Link from 'next/link';
import react from 'react'
import Typewriter from 'typewriter-effect';

import Image from 'next/image';
const Hero = ()=>  {
    return(
      
            <section className="text-gray-600 body-font bg-fixed bg-cover bg-center bg-pink-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      Swabi F16 Naswar: 
        <br className="hidden lg:inline-block" />
         
        <Typewriter
  options={{
    strings: ['Authentic Smokeless', 'Tobacco from Swabi','Dont use it '],
    autoStart: true,
    loop: true,
  }}
/>
    

      </h1>
      <div className='bg-slate-600 w-30'></div>
      <p className="mb-8 leading-relaxed">
      Naswar is a smokeless tobacco product that is popular in certain
       regions, including Swabi in Pakistan. However, it is
       important to note that using tobacco products, including naswar, 
       can have serious health risks and no health benefits.
      </p>
      <div className="flex justify-center">
        <Link href={"#contact"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
        </Link>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <Image src={require("../../../public/asseds/pic/nas.png")}
     alt="Swabi F16 Nasware"
     width={600} 
     height={400}
     />

      
    </div>
  </div>
</section>

      
    )
}
export default Hero;

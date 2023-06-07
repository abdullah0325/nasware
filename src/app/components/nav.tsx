import Link from 'next/link';
import { AiOutlineCloudDownload } from 'react-icons/Ai';
import Image from 'next/image';
import react from 'react'
const Nav = ()=>  {
    return(
        <div className='bg-pink-400 z-50 sticky top-0'>
            <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image  className='rounded-2xl' src={require("../../../public/asseds/pic/f162.png")}
     alt="Swabi F16 Nasware"
     width={90} 
     height={100} />


      <span className="p-4 ml-3 text-3xl ">Swabi F16 Nasware</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5  text-green-700 hover:text-red-600">Home</Link >
      <Link href={'#about'} className="mr-5 hover:text-blue-600">About</Link> 
      <Link href={'#skills'} className="mr-5 hover:text-blue-600">Skills</Link >
      <Link  href={"#projects"} className="mr-5 hover:text-blue-600">Projects</Link >
      <Link href={"#contact"} className="mr-5 hover:text-blue-600">Contect</Link >
      </nav>
      <a href='/asseds/cv/my-cv.pdf'>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none
     hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Downlod Cv
    < AiOutlineCloudDownload className='hover:bg-red-700 text-blue-700 text-2xl ml-2'/>
      
    </button>
    </a>
  </div>
</header>

        </div>
    )
}
export default Nav;


// import Link from 'next/link';
// import Image from 'next/image'; // Import Image from 'next/image' module
// import React from 'react'; // 'react' should be in lowercase

// const Nav = () => {
//   return (
//     <div>
//       <header className="text-gray-600 body-font">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//             {/* Use next/image component */}
//             <Image src= {require("../../../public/asseds/pic/log.png")}
//                    alt="Swabi F16 Nasware"
//                    width={100}
//                    height={100} />

//             <span className="ml-3 text-xl">Swabi F16 Nasware</span>
//           </a>
//           <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//             <Link href={"/"} className="mr-5 hover:text-red-600">Home</Link>
//             <Link href={'#'} className="mr-5 hover:text-blue-600">About</Link>
//             <Link href={'#'} className="mr-5 hover:text-blue-600">Skills</Link>
//             <Link href={"#"} className="mr-5 hover:text-blue-600">Projects</Link>
//             <Link href={"#"} className="mr-5 hover:text-blue-600">Contact</Link> {/* Corrected 'Contect' to 'Contact' */}
//           </nav>
//           <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none
//           hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
//             <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
//                  strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
//               <path d="M5 12h14M12 5l7 7-7 7"></path>
//             </svg>
//           </button>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Nav;

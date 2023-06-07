import Link from 'next/link';
import Image from 'next/image';
import react from 'react'
const Projects = ()=>  {
    return(
        <div  className='bg-blue-100'>
            <>
 
  <section className="text-gray-600 body-font">
    <div className=" py-10 ">
      <div className="flex flex-col text-center w-full py-8 bg-pink-200 mb-10">
        <h1 id='projects' className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          My  projects
        </h1>
       
      </div>
      <div className="flex flex-wrap -m-4 flex-1 mx-10">
        <div className="lg:w-1/3 sm:w-1/2  ">
          <div className="flex relative p-4 cursor-pointer">
            <Image
              alt="gallery"
              className="w-600  absolute inset-0 w-full h-full object-cover object-center"
              
              src={require('../../../public/asseds/project/fac.jpg')}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4
             border-gray-200 bg-white opacity-0 hover:opacity-100">
              
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Facebook  login Page
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
        Log in to Facebook
              </h1>
              <p className="leading-relaxed line-clamp-2">
                This simple facebook login page  Created by abdullah 
                and we deploved it on vercel 
              </p>
              <Link  target='-blank' href={'https://my-refo.vercel.app/'}>
              <button className=' hover:text-blue-900 mx-20 my-5 text-blue-300'>view project</button>
              </Link>
            </div>
           
        </div>
       
      </div>

      <div className="lg:w-1/3 sm:w-1/2  ">
          <div className="flex relative p-4 cursor-pointer">
            <Image
              alt="gallery"
              className="w-600  absolute inset-0 w-full h-full object-cover object-center"
              
              src={require('../../../public/asseds/project/fac.jpg')}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4
             border-gray-200 bg-white opacity-0 hover:opacity-100">
              
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Facebook  login Page
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
        Log in to Facebook
              </h1>
              <p className="leading-relaxed line-clamp-2">
                This simple facebook login page  Created by abdullah 
                and we deploved it on vercel 
              </p>
              <Link  target='-blank' href={'https://my-refo.vercel.app/'}>
              <button className=' hover:text-blue-900 mx-20 my-5 text-blue-300'>view project</button>
              </Link>
            </div>
           
        </div>
        </div>
       

        <div className="lg:w-1/3 sm:w-1/2  ">
          <div className="flex relative p-4 cursor-pointer">
            <Image
              alt="gallery"
              className="w-600  absolute inset-0 w-full h-full object-cover object-center"
              
              src={require('../../../public/asseds/project/fac.jpg')}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Example   portfolio   site
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
        Log in to Facebook
              </h1>
              <p className="leading-relaxed line-clamp-2">
                This simple Example   portfolio   site  Created by abdullah 
                and we deploved 
              </p>
              <Link target='-blank' href={'https://wpportfolio.net/website-portfolio/'}>
              <button className=' hover:text-blue-900 mx-20 my-5 text-blue-300'>view project</button>
              </Link>
              </div>
          
              </div>
              </div>
              
      </div>
      
    </div>
  </section>
  GitHub
</>

        </div>
    )
}


export default Projects;
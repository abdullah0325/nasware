import Image from 'next/image';
import react from 'react'
const About = ()=>  {
    return(
        <div id='about' className='bg-slate-300'>
          
            <section className="text-gray-600 body-font">
            <div className=" flex flex-col text-center w-full py-8 bg-pink-200">
        <h1 className="sm:text-6xl text-4xl font-medium title-font mb-0 text-gray-900">
          About Us
        </h1>
       
      </div>
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        
      <Image
      width={600}
      height={500}
        className=" object-cover object-center rounded"
        alt="hero"
        src={require('../../../public/asseds/pic/web3.jpeg')}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About    Us
        </h1>
      <p className="mb-8 leading-relaxed">
      As you delve into Web 3.0, you embark on a quest to 
      understand blockchain technology, decentralized applications,
       interoperability, privacy, and user-centric design. Similar to the 
      </p>
      <div className="flex justify-center">
        <a href="/asseds/cv/my-cv.pdf">
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          View Cv
        </button>
        </a>
        
      </div>
    </div>
  </div>
</section>

        </div>
    )
}
export default About;
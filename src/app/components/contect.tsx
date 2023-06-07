import react from 'react'
const Contact = ()=>  {
    return(
        <div  className='bg-green-100'>
          <div className="flex flex-col text-center w-full py-8 bg-pink-200">
        <h1 id='contact' className="sm:text-5xl text-6xl font-medium title-font  text-gray-900">
          Contact Us
        </h1>
       
      </div>
            <section className="text-gray-600 body-font relative">
  <div className="bg-slate-200 container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden
     sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.2767429164956!2d71.
        72326841975935!3d34.24148137762688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
        1!3m3!1m2!1s0x38d9477352f037ff%3A0x2e4ac1da35e411c1!2sSawabi%20f16%20naswar!5e0!3m2!
        1sen!2s!4v1685938121259!5m2!1sen!2s"
        style={{ filter: " contrast(1.2) opacity(1)" }}
      />
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
            New Basheer khan market umarzai bazar   charsadda 
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-indigo-500 leading-relaxed">abdullah0325@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">03075490325</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-slate-200 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Contact
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        feel free to contact
      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 
          focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 
          transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4 bg-slate-300">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2
           focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors 
           duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 
          focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 
          transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600
       rounded text-lg">
        Contact Us
      </button>
     
    </div>
  </div>
</section>

        </div>
    )}
    export default Contact;


    
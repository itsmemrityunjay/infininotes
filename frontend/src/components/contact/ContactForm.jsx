import React from 'react'

const ContactForm = () => {
  return (

<>
  {/* source https://tailblocks.cc/ */}
  <section className="text-gray-600 body-font relative ">
    <div className="container px-5 py-24 mx-auto flex sm:flex-wrap flex-nowrap">
      <div className="lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0"
          
          title="map"
          marginHeight={0}
          marginWidth={0}
          scrolling="no"

         


          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.657500481842!2d76.6731779754655!3d30.530722495367876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc2e25466d5e7%3A0xf0bbb65fa7fca376!2sSwami%20Vivekanand%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1710273084679!5m2!1sen!2sin"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        />
        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
              ADDRESS
            </h2>
            <p className="mt-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus amet fugit et eum exercitationem facilis quas iusto velit error quasi!
            </p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
              EMAIL
            </h2>
            <a className="text-red-500 leading-relaxed">example@email.com</a>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
              PHONE
            </h2>
            <p className="leading-relaxed">123-456-7890</p>
          </div>
        </div>
      </div>
      
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
  <div className="relative py-3 sm:max-w-xl sm:mx-auto">
    <div className="absolute inset-0 bg-gradient-to-r from-grey-700 to-zinc-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    <div className="text-white relative px-4 py-10 bg-gray-800 shadow-lg sm:rounded-3xl sm:p-20">
      <div className="text-center pb-6">
        <h1 className="text-3xl">Contact Us!</h1>
        <p className="text-gray-300">
          Fill up the form below to send us a message.
        </p>
      </div>
      <form>
        <input
          className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Subject"
          name="_subject"
        />
        <textarea
          className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Type your message here..."
          name="message"
          style={{ height: 121 }}
          defaultValue={""}
        />
        <div className="flex justify-between">
          <input
            className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            defaultValue="Send ➤"
          />
          <input
            className="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="reset"
          />
        </div>
      </form>
    </div>
  </div>
</div>

    </div>
  </section>








</>
  )
}

export default ContactForm
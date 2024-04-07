import React from 'react'
import MentorImg from '../../assets/Images/image-removebg-preview (29).png'

const Mentor = () => {
  return (
    <>
    <section className="py-8 md:py-16 xl:py-20 bg-zinc-100">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="w-full md:order-last">
        <div className="bg-transparent  overflow-hidden">
          <div className="p-4">
            <h6 className="text-lg font-semibold text-gray-800">Our Mentor</h6>
          </div>
          <div className="px-4 pb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600">
              Er. Ankur Gill
            </h2>
          </div>
          <div className="px-4 pb-4">
            <p className="text-black-700">
              Er. Ankur Gill is a true embodiment of inspiration and mentorship.
              His unwavering dedication to his craft and his relentless pursuit
              of excellence serve as a guiding light for all who have the
              privilege of knowing him. With a wealth of knowledge and
              experience in his field, he not only imparts technical wisdom but
              also instills a passion for learning and innovation in those he
              mentors.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:order-first">
        <div className="relative">
          <img
            src={MentorImg}
            alt="Portrait of stylish man in eyeglasses and jacket looking at camera"
            className="w-full md:max-w-md mx-auto rounded-lg shadow-lg bg-white"
          />
          {/* <img src="https://kits.moxcreative.com/laautor/wp-content/uploads/sites/7/2021/08/Thomas-Dietrich.png" alt="" class="absolute bottom-0 right-0 mb-4 mr-4 w-36"> */}
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Mentor
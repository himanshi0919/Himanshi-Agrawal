
import React from "react";
const Hero = () => {
return (
<div className="container mx-auto my-10">
     <div className="px-6 lg:px-16 py-10 rounded-3xl">
     <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
     <div className="flex flex-col gap-5 lg:gap-10">
      <p className="text-2xl sm:text-4xl md:text-5xl lg:text-4xl font-medium fontWeight-bold">
      A Digital Product Agency
      </p>
      <p className="text-sm sm:text-base lg:text-lg text-gray-500">
      Leading digital agency with solid design and development
      <br className="lg:flex hidden" />
      expertise. We build readymade websites, mobile applications,
      <br className="lg:flex hidden" />
      and elaborate online business services.
      </p>
      <button className="btn btn-sm lg:btn-lg bg-[#2639ED] text-white rounded-full border-none w-70 h-12 lg:w-40 capitalize"
      onClick={() => {window.location.href = "/desktop";
      }}>Contact Now
      </button>
      </div>
      <div>
      <img className="absolute top-[70px] left-[520px] w-[120px] h-[120px]"src="/assets/Ellipse 85.png" alt=""/>
      <img className="absolute top-[400px] left-[1000px] w-[160px] h-[1600x]"src="/assets/Rectangle 23.png" alt=""/>
      <img className="absolute top-[70px] left-[590px] rounded-t-none rounded-br-none rounded-bl-[180px] w-[654px] h-[412px] object-cover"
      src="assets/image8.png" alt=""/>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;





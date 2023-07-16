import React from 'react'

const Client = () => {
  return (
   
    <div className="px-4 lg:px-16 py-10 rounded-3xl">
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10">
    <div className="flex flex-col gap-2 lg:gap-2">
    <p className="text-xl sm:text-2xl md:text-5xl lg:text-3xl font-medium fontWeight-bold absolute top-[650px] left-[70px]">
    Our Client
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-10 py-10">
    <p className="text-sm sm:text-base lg:text-lg text-gray-500 absolute top-[720px] left-[70px]">
    Several selected clients, who already
    <br className="lg:flex hidden" />
    believe in our service.
    </p>

    <div className="flex flex-row gap-10 items-center">
   <img className="absolute top-[720px] left-[500px]"src="./assets/Google Logo.png" alt=""/>
   <img className="absolute top-[720px] left-[690px]" src="./assets/Airbnb Logo.png" alt=""/>
   <img className="absolute top-[720px] left-[810px]" src="./assets/Uber Eats Logo.png" alt=""/>
   <img className="absolute top-[720px] left-[900px]" src="./assets/Amazon Logo.png" alt=""/>
          
        </div>
        </div> 
        </div>
        </div>
    </div>
    
  
    
    
  )
}

export default Client;

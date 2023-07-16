import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col gap-2 lg:gap-4">
    <hr className="absolute top-[3350px] left-[80px] w-[1150px] border-[1px] border-gray opacity-10"/>
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 absolute top-[3450px] left-[80px]">
    <span className="ml-3 text-[28px]" style={{color: 'black', fontWeight: 'bold' }}>A+</span>
    <span className="ml-3 text-[28px]">Studio</span>
    </a> 
    <p className="text-[14px] text-sm text-gray-500  absolute top-[3510px] left-[92px]">
    Leading digital agency with solid design   
    <br className="lg:flex hidden" />
    and development expertise.We build
    <br className="lg:flex hidden" />
    readymade websites, mobile applications,
    <br className="lg:flex hidden"/>
    and elaborate online business services.
    </p>
    <img className="absolute top-[3650px] left-[80px] w-9 h-9 overflow-hidden" alt="" src="assets/facebook.png"/>
    <img className="absolute top-[3650px] left-[135px] w-9 h-9 overflow-hidden" alt="" src="assets/twitter.png"/>
    <img className="absolute top-[3650px] left-[190px] w-9 h-9 overflow-hidden" alt="" src="assets/linkedin.png"/>
    <hr className="absolute top-[3730px] left-[80px] w-[1150px] border-[1px] border-gray opacity-10"/>
    <div className="absolute top-[3760px] left-[570px] md:text-left text-gray-120 text-[14px] w-[186px] h-[22px]">
    Designed By Himanshi
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
    <div className="lg:w-1/4 md:w-1/2 w-full px-4 absolute top-[3450px] left-[500px]">
    <h2 className="text-[22px]" style={{color: 'black', fontWeight: 'bold' }}>What We Do</h2>
    <div className='absolute top-[50px]'>
    <nav className="list-none mb-16">
    <li style={{ marginBottom: '10px' }}>
    <a className="text-black-600">Web Design</a>
    </li>
    <li style={{ marginBottom: '10px'}}>
    <a className="text-black-600">App Design</a>
    </li>
    <li style={{ marginBottom: '10px' }}>
    <a className="text-black-600">Social Media Manage</a>
    </li>
    <li style={{ marginBottom: '10px' }}>
    <a className="text-black-600">Market Analysis Project</a>
    </li>
    </nav>
  
    <div className="px-4 absolute top-[-50px] left-[230px]">
    <h2 className="text-[22px]" style={{color: 'black', fontWeight: 'bold' }}>Company</h2>
    <div className='text-[16px] absolute top-[50px]'>
    <nav className="list-none mb-16">
    <li style={{marginBottom: '10px'}}>
    <a className="text-black-600">About Us</a>
    </li>
    <li style={{ marginBottom: '10px'}}>
    <a className="text-black-600">Career</a>
    </li>
    <li style={{display: 'inline-block', marginBottom: '10px',marginRight: '10px'}}>
    <a className="text-black-600">Become Investor</a>
    </li>
    </nav>
   
    <div className="px-4 absolute top-[-50px] left-[180px]">
    <h2 className="text-[22px]" style={{color: 'black', fontWeight: 'bold' }}>Support</h2>
    <div className='text-[16px] absolute top-[50px]'>
    <nav className="list-none mb-16">
    <li style={{marginBottom: '10px'}}>
    <a className="text-black-600">FAQ</a>
    </li>
    <li style={{ marginBottom: '10px'}}>
    <a className="text-black-600">Policy</a>
    </li>
    <li style={{marginBottom: '10px'}}>
     <a className="text-black-600">Business</a>
    </li>
    </nav>
    <div className="px-4 absolute top-[-50px] left-[140px]">
    <h2 className="text-[22px]" style={{color: 'black', fontWeight: 'bold' }}>Contact</h2>
    <div className='text-[16px] absolute top-[50px]'>
    <nav className="list-none mb-16">
    <li style={{marginBottom: '10px'}}>
    <a className="text-black-600">WhatsApp</a>
    </li>
    <li style={{ marginBottom: '10px'}}>
    <a className="text-black-600">Support 24</a>
    </li>
    </nav>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
     </div>
    </div>
   
   

   


  );
}

export default Footer;
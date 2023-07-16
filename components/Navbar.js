import React from 'react'
import Head from 'next/head'

const Navbar = () => {
  return (
    <Head class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href="/"class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <span className="ml-12 text-xl" style={{ fontSize: '35px', color: 'black', fontWeight: 'bold' }}>A+</span>
  <span className="ml-2 text-xl" style={{ fontSize: '35px', color: 'black' }}>Studio</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href="/" class="mr-10">Home</a>
      <a class="mr-10">What We Do</a>
      <a class="mr-10">Service</a>
      <a class="mr-10">Project</a>
      <a class="mr-10">Blog</a>
      <a class="mr-10">Contact</a>
    </nav>
   
  </div>
</Head>
 
  );
}

export default Navbar;
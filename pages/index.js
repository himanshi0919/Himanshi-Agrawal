import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Client from '@/components/Client';
import Business from '@/components/Business';
import Digital from '@/components/Digital';
import Happyclient from '@/components/Happyclient';
import Subscribe from '@/components/Subscribe';
import Footer from '@/components/Footer';

export default function Home() {
  return (
  <div>
  <Head>
  <title>A+ Studio</title>
  <meta name="description" content="Generated by create next app" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap" ></link>
  <link rel="icon" href="/favicon.ico" />
  </Head>
  <Hero/>
  <Client/>
  <Business/>
  <Digital/>
  <Happyclient/>
  <Subscribe/>
  <Footer/>
    <Navbar/>
  </div>
  );
}

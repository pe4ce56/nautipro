"use client"
import Image from 'next/image'
import Header from './layouts/Header'
import Button from './layouts/Components/Button'
import { useState } from 'react'
import Footer from './layouts/Footer'

export default function Home() {

  const style = {
    padding: ' py-12 px-24 '
  }

  const WhoWeAre = () => {
    return (
      <div className={`grid grid-cols-2 grid-flow-col gap-4 ${style.padding}`}>
        <div className='flex justify-center flex-col pr-16'>
          <h1 className='font-semibold text-3xl'>WHO WE ARE</h1>
          <p className='mt-5 text-md leading-8'>
            <b>NautiPro Connect Solution,
            </b> a newly established company, brings a fresh and innovative approach to the maritime industry.
            With a passion for excellence and a commitment to customer satisfaction, NautiPro Solutions aims to provide comprehensive and reliable solutions that optimize maritime operations and promote safety.</p>
          <div className="w-[145px] h-[42px] px-[15px] py-2.5 bg-blue-950 justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-[15px] font-normal leading-snug">Learn More</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>


          </div>
        </div>
        <div className='flex justify-end'>
          <img className="w-[560px] h-[335px]" src="https://via.placeholder.com/560x335" />
        </div>

      </div>
    )
  }


  const WhatWeDo = () => {
    return (
      <div className={`grid grid-cols-2 grid-flow-col gap-4 bg-secondary-100 ${style.padding}`}>
        <div className='flex justify-start'>
          <img className="w-[560px] h-[335px]" src="https://via.placeholder.com/560x335" />
        </div>
        <div className='flex justify-center flex-col pr-16'>
          <h1 className='font-semibold text-3xl'>What We Do</h1>
          <p className='mt-5 text-md leading-8'>
            As a third-party liaison, we specialize in providing comprehensive and reliable solutions for the maritime industry. Our services include</p>
          <ul className='list-disc list-inside text-md leading-8' >
            <li>Ship Navigation Equipment</li>
            <li>Loading Somputer: Stowage Plans</li>
            <li>Planned Maintenance System (PMS)</li>
            <li>Ship Spare Parts</li>
            <li>Crewing Agency Service</li>
          </ul>
          <div className="w-[145px] h-[42px] px-[15px] py-2.5 bg-blue-950 justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-[15px] font-normal leading-snug">Learn More</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>


          </div>
        </div>


      </div>
    )
  }


  const WhyUs = () => {
    const [active, setActive] = useState(1);
    const List = ({ active = false, onMouseEnter = () => { } }: any) => {
      return (
        <div onMouseEnter={() => onMouseEnter()}
          className={`transition-all duration-700 px-6 shadow-xl 
           ${active ? " col-span-3 text-white  py-32 bg-[url('/assets/bg-1.png')] bg-cover bg-no-repeat " : " col-span-2 py-20 bg-white "}
          `}
        >

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-14 h-14  ${active ? "text-white" : "text-secondary-700"}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>

          <p className="font-bold text-lg mt-7">QUALITY PRODUCTS AND PARTNERTSHIPS</p>
          <p className={`mt-9 leading-6  ${active ? "text-white" : "text-secondary-800"}`}>Through strategic partnerships with trusted vendors and manufacturers, we source high-quality products and spare parts</p>
        </div >
      )
    }

    return (
      <div className={`bg-[url('/assets/bg-1.png')] bg-contain bg-top bg-no-repeat w-full min-h-[881px] ${style.padding}`}>
        <h1 className='text-center text-white text-3xl font-bold '>WHY US</h1>
        <div className="grid grid-cols-3 justify-center text-white text-center text-2xl mt-20  leading-8">
          <div className="items">
            <p className='mt-9'>TOTAL SUPPLIERS</p>
            <p className='mt-7 text-5xl'>73</p>
            <p>COMPANIES</p>
          </div>
          <div className="items">
            <p>CUSTOMER<br />SATISFACTION RATE</p>
            <p className='text-7xl mt-7'>99,5%</p>
          </div>
          <div className="items">
            <p className='mt-9'>TOTAL CLIENT</p>
            <p className='mt-7 text-5xl'>73</p>
            <p>CLIENT</p>
          </div>
        </div>
        <div className="px-5 mt-36 grid grid-cols-9 gap-4">
          {[1, 2, 3, 4].map((d) => (
            <List active={active == d} onMouseEnter={() => setActive(d)} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className='h-min-screen'>
      <Header overlay={true} />
      <div className="w-full h-[600px] p-2.5 bg-slate-900 bg-opacity-75 flex-col justify-center items-center gap-[30px] inline-flex bg-[url('/assets/banner1.png')] bg-cover bg-center bg-no-repeat">
        <div className="text-center text-white text-[32px] font-semibold leading-[34px] leading-relaxed">Connecting Seas<br />Empowering Journeys</div>
      </div>
      <div className="">
        <WhoWeAre />
        <WhatWeDo />
        <WhyUs />
      </div>
      <Footer />

    </div>
  )
}

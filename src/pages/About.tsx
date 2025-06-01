import CommonWrapper from '@/common/CommonWrapper'

import Values from '@/components/about/Values'
import Tagline from '@/components/about/Tagline'
import Benefits from '@/components/about/Benefits'
import Trusted from '@/components/about/Trusted'
import StatsChart from '@/components/about/StatsChart'
import car from '../assets/car.png'

const About = () => {
  return (
    <CommonWrapper>
    <div>
      <div className='flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-20 bg-black text-white abosolute'>
      <div className='flex flex-col max-w-2/3 py-[112px]'>
      
        <p className='text-6xl font-bold font-primary text-white'>About Us: <br /> WrapMyRide.ai
      </p>
      <p className='font-secondary text-[#FFFFFFB2] text-lg py-6'>WrapMyRide.ai is the industry’s first AI-powered car wrap visualization platform built for wrap shops, tint pros, and auto dealerships. Our mission is simple: help you sell more wraps by letting customers see the transformation before they commit.
      With realistic AI previews, instant lead capture, and seamless CRM integration, we’re not just showing wraps — we’re redefining how they’re sold.
      </p>
      </div>
      <div>
        <img className='lg:relative lg:-right-20' src={car} alt="" />
      </div>
    </div>
    <div className='flex flex-col md:flex-row gap-x-20'>
      <p className='font-primary text-white text-5xl font-bold'>WrapMyRide.ai by the <br /> numbers</p>
      <div>
  <p className="text-center text-[#FFFFFFB2] font-secondary text-base md:text-lg pt-5">
    In Just One Year, We've Helped Shops Sell Smarter.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 max-w-4xl mx-auto">
    <div className="text-center">
      <p className="text-white font-primary font-bold text-2xl md:text-3xl">25,000+</p>
      <p className="text-[#FFFFFFB2] font-secondary text-base">AI wraps generated</p>
    </div>

    <div className="text-center">
      <p className="text-white font-primary font-bold text-2xl md:text-3xl">300+</p>
      <p className="text-[#FFFFFFB2] font-secondary text-base">Shops & dealerships onboarded</p>
    </div>

    <div className="text-center">
      <p className="text-white font-primary font-bold text-2xl md:text-3xl">1.2M+</p>
      <p className="text-[#FFFFFFB2] font-secondary text-base">Customer previews served</p>
    </div>

    <div className="text-center">
      <p className="text-white font-primary font-bold text-2xl md:text-3xl">12+ countries</p>
      <p className="text-[#FFFFFFB2] font-secondary text-base">Leads delivered in</p>
    </div>
  </div>
</div>
    </div>
    <div>
  <div className='py-20 max-h-[740px]'>
    <StatsChart/>
  </div>

  
  </div>
  <Values/>
  <Tagline/>
  <Benefits />
  <Trusted />
    </div>
    </CommonWrapper>
  )
}

export default About
import SimpleCard from '@/common/SimpleCard'
import { FaCube } from 'react-icons/fa6'

const Benefits = () => {
  return (
    <div>
        <div className='flex items-center justify-center flex-col py-12'>
            <p className='text-lg font-secondary font-normal text-[#FFFFFFB2]'>Benefits</p>
            <p className='text-white text-5xl font-bold font-primary pb-10'>Powered by Precision AI</p>
        </div>
        <div className='flex justify-between flex-col md:flex-row gap-x-10'>
        <div className="p-[2px] w-1/2 custom-card">
      <div className="bg-[#000000] p-10 flex flex-col items-center justify-center space-x-4 ">
        <p className="text-white font-primary text-2xl font-bold text-center leading-relaxed">
          WrapAI — Product Intelligence & <br /> Development
        </p>
        <p className='text-lg font-secondary font-normal text-[#FFFFFFB2]'>WrapAI continuously analyzes user behavior, feedback, and industry trends to refine every tool and feature inside the platform.</p>
      </div>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-1/2'>
        <SimpleCard className='border-1 border-gray-400 gap-8 p-5' icon={<FaCube className="w-9 h-10 text-white" />} title='VisualAI — Wrap Rendering Engine' description='VisualAI transforms car photos and user prompts into realistic, high-quality wrap mockups — in seconds, not days.'  />
        <SimpleCard className='border-1 border-gray-400 gap-8 p-5' icon={<FaCube className="w-9 h-10 text-white" />} title='MarketAI — Ad Targeting & Lead Generation' description='From paid ads to remarketing funnels, MarketAI optimizes your campaigns automatically, learning what converts and scaling what works.'  /> 
        <SimpleCard className='border-1 border-gray-400 gap-8 p-5' icon={<FaCube className="w-9 h-10 text-white" />} title='SupportAI — Customer Experience Chatbot' description='Available 24/7 to answer your questions, guide you through wrap previews, or troubleshoot anything technical.'  />
        <SimpleCard className='border-1 border-gray-400 gap-8 p-5' icon={<FaCube className="w-9 h-10 text-white" />} title='SyncAI — Shop CRM Integration' description='Manages wrap shop data pipelines, auto-syncing requests, leads, and orders between your platform and your CRM.'  />
    </div>
    </div>
    <div className='flex justify-start flex-col py-12 custom-card my-20 p-12'>
       <p className='font-primary text-white text-2xl font-bold'>Why AI?</p>
       <p className='text-lg font-secondary font-normal text-[#FFFFFFB2]'>We’ve replaced bloated teams and long timelines with smart systems that <br /> learn and evolve every day — without losing the human touch.</p>
    </div>
    </div>
  )
}

export default Benefits
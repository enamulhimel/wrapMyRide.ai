import SimpleCard from '@/common/SimpleCard'
import { FaCube } from 'react-icons/fa6'


const Values = () => {
  return (
    <div className='mt-6'>
    <p className='font-secondary text-[#FFFFFFB2] text-lg font-normal py-4'>Our Values</p>
    <p className='font-primary text-white text-5xl font-bold py-4'>What Drives Us</p>
    <p className='font-secondary text-[#FFFFFFB2] text-lg font-normal py-4'>At WrapMyRide.ai, we believe three values drive every decision we make:
    </p>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      <SimpleCard
        icon={ <FaCube className="w-9 h-10 text-white" />}
        title="Speed Over Complexity"
        description="The fastest tool wins. We help shops capture customers in the moment — when interest is hot and hesitation is high."
      />
      <SimpleCard
        icon={ <FaCube className="w-9 h-10 text-white" />}
        title="Show, Don’t Sell"
        description="We replace pitches with previews. When customers see the wrap on their own car, the decision sells itself."
      />
      <SimpleCard
        icon={ <FaCube className="w-9 h-10 text-white" />}
        title="Own Your Leads"
        description="Your customers are your asset. We’ll never touch their data — we just help you capture and close them."
      />
    </div>
    </div>
  )
}

export default Values
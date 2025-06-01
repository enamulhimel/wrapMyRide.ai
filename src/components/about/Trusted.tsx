
import Placeholder1 from '../icons/Placeholder1'
import Placeholder2 from '../icons/Placeholder2'
import CardVisual from './CardVisual'

const Trusted = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-between gap-10 px-5 md:px-0 py-20 bg-[#000000] md:flex-row'>
        <div className='w-1/2'>
        <p className='text-white font-primary text-5xl font-bold py-5'>Trusted by Industry <br /> Leaders in Custom <br /> Automotive Sales</p>
        <p className='text-lg font-secondary font-normal text-[#FFFFFFB2]'>From local wrap shops to national dealership groups, WrapMyRide.ai is helping businesses close more deals by making wraps instant, visual, and unforgettable.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 pt-10 items-center justify-around'>
            <Placeholder1 className='size-[150px] flex items-center justify-center border border-gray-400 px-10 '/>
            <Placeholder2 className='size-[150px] flex items-center justify-center border border-gray-400 px-10'/>
            <Placeholder1 className='size-[150px] flex items-center justify-center border border-gray-400 px-10'/>
            <Placeholder2 className='size-[150px] flex items-center justify-center border border-gray-400 px-10'/>
        </div>
    </div>
    <div>
        <CardVisual
          header="Want your business featured here?"
          buttonText="JOIN NOW"
          className=""
        />
    </div>
    </div>
  )
}

export default Trusted
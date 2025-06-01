

import CommonWrapper from '@/common/CommonWrapper'
import CarWrapGallery from '@/components/howItWork/CarWrapGallery'
import WorkBanner from '@/components/howItWork/WorkBanner'
import WorkTab from '@/components/howItWork/WorkTab'


const HowItWorks = () => {
  return (
    <div className='pt-[150px]'>
    <WorkBanner/>
    <CommonWrapper>
      <WorkTab/>
      <CarWrapGallery/>
    </CommonWrapper>
    </div>
  )
}

export default HowItWorks
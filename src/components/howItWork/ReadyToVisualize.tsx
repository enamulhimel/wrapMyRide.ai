import CommonWrapper from '@/common/CommonWrapper'
import VisualizeCard from '@/common/howItWork/VisualizeCard'


const ReadyToVisualize = () => {
  return (
    <div className='pt-[150px] px-5 md:px-0'>
      <CommonWrapper>
      <VisualizeCard
        header="Ready to Visualize Your Wrap? "
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        buttonText="Get Started"
        className=""
       
      />
      </CommonWrapper>

            </div>
  )
}

export default ReadyToVisualize
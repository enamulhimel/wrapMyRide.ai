import workbg from '../../assets/workbg.jpg'

const WorkBanner = () => {
  return (

        <div
    className="w-full bg-cover bg-center bg-no-repeat pb-20 pt-30"
    style={{ backgroundImage: `url(${workbg})` }}
  >
    <div className="text-center mb-10 max-w-4xl mx-auto px-4 md:px-20">
      <h2 className="text-3xl md:text-5xl font-bold mb-2 text-white">
        Seeing Your Wrap <br /> Idea is Easy
      </h2>
      <p className="text-gray-100 text-base md:text-lg">
        Follow these simple steps to bring your car wrap vision to life with AI.
      </p>
    </div>
  </div>
  )
}

export default WorkBanner
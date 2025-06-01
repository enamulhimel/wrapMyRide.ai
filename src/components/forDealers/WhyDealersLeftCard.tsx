import backgroundImage from"../../assets/cardImg.png"
import incress from "../../assets/forDelars/incress.svg"

const WhyDealersLeftCard = () => {
  return (
 
          <div
      className={`relative lg:p-16 p-6   custom-card  h-full flex flex-col items-center justify-center  `}
      style={{
        backgroundColor: "#000000",
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Crect width='49' height='49' fill='none' stroke='%23ffffffcc' stroke-width='0.3'/%3E%3C/svg%3E"),
          url(${backgroundImage})
        `,
        backgroundRepeat: "repeat, no-repeat",
        backgroundPosition: "top left, center",
        backgroundSize: "auto, cover",
       
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0 "  />

      <div className="relative z-10   h-full  flex flex-col justify-center items-center ">
        <div className="">
          <img src={incress} alt="" />
   <h2 className="text-white text-2xl font-primary font-bold leading-6 pt-4">Increase Website Engagement </h2>    
         <p className="text-white text-base font-secondary font-normal leading-6 pt-6">Keep visitors on your site longer with an interactive tool. Icon: Upward trend graph. </p>
        </div>
     
   
        
    
      </div>
    </div>
 
  )
}

export default WhyDealersLeftCard


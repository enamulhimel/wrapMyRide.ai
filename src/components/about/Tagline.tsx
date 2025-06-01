import textQuote1 from '../../assets/Text1.svg'
import textQuote2 from '../../assets/Text2.svg'
import img from '../../assets/image.png'
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaDribbble } from "react-icons/fa";

const Tagline = () => {
  return (
    <div className='py-12'>
        <p className='text-lg font-secondary font-normal text-[#FFFFFFB2]'>Tagline</p>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div>
        <p className='text-white text-5xl font-bold font-primary pb-10'>Meet the Team at <br /> WrapMyRide.ai</p>
        <div className="p-[2px] rounded-2xl" style={{
      background: 'conic-gradient(from 139deg at 50.66% 50%, #CC1A70 14.63deg, #FFE600 164.42deg, #BC010A 360deg)'
    }}>
      <div className="bg-[#000000] rounded-xl p-10 flex items-center justify-center space-x-4">
        <img src={textQuote1} alt="Start Quote" className="w-6 h-6 -mt-6" />
        <p className="text-[#FFFFFFB2] font-secondary text-base text-center leading-relaxed">
          AI didn’t replace a team — it <br /> created a new kind of team.
        </p>
        <img src={textQuote2} alt="End Quote" className="w-6 h-6 -mb-4" />
      </div>
    </div>
    </div>
     <div className="bg-[#0D0D0D] text-white rounded-2xl shadow-lg p-6 w-full max-w-sm flex flex-col items-start border border-transparent hover:border-pink-500 transition duration-300">
      <img src={img} alt="John Cronin" className="w-full h-50 rounded-md object-cover mb-4" />
      
      <h3 className="text-xl font-medium font-secondary">John Doa</h3>
      <p className="text-base text-[#FFFFFFB2] font-secondary font-normal mb-2">Founder & CEO</p>
      
      <p className="text-base text-[#FFFFFFB2] font-secondary font-normal mb-4">
        The mind behind the mission. John leads WrapMyRide.ai with a bold vision: to empower car owners and wrap shops with cutting-edge tools that save time, boost creativity, and convert leads into loyal customers.
      </p>
      
      <div className="flex flex-row space-x-4">
          <FaLinkedin />
          <BsTwitterX />
          <FaDribbble />
      </div>
    </div>
        </div>
    </div>
  )
}

export default Tagline

//background: url(<path-to-image>) lightgray 0% 0% / 100px 100px repeat, var(--Black, #000);
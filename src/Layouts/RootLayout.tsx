
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";


const RootLayout = () => {
  return (
    <div  className="bg-[#000]">
      <Navbar/>
  <main>
    
      <Outlet />
 
    </main>
    <Footer/>
    </div>
  
  );
};

export default RootLayout;

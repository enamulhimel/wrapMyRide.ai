
import RootLayout from "@/Layouts/RootLayout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import ForDealers from "@/pages/ForDealers";
import ForWrapShops from "@/pages/ForWrapShops";
import Home from "@/pages/Home";
import HowItWorks from "@/pages/HowItWorks";
import Pricing from "@/pages/Pricing";
import WhyUs from "@/pages/WhyUs";


import { createBrowserRouter } from "react-router-dom";

const RootRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {path: "/", element: <Home />},
      {path: "/howItWorks", element: <HowItWorks />},
      {path: "/forDealers", element: <ForDealers />},
      {path: "/forWrapShops", element: <ForWrapShops />},
      {path: "/whyUs", element: <WhyUs/>},
      {path: "/pricing", element: <Pricing />},
      {path: "/about", element: <About />},
      {path: "/contact", element: <Contact />}, 
    ],
  },
]);

export default RootRoutes;

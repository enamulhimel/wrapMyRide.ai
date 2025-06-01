import CommonWrapper from "@/common/CommonWrapper";
import backgroundImage from "../../assets/cardImg.png";

import footerLogo from "../../assets/wrapLogo.png";
import SubcribeButton from "./SubcribeButton";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div
      className="relative p-6 bg-[#000000] border-t border-white/10"
      style={{
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Crect width='49' height='49' fill='none' stroke='%23ffffffcc' stroke-width='0.3'/%3E%3C/svg%3E"),
          url(${backgroundImage})
        `,
        backgroundRepeat: "repeat, no-repeat",
        backgroundPosition: "top left, center",
        backgroundSize: "auto, cover",
      }}
    >
      <div className="absolute inset-0 h-full bg-black/70 z-0 pointer-events-none" />
      <div className="relative z-10">
        <CommonWrapper>
          <div className="max-w-full pt-[100px] pb-[60px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Logo & Newsletter */}
              <div className="w-full lg:w-[40%]">
                <img
                  src={footerLogo}
                  alt="footerLogo"
                  className="h-16 w-[83px]"
                />

                <p className="text-lg font-secondary text-white font-normal leading-7 mb-2">
                  Join our newsletter to stay up to date on features and
                  releases.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center mt-3 gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-3 py-2 bg-black w-full sm:w-[300px] h-[48px] border-white text-[rgba(255,255,255,0.5)] border font-secondary focus:outline-white/10"
                  />
                  <SubcribeButton>SUBSCRIBE</SubcribeButton>
                </div>

                <p className="text-sm text-[#FFFFFFB2] font-secondary leading-5 mt-3">
                  By subscribing you agree to our Privacy Policy and provide
                  consent to receive updates from our company.
                </p>
              </div>

              {/* Navigation Section */}
              <div className="w-full lg:w-[60%] flex flex-col sm:flex-row justify-between gap-6">
                {/* Navigation */}
                <div>
                  <h3 className="text-[20px] text-[#FFFFFFB2] font-medium font-secondary pb-4">
                    Navigation
                  </h3>
                  <ul className="space-y-3 text-base text-white font-secondary leading-6">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/howItWorks">How It Works</Link>
                    </li>
                    <li>
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>

                {/* Business Navigation */}
                <div>
                  <h3 className="text-[20px] text-[#FFFFFFB2] font-medium font-secondary pb-4">
                    Business Navigation
                  </h3>
                  <ul className="space-y-3 text-base text-white font-secondary leading-6">
                    <li>
                      <Link to="/forDealers">For Dealers</Link>
                    </li>
                    <li>
                      <Link to="/forWrapShops">For Wrap Shops</Link>
                    </li>
                  </ul>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-[20px] text-[#FFFFFFB2] font-medium font-secondary pb-4">
                    Follow Us
                  </h3>
                  <ul className="space-y-3 text-base text-white font-secondary leading-6">
                    <li className="flex items-center gap-2">
                      <FaFacebook className="h-6 w-6" /> Facebook
                    </li>
                    <li className="flex items-center gap-2">
                      <FaInstagram className="h-6 w-6" /> Instagram
                    </li>
                    <li className="flex items-center gap-2">
                      <FaXTwitter className="h-6 w-6" /> X
                    </li>
                    <li className="flex items-center gap-2">
                      <FaLinkedin className="h-6 w-6" /> LinkedIn
                    </li>
                    <li className="flex items-center gap-2">
                      <FaYoutube className="h-6 w-6" /> YouTube
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white mt-10 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center text-base text-white font-secondary gap-4">
                <p className="text-center md:text-left">
                  © 2025 WrapMyRide.ai. All rights reserved.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                  <a href="#" className="text-lg border-white/50 border-b">
                    PRIVACY POLICY
                  </a>
                  <a href="#" className="text-lg border-white/50 border-b">
                    TERMS OF SERVICE
                  </a>
                  <a href="#" className="text-lg border-white/50 border-b">
                    COOKIES SETTINGS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </CommonWrapper>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logoWhite.png";
import { brandsWhite, sponsor } from "../../utility/constant";

const Footer = () => {
  return (
    <footer className="">
      <section className="container mx-auto bg-[#503AE7]  mb-[-100px]  z-0  relative">
        <h2 className="text-center py-12 text-white">Our Sponsors</h2>
        <div className="grid grid-cols-1 md:grid-col-3 lg:grid-cols-5 justify-items-center gap-8 pb-12">
          {sponsor.map((item, index) => (
            <img
              key={index}
              src={item}
              alt=""
              className="max-w-[170px]  object-cover"
            />
          ))}
        </div>
      </section>
      <div className="bg-[#14142B] pt-[190px] z-[-10]  text-white">
        <div className="container mx-auto  pb-24  px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <img src={logo} alt="" className="w-[200px]" />
            </div>

            <div>
              <h4 className="text-[20px] font-bold">Pages</h4>

              <div className="pt-8 flex flex-col gap-4 text-white">
                <NavLink to={"/home"} className="cursor-pointer">
                  Home
                </NavLink>
                <p className="cursor-pointer">Podcast</p>
                <p className="cursor-pointer">Host</p>
                <p className="cursor-pointer">Blog</p>
              </div>
            </div>

            <div>
              <h4 className="text-[20px] font-bold">Reach Us</h4>
              <div className="pt-8 flex flex-col gap-4 text-white">
                <p>Contact</p>
                <NavLink to={"/about"} className="">
                  About
                </NavLink>
              </div>
            </div>

            <div>
              <h4 className="text-[20px] font-bold">Subscribe</h4>
              <div className="pt-8 flex flex-col gap-y-10 text-white">
                {brandsWhite.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    alt=""
                    className="max-w-[200px]  object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#503AE7]">
          <h2 className="text-[16px] font-bold text-center py-5">
            © Copyright Finsweet 2021
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

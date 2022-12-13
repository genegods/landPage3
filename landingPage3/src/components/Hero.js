import React from "react";
import { FcSearch } from "react-icons/fc";
import { CategoryData } from "../data/CategoryData";
import { NavLink } from "react-router-dom";

const Hero = () => {
      // active navLinks 
      const activeLink = " bg-blue-700 rounded-3xl";
      const normalLink = " ";
  return (
    <React.Fragment>
      <section>
        <div className="centered w-full h-screen text-white capitalize">
          <div className="w-4/5 h-4/5 centered flex-col ">
            
              <p className="text-5xl md:text-8xl">Explore your city</p>
            
             <div className="flex mt-14">
              <input className="py-2 px-16 md:py-5 md:px-48" />
              <div className="text-black w-10 bg-gray-300 centered md:w-20">
                <FcSearch className="text-2xl md:text-4xl" />
              </div>
             </div>

             <div>
              <div className="mt-10 centered">
                <p className='md:text-2xl'>popular categories</p>
              </div>

              <div className=" grid grid-cols-4 gap-2 mt-5 md:gap-16">
                {CategoryData.map((item, index) => {
                  return (
                    <div key={index} className="centered flex-col ">
                        <NavLink to={item.path}
                          className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                        >
                      <div className="w-20 h-20 border rounded-3xl centered flex-col hover:text-blue-500 activeLink md:w-28 md:h-28">
                        <div className="text-2xl md:text-4xl">{item.icon}</div>
                      <div className='centered text-sm md:text-xl'>{item.title}</div>
                      </div>
                      </NavLink>
                      
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;




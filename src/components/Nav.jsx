import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { VscColorMode } from "react-icons/vsc";
import { HiOutlineHome } from "react-icons/hi";
import { IoCodeWorkingOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const [openNav, setOpenNav] = useState(true);
  const styles = {
    activebutton: "underline text-gray-900",
  };

  const links = [
    {
      id: 1,
      activebutton: styles.activebutton,
      to: "/",
      name: "HOME",
      icon: <HiOutlineHome className="text-2xl" />,
    },
    {
      id: 2,
      activebutton: styles.activebutton,
      to: "/work",
      name: "WORK",
      icon: <IoCodeWorkingOutline className="text-2xl" />,
    },

    {
      id: 3,
      activebutton: styles.activebutton,
      to: "/about",
      name: "ABOUT",
      icon: <VscColorMode className="text-2xl" />,
    },
    {
      id: 4,
      activebutton: styles.activebutton,
      to: "/contact",
      name: "CONTACT",
      icon: <MdOutlineContactPage className="text-2xl" />,
    },
  ];

  return (
    <>
      <div
        className={`${
          openNav ? "w-44" : "w-20"
        }  h-full p-5 pt-8 duration-300 relative border border-black `}
      >
        <FaArrowLeft
          className={`bg-white text-3xl rounded-full p-2 absolute -right-3 top-9 border border-black cursor-pointer hover:bg-slate-50 ${
            !openNav && "rotate-180"
          }`}
          onClick={() => setOpenNav(!openNav)}
        />

        <div className="flex justify-center items-center ">
          <VscColorMode
            className={` text-3xl text-red-700 duration-300 ${
              openNav && "rotate-[360deg]"
            } ${!openNav && "text-black"}  `}
          />
        </div>

        {/* Menu Items */}
        <div>
          <ul className="pt-2 flex flex-col mt-40 gap-y-2 lg:gap-y-16 lg:mt-16  ">
            {links.map((link) => {
              return (
                <li
                  key={link.id}
                  className=" hover:bg-red-50 rounded-md transition duration-150 ease-in hover:ease-in  text-sm flex items-center cursor-pointer justify-between    "
                >
                  <button className="w-full">
                    <Link
                      className="flex items-center justify-center space-x-4 p-2"
                      activebutton={link.activebutton}
                      to={link.to}
                    >
                      <span className={`${!openNav && "text-red-300"}`}>
                        {link.icon}
                      </span>
                      <span
                        className={`  font-medium ${!openNav && "hidden"} `}
                      >
                        {link.name}
                      </span>
                    </Link>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;

/* {links.map((link, idx) => {
            return (
              <div
                key={idx}
                className=" hover:bg-slate-200 transition ease-in w-12 h-12 p-9 rounded-xl  md:w-16 md:h-16 flex items-center justify-center border border-black "
              >
                <button>
                  <Link activebutton={link.activebutton} to={link.to}>
                    {link.name}
                  </Link>
                </button>
              </div>
            );
          })} */

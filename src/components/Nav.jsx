import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const styles = {
    activebutton: "underline text-gray-900",
  };

  const links = [
    {
      activebutton: styles.activebutton,
      to: "/",
      name: "Home",
    },
    {
      activebutton: styles.activebutton,
      to: "/work",
      name: "Work",
    },

    {
      activebutton: styles.activebutton,
      to: "/about",
      name: "About",
    },
    {
      activebutton: styles.activebutton,
      to: "/contact",
      name: "Contact",
    },
  ];

  return (
    <>
      <div className=" sticky top-0 left-0 flex justify-between h-32 w-[100%]  bg-slate-100   nav-wrapper font-medium  p-8 md:w-[10%] md:h-full  flex-row md:flex-initial md:p-0 gap-4 md:flex-col lg:flex-col items-center  md:justify-around  ">
        <div>
          <h3 className="underline">Portfolio</h3>
        </div>
        <div className="flex gap-2  p-2 flex-row md:flex-initial md:p-2  md:flex-col  lg: lg:flex-col items-center  md:gap-2 md:justify-around">
          {links.map((link, idx) => {
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
          })}
        </div>
      </div>
    </>
  );
};

export default Nav;

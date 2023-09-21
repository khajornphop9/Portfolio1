import React from "react";
import ImgProfile from "../../assets/FB_IMG_Hero.jpg";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100"> 
     
     
      {/* Avartar Section */}
      <div className="flex-1">
        <a href="/">
          <div className="avatar mr-2">
            <div className="w-10 rounded-full mr-2">
              <img src={ImgProfile} />
            </div>
            <h1 style={{alignSelf:"center"}}>KAMONTODSAPON KONGSANG</h1>
          </div>
        </a>
     </div>


      {/* Navbar Button Section */}
        <div className="flex-none">
          <div className="mr-5">
            <a href="/" className="btn btn-ghost normal-case text-xl Home">
              Home
            </a>
          </div>

          <div className="mr-5">
            <a
              href="/about"
              className="btn btn-ghost normal-case text-xl About"
            >
              About
            </a>
          </div>
          <div className="mr-5">
            <a href="/project" className="btn btn-ghost normal-case text-xl">
              Project
            </a>
          </div>
          <div className="mr-5">
            <a href="/contact" className="btn btn-ghost normal-case text-xl">
              Contact
            </a>
          </div>
        </div> 
      </div>

    </div>
  );
};

export default Navbar;

import React from "react";
const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row min-h-screen
     border-red-500 border-2
     justify-center gap-10 max-container"
    >
      <div
        className="relative xl:w-2/5 flex flex-col 
      items-center justify-center w-full max-xl:padding-x pt-28"
      >
        <p>Our Summer Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nike</span>
          Shoes
        </h1>
        <p>
          Discover stylish Nike arrival, quality comfort, and innovations from
          active life
        </p>
      </div>
    </section>
  );
};

export default Hero;

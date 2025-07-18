import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants/index";
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
      items-start justify-center w-full max-xl:padding-x pt-28"
      >
        <p className="text-xl text-red-400 font-montserrat">
          Our Summer Collection
        </p>
        <h1
          className="mt-10 font-palanquin text-8xl 
        max-sm:text-[72px] max-sm:leading-[82px] font-bold"
        >
          <span
            className="xl:bg-white 
          xl:whitespace-nowrap 
          relative z-10 pr-10"
          >
            The New Arrival
          </span>
          <br />
          <span className="text-red-400 inline-block mt-3">Nike</span>
          Shoes
        </h1>
        <p>
          Discover stylish Nike arrival, quality comfort, and innovations from
          active life
        </p>
        <Button label="Show right" iconUrl={arrowRight} />
        <div
          className="flex justify-starts 
        items-start flex-wrap
      w-full mt-20 gap-16"
        >
          {statistics.map((stat) => {
            return (
              <div key={stat.label}>
                <p>{stat.value}</p>
                <p>{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;

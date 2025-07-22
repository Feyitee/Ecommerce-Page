import React from "react";
import { useState } from "react";

import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants/index";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row min-h-screen     justify-center gap-10 max-container"
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
          <span className="text-red-400 inline-block mr-5 mt-3">Nike</span>
          <span className="inline-block mt-3">Shoes</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
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
                <p className="text-4xl font-palanquin font-bold">
                  {stat.value}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-gray-200 bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

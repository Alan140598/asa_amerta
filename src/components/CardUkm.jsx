import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import { useEffect } from "react";
import AOS from "aos";

export default function CardUkm(props) {
  useEffect(() => {
    AOS.init({
      // once: true,
    });
  }, []);

  return (
    <div data-aos="flip-right" data-aos-duration="2000" className="lg:h-[470px] lg:w-[350px] bg-[#526077] rounded-lg flex flex-col lg:pt-7 lg:px-5 items-center text-blue-50">
      <div>
        <img src={props.img} alt="" className="lg:h-[200px] lg:w-[200px] rounded-full bg-red-400"/>
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <h1 className="font-semibold">{props.titel}</h1>
        <p className="text-sm">
         {props.desc}
        </p>
        <a href={props.link} className="flex gap-1 items-center rounded-lg bg-blue-50 lg:px-3 lg:py-1 text-black text-sm lg:w-[140px]">
          Selengkapnya <GrFormNextLink className="text-xl" />
        </a>
      </div>
    </div>
  );
}

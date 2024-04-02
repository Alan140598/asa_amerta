import React from "react";
import Header from "../components/Header";
import dataUkm from "../data/dataUkm.json";
import CardUkm from "../components/CardUkm";

export default function Ukm() {
  return (
    <div>
      <Header />
      <div className="lg:mt-20 flex flex-col items-center lg:py-10">
        <h1 className="text-5xl font-semibold">Daftar UKM Universitas Akprind Indonesia</h1>
        <div className="grid lg:grid-cols-3 lg:gap-10 lg:mt-10">
          {dataUkm.map((item) => (
            <CardUkm titel={item.titel} desc={item.desc} img={item.img}/>
          ))}
        </div>
      </div>
    </div>
  );
}

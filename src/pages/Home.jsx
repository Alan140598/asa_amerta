import Button from "../components/Button";
import CardFaq from "../components/CardFaq";
import dataFaq from "../data/dataFaq.json";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";


// icon
import { MdLogin } from "react-icons/md";
import { GrFormNextLink } from "react-icons/gr"
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Home() {
const navigate = useNavigate()

    useEffect(() => {
        AOS.init({
          // once: true,
        });
      }, []);
  return (
    <div>
        <Header/>
    {/* main content */}
    <div className="lg:h-[600px] lg:mt-20 flex items-center">
      <div
        data-aos-duration="2000"
        data-aos="fade-left"
        className="flex flex-col justify-center items-start lg:pl-[135px] lg:w-1/2 h-full lg:gap-5"
      >
        <h1 className="text-blue-500 lg:text-7xl font-bold">
          Tentukan UKM ANDA!
        </h1>
        <p className="text-xl">
          Asa Amerta adalah cara terbaik dalam menentukan dan memilih UKM.
          Dapatkan UKM yang sesuai dengan minat bakatmu.
        </p>
        <div className="flex gap-2">
          <Button
            type="submit"
            onClick={() => console.log("Log In")}
            className=" bg-blue-500 text-white lg:px-4 lg:py-1 lg:rounded-lg"
          >
            Log In <MdLogin />
          </Button>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="2000" className="w-1/2">
        <img src="./ilustration1.png" alt="ilustration" />
      </div>
    </div>
    {/* UKM Section */}
    <div className="lg:h-[600px] flex items-center bg-blue-100">
      <div className="w-1/2" data-aos="fade-right" data-aos-duration="2000">
        <img src="./ilustration2.png" alt="ilustration" />
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="2000"
        className="lg:pl-[130px]  w-1/2 flex flex-col items-start justify-center gap-5"
      >
        <h1 className="text-6xl text-blue-500 font-bold ">
          Unit Kegiatan Mahasiswa
        </h1>
        <p className="text-xl">
          Unit Kegiatan Mahasiswa (UKM) adalah lembaga kemahasiswaan tempat
          berkumpulnya mahasiswa yang memiliki kesamaan minat atau kegemaran,
          kreativitas, serta orientasi aktivitas penyaluran kegiatan
          ekstrakurikuler di dalam kampus.{" "}
        </p>
        <Button onClick={()=> navigate('/Ukm')} className="border-2 border-blue-500 lg:px-4 lg:py-1 lg:rounded-lg cursor-pointer flex justify-center items-center gap-1">
          Lihat <GrFormNextLink className="text-xl" />
        </Button>
      </div>
    </div>
    {/* minat Section */}
    <div className="lg:h-[600px] flex items-center">
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="flex flex-col justify-center items-start lg:pl-[135px] lg:w-1/2 h-full lg:gap-5"
      >
        <h1 className="text-blue-500 lg:text-6xl font-bold">
          Minat Dan Bakat
        </h1>
        <p className="text-xl">
          Minat adalah perasaan tertarik seseorang terhadap suatu hal yang
          menimbulkan keinginan dan juga dorongan yang kuat untuk melakukan
          hal tersebut. Bakat adalah suatu keahlian atau kepandaian bawaan
          yang dimiliki seseorang sejak dia dilahirkan.
        </p>
        <Button className="border-2 border-blue-500 lg:px-4 lg:py-1 lg:rounded-lg cursor-pointer flex justify-center items-center gap-1">
          Lihat  <GrFormNextLink className="text-xl"/>
        </Button>
      </div>
      <div data-aos="fade-left" data-aos-duration="2000" className="w-1/2">
        <img src="./ilustration3.png" alt="ilustration" />
      </div>
    </div>
    {/* FAQ section */}
    <div className="h-[35.25rem] bg-blue-100 flex flex-col gap-10 justify-center items-center">
      <h1 className="text-7xl font-semibold">FAQ</h1>
      <div className=" flex flex-wrap gap-10 justify-center items-center`">
        {dataFaq.map((item, key) => (
          <div data-aos="flip-left" data-aos-duration="2000">
            <CardFaq
              textPertanyaan={item.pertanyaan}
              textPenjelasan={item.penjelasan}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

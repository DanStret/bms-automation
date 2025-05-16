"use client"

import { AnimatedLogo } from "@/components/animated-logo"
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

interface Logo {
  name: string;
  src: string;
  width: number;
  height: number;
}

interface ClientLogosProps {
  logos?: Logo[];
}

export default function ClientLogos({ logos }: ClientLogosProps) {
  // Si no se pasan logos, usar estos por defecto
  const defaultLogos = [
    { name: "Acme Corp", src: "/placeholder-logo.svg", width: 120, height: 60 },
    { name: "TechGiant", src: "/placeholder-logo.svg", width: 130, height: 65 },
    { name: "EcoSolutions", src: "/placeholder-logo.svg", width: 110, height: 55 },
    { name: "Global Media", src: "/placeholder-logo.svg", width: 125, height: 62 },
    { name: "Innovate Labs", src: "/placeholder-logo.svg", width: 115, height: 58 },
    { name: "Future Systems", src: "/placeholder-logo.svg", width: 122, height: 61 },
  ];

  // Usar los logos proporcionados o los predeterminados
  const logosToShow = logos || defaultLogos;

  return (
    <div className="flex justify-center items-center w-full">
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={32}
        slidesPerView={4}
        loop={true}
        freeMode={true}
        speed={4000}
        autoplay={{ delay: 20, disableOnInteraction: false, pauseOnMouseEnter: false }}
        allowTouchMove={false}
        className="mt-8 py-4 h-[125px] w-full flex items-center justify-center"
        centeredSlides={true}
        breakpoints={{
          640: { slidesPerView: 3, centeredSlides: true },
          1024: { slidesPerView: 5, centeredSlides: true },
        }}
      >
        {logosToShow.map((logo, i) => (
          <SwiperSlide key={i} className="flex items-center justify-center">
            <AnimatedLogo
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt={`Cliente ${logo.name}`}
              className="opacity-100 hover:opacity-100 transition-opacity mx-auto h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
import { SelectedPage } from "@/shared/types";
import React from "react";
import homepage from "@/assets/HomePageGraphic.png";
import redbull from "@/assets/SponsorRedBull.png";
import furtune from "@/assets/SponsorFortune.png";
import forbes from "@/assets/SponsorForbes.png";

import evolveText from "@/assets/EvolveText.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import SwiperCore from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

SwiperCore.use([Navigation, Pagination, Autoplay]);

type Props = {
  setSelectedPage: (props: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const logos: string[] = [redbull, forbes, furtune, redbull, forbes, furtune];

  return (
    <section className="pt-[200px]  bg-gray-20 relative overflow-hidden  ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        animate={{ x: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.5,
        }}
        initial={{ x: -500 }}
        className="absolute hidden md:block left-10 top-[10rem] w-[50%]"
      >
        <img src={evolveText} alt="evolve-text absolute z-[-1]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, d: "none" }}
        animate={{ d: "block", opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex  flex-col md:flex-row mx-auto justify-between items-start w-5/6  relative z-1"
      >
        <div className=" flex flex-col gap-2">
          <h1 className="text-[5rem] font-montserrat  font-extrabold  text-primary-400">
            EVOGYM
          </h1>
          <h3 className="text-[2rem] font-montserrat   font-thin  text-primary-400">
            evolutionary fitness
          </h3>
          <p className="max-w-lg">
            Unrivaled Gym. Unparallel Training Fitness Clasesses. World Class
            Studios to get the Body Shapes that you dream of. Dream big work
            hard, get this done !{" "}
          </p>
          <div className="flex gap-4 items-center">
            <AnchorLink
              href={`#${SelectedPage.ContactUs}`}
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              className="bg-secondary-400 py-2 px-6   w-fit rounded-md border-2 border-secondary-400 hover:bg-transparent hover:opacity-90 transition-all duration-300 "
            >
              Join Now
            </AnchorLink>
            <AnchorLink
              href={`#${SelectedPage.ContactUs}`}
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              className="text-primary-500  underline hover:text-primary-300 transition duration-300 ease-in cursor-pointer"
            >
              Learn More
            </AnchorLink>
          </div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            translateX: 200,
            d: "none",
            overflow: "hidden",
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            d: "block",
            overflow: "hidden",
          }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className=" self-center  md:self-stretch overflow-hidden"
        >
          <img src={homepage} alt="homepage" />
        </motion.div>
      </motion.div>

      <div>
        <div className="hidden md:flex justify-around ">
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 1000 }}
          >
            {logos.map((logo, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center"
                >
                  <img
                    src={logo}
                    alt="logo"
                    className="w-[200px] h-[200px] object-contain"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Home;

import { SelectedPage } from "@/shared/types";
import React from "react";
import homepage from "@/assets/HomePageGraphic.png";
import evolveText from "@/assets/EvolveText.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
type Props = {
  setSelectedPage: (props: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section className="pt-[200px]  relative ">
      <div className="absolute hidden md:block left-10 top-[10rem] w-[50%]">
        <img src={evolveText} alt="evolve-text absolute z-[-1]" />
      </div>

      <div className="flex  flex-col md:flex-row mx-auto justify-between items-start w-5/6 j relative z-1">
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
        <div className=" self-center  md:self-stretch">
          <img src={homepage} alt="homepage" />
        </div>
      </div>
    </section>
  );
};

export default Home;

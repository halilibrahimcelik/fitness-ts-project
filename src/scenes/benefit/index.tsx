import { SelectedPage } from "@/shared/types";
import React from "react";
import { motion } from "framer-motion";
import image from "@/assets/BenefitsPageGraphic.png";
import wave from "@/assets/AbstractWaves.png";
import spark from "@/assets/Sparkles.png";
import { IoSchoolSharp } from "react-icons/io5";
import { LuSchool2 } from "react-icons/lu";
import { FaPeopleGroup } from "react-icons/fa6";
import Card from "@/components/UI/Card";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

const Benefit = ({ setSelectedPage }: Props) => {
  return (
    <motion.section className="py-[80px] benefit mx-auto font-dmsans w-5/6">
      <div className="py-6">
        <h2 className="uppercase font-extrabold  py-5 text-4xl">
          More Than just a gym
        </h2>
        <p className="text-gray-500 font-medium">
          {" "}
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Alias eligendi sequi corporis, quis rem rerum in sed
          maxime quibusdam temporibus?
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        <Card
          delay={1}
          setSelectedPage={setSelectedPage}
          icon={<LuSchool2 />}
          text={
            "   Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetu adipisicing elit."
          }
        />
        <Card
          delay={3}
          setSelectedPage={setSelectedPage}
          icon={<FaPeopleGroup />}
          text={
            "   Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetu adipisicing elit."
          }
        />
        <Card
          delay={5}
          setSelectedPage={setSelectedPage}
          icon={<IoSchoolSharp />}
          text={
            "   Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetu adipisicing elit."
          }
        />
      </div>

      <motion.div
        initial={{ opacity: 0, translateY: -200 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="content py-20"
      >
        <div className="flex flex-col justify-between items-center md:items-start md:flex-row gap-0 md:gap-10">
          <div className="w-50">
            <img className="object-cover" src={image} />
          </div>
          <div className="w-50  flex flex-col  gap-4 pl-10 relative ">
            <div>
              <img
                className="w-32 h-20  hidden md:block object-cover absolute left-[-20px]"
                src={wave}
              />
            </div>
            <div className="pt-16">
              <h2 className="uppercase font-extrabold   max-w-md py-5 text-3xl">
                Mıllions of happy members getting{" "}
                <span className="text-primary-500">fit </span>
              </h2>
              <p className="text-gray-500 max-w-2xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                praesentium aperiam cupiditate laboriosam ab rem iusto
                voluptatibus hic similique quaerat ipsam libero expedita,
                voluptates aspernatur, excepturi fuga voluptas! Libero hic
                recusandae suscipit ut fuga porro? Doloribus sequi quisquam
                aperiam ullam.
              </p>
              <p className="text-gray-500 mt-2 max-w-2xl">
                Similique quaerat ipsam libero expedita, voluptates aspernatur,
                excepturi fuga voluptas! Libero hic recusandae suscipit ut fuga
                porro? Doloribus sequi quisquam aperiam ullam.
              </p>
            </div>
            <div className="flex items-center gap-4 ">
              <AnchorLink
                href={`#${SelectedPage.ContactUs}`}
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                className="bg-secondary-400 p-2 rounded-md border-2 border-secondary-400 hover:bg-transparent hover:opacity-90 transition-all duration-300 "
              >
                Become a Member
              </AnchorLink>
              <img className="w-40 h-40 object-contain" src={spark} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Benefit;

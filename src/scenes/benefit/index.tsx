import { SelectedPage } from "@/shared/types";
import React from "react";
import { motion } from "framer-motion";

import { IoSchoolSharp } from "react-icons/io5";
import { LuSchool2 } from "react-icons/lu";
import { FaPeopleGroup } from "react-icons/fa6";
import Card from "@/components/UI/Card";

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
    </motion.section>
  );
};

export default Benefit;

import { ClassType, SelectedPage } from "@/shared/types";
import React from "react";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

const classes: Array<ClassType> = [
  {
    name: "Yoga",
    image: image1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse pariatur maxime rem! Suscipit, voluptate. Qui possimus a similique delectus!",
  },
  {
    name: "Sqaut",
    image: image2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse pariatur maxime rem! Suscipit, voluptate. Qui possimus a similique delectus!",
  },
  {
    name: "Weight Training",
    image: image3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse pariatur maxime rem! Suscipit, voluptate. Qui possimus a similique delectus!",
  },
  {
    name: "Fitness Classes",
    image: image4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse pariatur maxime rem! Suscipit, voluptate. Qui possimus a similique delectus!",
  },
  {
    name: "Advenced Gym",
    image: image5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse pariatur maxime rem! Suscipit, voluptate. Qui possimus a similique delectus!",
  },
  {
    name: "Body Building",
    image: image6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse pariatur maxime rem! Suscipit, voluptate. Qui possimus a similique delectus!",
  },
];
const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="py-[100px] bg-primary-300">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        className="mx-auto w-5/6"
      >
        <motion.div
          initial={{ opacity: 0, translateY: -200 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="uppercase font-extrabold  py-5 text-4xl">
            {" "}
            Our Classes
          </h3>
          <p className="md:w-3/5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse
            pariatur maxime rem! Suscipit, voluptate. Qui possimus a similique
            delectus!
          </p>
        </motion.div>

        <div className="side-scroll mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[3000px] whitespace-nowrap flex gap-10">
            {classes.map((item, index) => {
              const { name, image, description } = item;
              return (
                <li key={index} className="relative group  w-full h-full ">
                  <img src={image} alt={name} />
                  <div className="absolute bg-black w-full h-full  translate-y-[-500px]  duration-300  ease-in group-hover:translate-y-[0px] group-hover:opacity-50  left-0 top-0"></div>
                  <p className="absolute   top-1/2 left-1/2 transform -translate-x-1/2 opacity-0  duration-300  ease-in font-bold -translate-y-1/2  group-hover:opacity-100 text-center whitespace-normal z-2 text-purple-100">
                    {description}{" "}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;

import { SelectedPage } from "@/shared/types";
import React, { useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
  text: string;
  icon: React.ReactNode;
  delay: number;
};

const Card = ({ setSelectedPage, text, icon, delay }: Props) => {
  const variants = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Will trigger the animation once when the card comes into view
    threshold: 0.9, // Adjust this threshold as needed
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ delay: delay * 0.1, duration: 0.4, ease: "easeOut" }}
      className="border-2 border-gray-400-200 p-6 gap-4 duration-200 hover:scale-105  flex flex-col items-center justify-center  w-full h-[250px]  md:h-[400px] md:w-[300px] rounded-md"
    >
      <div className="w-50 h-50 rounded-full p-4 bg-primary-100 text-primary-500 text-3xl">
        {icon}
      </div>
      <h5 className="text-gray-500 font-bold">Expert and Pro Trainers</h5>
      <p className="text-gray-500 font-medium text-center">{text}</p>
      <AnchorLink
        href={`#${SelectedPage.ContactUs}`}
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        className="text-primary-500  underline hover:text-primary-300 transition duration-300 ease-in cursor-pointer"
      >
        Learn More
      </AnchorLink>
    </motion.div>
  );
};

export default Card;

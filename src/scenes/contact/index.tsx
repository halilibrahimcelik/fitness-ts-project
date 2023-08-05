import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import Evolve from "@/assets/EvolveText.png";
type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};
type Inputs = {
  name: string;
  email: string;
  message: string;
};
const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    const isValid = await trigger();
    console.log(isValid);
    reset();
  };
  return (
    <section id="contactus" className="py-[100px] relative">
      <div className="mx-auto w-5/6  gap-10 md:gap-0 justify-between flex flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0, translateY: -200 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full md:w-[50%] flex flex-col gap-3"
        >
          <h3 className="uppercase font-extrabold   text-4xl">
            {" "}
            <span className="text-primary-500">Join now </span>
            to get ın shape
          </h3>
          <p className="md:w-3/5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse
            pariatur maxime rem! Suscipit, voluptate. Qui possimus a similique
            delectus!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, translateY: -200 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          onSubmit={handleSubmit(onSubmit)}
          className="flex  flex-col gap-3 w-full md:max-w-xl "
        >
          {/* register your input into the hook by invoking the "register" function */}
          <input
            placeholder="Name"
            className="block w-full border  border-primary-300 outline-primary-300 py-2 px-3 rounded-md "
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}

          <input
            placeholder="Email"
            type="email"
            className="block w-full border  border-primary-300 outline-primary-300 py-2 px-3 rounded-md "
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {/* errors will return when field validation fails  */}
          {errors.email && <span>This field is required</span>}
          {errors.email?.type === "pattern" && (
            <span>This is an invalid email</span>
          )}
          <textarea
            placeholder="Message"
            cols={10}
            rows={5}
            {...register("message", { required: true, maxLength: 1000 })}
            className="block w-full border  border-primary-300 outline-primary-300 py-2 px-3 rounded-md "
          />
          {errors.message && <span>This field is required</span>}

          <input
            type="submit"
            className="bg-secondary-400 rounded-md w-fit mx-auto py-2 px-6  border-secondary-400 border-2 cursor-pointer font-bold hover:bg-transparent hover:opacity-90 transition-all duration-300"
            value={"Submit"}
          />
        </motion.form>
        <motion.div
          initial={{ opacity: 0, translateY: 200 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute bottom-10 hidden md:block right-32 z-[-1]"
        >
          <img src={Evolve} alt="spark" />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;

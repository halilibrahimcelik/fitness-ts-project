import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import { RxHamburgerMenu } from "react-icons/rx";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import AnchorLink from "react-anchor-link-smooth-scroll";
type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setMenuToggled] = useState<boolean>(false);
  const flexBetween: string = "flex justify-between items-center";
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 `}>
        <div className={`${flexBetween} mx-auto w-5/6 `}>
          <div className={`${flexBetween} gap-10 w-full `}>
            <img src={Logo} alt="logo" className="w-24" />
            {isAboveMediumScreen ? (
              <div className={`${flexBetween}  hidden md:flex gap-10 w-full`}>
                <ul className={` flex gap-6 text-sm font-medium`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </ul>
                <div className={`${flexBetween} gap-10`}>
                  <button>Sign In</button>
                  <AnchorLink
                    href={`#${SelectedPage.ContactUs}`}
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    className="bg-secondary-400 p-2 rounded-md border-2 border-secondary-400 hover:bg-transparent hover:opacity-90 transition-all duration-300 "
                  >
                    Become a Member
                  </AnchorLink>
                </div>
              </div>
            ) : (
              <div className="block md:hidden">
                <button
                  onClick={() => setMenuToggled((prev: boolean) => !prev)}
                  className={`bg-secondary-500 rounded-full text-white on p-4 ${
                    isMenuToggled ? "translate-y-[-100px]" : "translate-y-0"
                  } cursor-pointer hover:opacity-70 duration-300 ease-in   inline-block`}
                >
                  <RxHamburgerMenu />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {!isAboveMediumScreen && (
        <>
          <div
            className={`bg-secondary-400 fixed w-[240px] h-full ease-in duration-300 transition-all right-0 z-50 ${
              isMenuToggled ? "translate-x-30" : "translate-x-60"
            }`}
          >
            <button
              onClick={() => setMenuToggled((prev: boolean) => !prev)}
              className="mt-4 fixed p-3 rounded-full hover:opacity-80 duration-300 ease-in   right-10 top-1 bg-primary-300"
            >
              <AiOutlineClose />
            </button>
            <ul
              className={` flex flex-col gap-6 text-sm font-medium mt-32 pl-10`}
            >
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />

              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;

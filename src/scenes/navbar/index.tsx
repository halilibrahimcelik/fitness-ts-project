import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { SelectedPage } from "@/shared/types";
type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween: string = "flex justify-between items-center";
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 `}>
        <div className={`${flexBetween} mx-auto w-5/6 `}>
          <div className={`${flexBetween} gap-10 w-full`}>
            <img src={Logo} alt="logo" className="w-24" />
            <div className={`${flexBetween}  hidden md:flex gap-10 w-full`}>
              <ul className={`desktop-Linkst flex gap-6 text-sm font-medium`}>
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
                <button className="bg-secondary-400 p-2 rounded-md border-2 border-secondary-400 hover:bg-transparent hover:opacity-90 transition-all duration-300 ">
                  Become a Member
                </button>
              </div>
            </div>
            <div className="block md:hidden">
              <Bars3Icon />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

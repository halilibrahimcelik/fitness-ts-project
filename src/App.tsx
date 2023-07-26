import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOffPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOffPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOffPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-gray-20   ">
      <Navbar
        selectedPage={selectedPage}
        isTopOffPage={isTopOfPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
}

export default App;

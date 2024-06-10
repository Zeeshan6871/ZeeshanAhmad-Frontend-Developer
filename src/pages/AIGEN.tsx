import { FunctionComponent, useCallback } from "react";
import Home from "./Home";
import Hero from "./Hero";
import HowItWorks from "../components/HowItWorks";
import Scroll from "../components/Scroll";
import Outfit from "../components/Outfit";
import Tokenomics from "../components/Tokenomics";
import Roadmap from "../components/Roadmap";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

const AIGEN: FunctionComponent = () => {
  return (
    <>
      <div className="w-full relative bg-black  flex flex-col items-start justify-start font-outfit">
        <div className="w-full !m-[0]  flex flex-row items-end justify-start pt-0 px-0  box-border  max-w-full">
          <div className=" flex-1  flex flex-col items-start justify-start  box-border relative max-w-full ">
            <Home />
            <HowItWorks />
            <Scroll />
            <Outfit />
            <Tokenomics />
            <Roadmap />
            <GetStarted />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default AIGEN;

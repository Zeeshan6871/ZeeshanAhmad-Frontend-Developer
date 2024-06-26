import React from "react";
import P10 from "../assets/images/personalities/P10.png";
const HowItWorks = () => {
  return (
    <>
      <br />
      <section className="howItWorks mq825:flex mq825:flex-col">
        <img src={P10} alt="rob" />

        <div>
          <h2>How it works</h2>
          <div>
            <span>Select an Avatar</span>
            <span>Create or Generate Script</span>
            <span>Select AI Voices</span>
            <span>Publish</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;

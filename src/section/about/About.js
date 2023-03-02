import React from "react";
import Bar from "../../components/bar/Bar";
import Button from "../../components/button/Button";

const AboutSection = () => {
  return (
    <section className="py-8 lg:py-24 px-4">
      <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-2 lg:w-[60%] gap-x-24 gap-y-10">
        <div className="flex flex-col gap-y-8">
          <h1>About Finsweet Podcast</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>

          <div className="flex w-full">
            <Button type="primary" name="Subscribe Now!" />
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default AboutSection;

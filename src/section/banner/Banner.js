import React from "react";
import Bar from "../../components/bar/Bar";
import Button from "../../components/button/Button";

const Banner = () => {
  return (
    <section className="py-8 lg:py-24 px-4">
      <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-2 lg:w-[60%] gap-x-24 gap-y-10">
        <div className="flex flex-col gap-y-8">
          <h1>Become The Hero Of Your Own Story</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </p>

          <div className="flex w-full">
            <input
              type="email"
              placeholder="Enter Your Email Id"
              className="py-3 px-4 bg-[#F4F2FF] placeholder:text-[#AFB0B9]  w-full"
            />
            <Button type="primary" name="Subscribe" />
          </div>
        </div>

        <div className="flex items-center gap-x-12">
          <Bar type="small" />
          <Bar type="large" color="green" />
          <Bar type="medium" />
          <Bar type="small" color="green" />
          <Bar type="large" />
          <Bar type="medium" color="green" />
        </div>
      </div>
    </section>
  );
};

export default Banner;

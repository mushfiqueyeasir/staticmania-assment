import React from "react";
import { brands } from "../../utility/constant";

const Brands = () => {
  return (
    <section className="container mx-auto py-10 lg:py-24 px-4">
      <div className="flex flex-col lg:flex-row gap-y-10 items-center justify-between">
        <div className="text-3xl lg:text-[36px] font-semibold ">
          Podcast Available On
        </div>
        {brands.map((item, index) => (
          <img key={index} src={item} alt="" className="max-w-[200px]" />
        ))}
      </div>
    </section>
  );
};

export default Brands;

import React from "react";
import articelNews from "../../assets/artivleNews.png";
import Bar from "../../components/bar/Bar";
import Button from "../../components/button/Button";
import { episodesJson, newsJson } from "../../utility/constant";
import EpisodeCard from "./EpisodeCard";

const Episodes = () => {
  return (
    <section className=" py-10 lg:py-24  px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-y-6 pb-16">
          <div className="flex flex-col gap-y-4 lg:w-[30%]">
            <h2>Recent Episodes</h2>
            <p>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black.
            </p>
          </div>
          <div>
            <Button type="primary" name="See All Episiodes" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 pb-24">
          {episodesJson.map((item, index) => (
            <EpisodeCard key={index} data={item} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 pb-24">
          <div className="bg-[#F4F2FF]">
            <div className="px-10 pt-10 flex flex-col gap-y-8">
              <h2>
                Read our <br /> articles & news
              </h2>
              <Button type="link" name="See More" />
            </div>
            <div className="h-[300px] relative overflow-hidden">
              <div className="flex items-center justify-between gap-20 rotate-[50deg] absolute bottom-[-250px]">
                <div className="w-[74px] h-[16rem] bg-[#503AE7] "></div>
                <div className="w-[74px] h-[36rem] bg-[#1AD993] "></div>
                <div className="w-[74px] h-[40rem] bg-[#503AE7] "></div>
              </div>
            </div>
          </div>
          {newsJson.map((item, index) => (
            <EpisodeCard key={index} data={item} link />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Episodes;

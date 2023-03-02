import React from "react";
import Button from "../../components/button/Button";

const EpisodeCard = ({ data, link }) => {
  const { banner, title, description } = data;
  return (
    <div>
      <div className="relative">
        <img
          src={banner}
          alt=""
          className="h-[256px] object-cover  w-full z-[-1]"
        />
        <div className="w-[40px] h-[40px] rounded-full bg-[#503AE7] hover:bg-[#3E2DB2] flex justify-center items-center text-white text-lg absolute top-4 right-4 cursor-pointer">
          <i class="fa-solid fa-microphone"></i>
        </div>
      </div>
      <div className="pt-10 flex flex-col gap-y-6 pr-6">
        <h3>{title}</h3>
        <p>{description}</p>
        {link ? (
          <Button type="link" name="Read Now" />
        ) : (
          <Button type="icon" name="Listen Now" />
        )}
      </div>
    </div>
  );
};

export default EpisodeCard;

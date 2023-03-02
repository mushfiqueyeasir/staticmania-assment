import React from "react";

const Bar = ({ type, color }) => {
  const barColor = color === "green" ? "bg-[#1AD993]" : "bg-[#503AE7]";
  const small = "w-[32px] h-[100px] " + barColor;
  const medium = "w-[32px] h-[178px] " + barColor;
  const large = "w-[32px] h-[256px] " + barColor;
  return (
    <div
      className={
        (type === "small" && small) ||
        (type === "medium" && medium) ||
        (type === "large" && large)
      }
    ></div>
  );
};

export default Bar;

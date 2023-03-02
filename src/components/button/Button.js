import React from "react";

const Button = ({ type, name }) => {
  const primary =
    "px-[32px] py-[12px] bg-[#503AE7] text-white hover:bg-[#3E2DB2] text-[16px] font-semibold";
  const secondary =
    "px-[32px] py-[12px] border-2 border-[#14142B] hover:border-[#1AD993] hover:text-[#1AD993] text-[16px] font-semibold";

  const icon =
    "flex items-center gap-2 text-[16px] text-[#503AE7] hover:text-[#3E2DB2] font-semibold";

  const link = "text-[#503AE7] hover:text-[#3E2DB2] text-[16px]";
  return (
    <div>
      <button
        className={
          (type === "primary" && primary) ||
          (type === "icon" && icon) ||
          (type === "secondary" && secondary) ||
          (type === "link" && link)
        }
      >
        {type === "icon" && <i class="fa-solid fa-circle-play text-[32px]"></i>}
        {name}
      </button>
    </div>
  );
};

export default Button;

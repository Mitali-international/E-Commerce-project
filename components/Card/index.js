import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="cursor-pointer shadow-xl">
        <div>
          <a href="#" className="">
            <img src="https://www.aegisshield.com/file/7709827-product/w220/h220/j.jpg" />
          </a>
        </div>
        <p className="heading-text pt-5">
          <strong>VIP HONEY</strong>
        </p>
      </div>
    </div>
  );
};

export default Card;

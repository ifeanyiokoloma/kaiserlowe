import React from "react";

const LearnMore = ({color, bgc}) => {
  return (
    <div className="text-center mt-5">
      <button
        style={{ color: color, background: bgc }}
        className="btn btn-light poppins"
      >
        Learn more
      </button>
    </div>
  );
};

export default LearnMore;

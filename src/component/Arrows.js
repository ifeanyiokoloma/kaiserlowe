import React from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const Arrows = ({ show }) => {
  // const [display, setDisplay] = useState(false)
  return (
    <div show={show}>
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "1px",
          borderRadius: "50%",
          padding: ".3rem",
          background: "rgba(0,0,0,.2)",
        }}
      >
        <KeyboardArrowLeft
          style={{
            fontSize: "2rem",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "1px",
          borderRadius: "50%",
          padding: ".3rem",
          background: "rgba(0,0,0,.2)",
        }}
      >
        <KeyboardArrowRight
          style={{
            fontSize: "2rem",
          }}
        />
      </div>
    </div>
  );
};

export default Arrows;

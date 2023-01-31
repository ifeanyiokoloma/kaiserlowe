import React from "react";
import { training } from "../asset/data";
import { Container } from "@mui/material";
import LearnMore from "./LearnMore";

const Training = () => {
  return (
    <section className="pb-5">
      <Container>
        <h1
          style={{
            fontFamily: "raleway",
            paddingBlock: "1.5em",
            fontWeight: "bold",
          }}
          className="text-center text-uppercase"
        >
          Training
        </h1>
        <div className="d-flex">
          {training.map((item) => (
            <div
              className=""
              style={{
                flexBasis: "33.3%",
                borderRadius: "10px",
                height: "80vh",
              }}
            >
              <div style={{ height: "60%" }}>
                <img src={item.img} alt="" />
              </div>
              <div
                style={{ background: "var(--primary)", height: "35%" }}
                className="pt-4 text-light"
              >
                <h2
                  className="ps-3 text-uppercase"
                  style={{ fontFamily: "poppins", fontSize: "1.5rem", fontWeight: 700 }}
                >
                  {item.h2}
                </h2>
                <ul style={{}} className="">
                  {item.list.map((item) => (
                    <li
                      style={{
                        fontSize: ".75rem",
                        fontFamily: "poppins",
                        fontWeight: 400,
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <LearnMore color="white" bgc="var(--primary)" />
      </Container>
    </section>
  );
};

export default Training;

import { Container, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div style={{ background: "var(--primary)" }}>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "calc(100vh - 60px)",
            justifyContent: "center",
            background: "var(--primary)",
            paddingInline: "1rem",
            textAlign: "justify",
          }}
        >
          <article
            className="content"
            style={{
              display: "flex",
              height: "70%",
              alignItems: "center",
              background: "rgba(0,0,0,.2)",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              className="details"
              style={{ flexBasis: "60%", padding: "5rem", color: "white" }}
            >
              <h2 className="display-4" style={{ fontWeight: "bolder" }}>
                About us
              </h2>
              <Typography variant="body2" style={{ fontWeight: 300, fontSize: ".8rem" }}>
                Kaiser Löwe starts 2013 to operates in Nigeria as a building
                development company. We offer the whole spectrum of services in
                building and managing. If you are interested for more
                information just take a look an enjoy… Our business philosophy
                is based on continuity and organic growth, on team spirit,
                respect and partnership. For us, high tech, tradition and
                diligence go hand in hand with a sense for the more pleasant
                things in life.
              </Typography>
            </div>
            <div
              style={{
                flexBasis: "40%",
                maxHeight: "100%"
              }}
            >
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "0 0",
                }}
                src="/images/about/smiling.jpg"
                alt="pic"
              />
            </div>
          </article>
        </div>
      </Container>
    </div>
  );
};

export default About;

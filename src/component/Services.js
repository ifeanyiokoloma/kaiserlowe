import React from "react";
import StyledServices from "../styles/StyledServices";
import { Typography } from "@mui/material";

const Services = () => {
  return (
    <StyledServices className="page1">
      <div className="cards-box">
        <div className="bar2"></div>
        <div className="card">
          <h2>Project Development</h2>
          <Typography component="p" variant="body2" className="text-justify">
            From land to Building – with Kaiser Löwe you enter soon into your
            new house! We develop a round concept, plan and organize the
            implementation of the most necessary use changes.
          </Typography>
        </div>
        <div className="card">
          <h2>Planning and Building</h2>
          <Typography component="p" variant="body2" className="text-justify">
            Are you seeking a partner for property development and building?
            look no further than Kaiser Löwe LTD, We have all the knowledge you
            need.
          </Typography>
        </div>
        <div className="card">
          <h2>Energy</h2>
          <Typography component="p" variant="body2" className="text-justify">
            Kaiser Lowe is known for better Energy building, Powerstation,
            Solarenergy, Windenergy, etc.
          </Typography>
        </div>
        <div className="card">
          <h2>Real Estate</h2>
          <Typography component="p" variant="body2" className="text-justify">
            With Kaiser Löwe you are at the safe side…. Trust is the most
            important thing to build up a successful cooperation.
          </Typography>
        </div>
        <div className="card">
          <h2>Facilities Management</h2>
          <Typography component="p" variant="body2" className="text-justify">
            We manage your Buildings, Building Technology, Building Cleaning,
            Security Services, Catering, Garden and landscape services.
          </Typography>
        </div>
        <div className="card">
          <h2>Road Construction</h2>
          <Typography component="p" variant="body2" className="text-justify">
            We construct Roads, Road Infrastructures, Traffic safety, Tunnels,
            Bridges etc. contact us today for a better service.
          </Typography>
        </div>
        <div className="bar"></div>
      </div>
    </StyledServices>
  );
};

export default Services;

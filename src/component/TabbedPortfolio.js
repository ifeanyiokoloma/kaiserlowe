import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "./TabPanel";
import {
  HouseRenovations,
  architectureProjects,
  constructionProjects,
  interiorDesigns,
} from "../asset/content";
import Portfolio from "./Portfolio";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";

export default function CenteredTabs({ sx }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={sx}>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="portfolio tabs"
          // variant="scrollable"
          // scrollButtons="auto"
          // allowScrollButtonsMobile
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Construction Works" {...a11yProps(1)} />
          <Tab label="House Renovations" {...a11yProps(2)} />
          <Tab label="Architectural Designs" {...a11yProps(3)} />
          <Tab label="Interior Designs" {...a11yProps(4)} />
        </Tabs>
      </Box>

      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <Portfolio
            content={constructionProjects.concat(
              HouseRenovations,
              architectureProjects,
              interiorDesigns
            )}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Portfolio content={constructionProjects} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Portfolio content={HouseRenovations} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Portfolio content={architectureProjects} />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Portfolio content={interiorDesigns} />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}

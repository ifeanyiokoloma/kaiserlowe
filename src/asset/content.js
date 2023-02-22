import { Email, LocationOn, Phone } from "@mui/icons-material";
import React from "react";

export const navItems = [
  "home",
  "about",
  "services",
  "training",
  "portfolio",
  "contact",
];

export const heroText = [
  {
    h1: "Welcome to KaiserLowe",
    p: "Welcome to Kaiser Lowe, where construction excellence meets unparalleled customer service.",
    img: "/images/hero/engineers.jpg",
  },
  {
    h1: "Building the Future",
    p: "Kaiser Lowe Construction is a leading construction company dedicated to providing top-notch building solutions to clients.",
    img: "/images/hero/construction-worker.jpg",
  },
  {
    h1: "Dreams come true",
    p: "We are dedicated to turning your dreams into reality with our exceptional construction services and unwavering commitment to quality.",
    img: "/images/hero/two-construction-workers.jpg",
  },
  {
    h1: "Experience the Difference",
    p: "Discover the difference that comes with partnering with a construction company that truly cares. At Kaiser Lowe, we are dedicated to delivering projects that exceed expectations.",
    img: "/images/hero/complex-road.jpg",
  },
];

export const about = [
  {
    h2: "Meet us",
    content:
      "Kaiser Löwe starts 2013 to operates in Nigeria as a building development company. We offer the whole spectrum of services in building and managing. If you are interested for more information just take a look an enjoy… Our business philosophy is based on continuity and organic growth, on team spirit, respect and partnership. For us, high tech, tradition and diligence go hand in hand with a sense for the more pleasant things in life.",
    img: "/images/about/kaiserlowe.jpg",
  },
  {
    h2: "Goals",
    content:
      "These are the goals that we have set for ourselves: To build lasting relationships with our clients. To continually enhance our services. To create a trouble-free experience for our clients.",
    img: "/images/about/two-construction-workers.jpg",
  },
  {
    h2: "Mission",
    content:
      "Kaiser Löwe´s Mission is to carry out its projects and provide its services, using the most up to date technology and best management techniques.“ Kaiser Löwe follows the Nigeria Vision 20 Actions in: Fostering private sector-led non-oil growth to build the foundation for economic diversification Investing in human capital development to enhance national competitiveness Changing the value system to encourage honesty, industry and eliminating the culture of worshipping money Entrenching merit as a fundamental principle and core value Addressing threats to national security Deepening reforms in the social sector and extending reforms to the states and local governments Correcting the weaknesses inherent in the revenue allocation framework Intensifying the war against corruption Establishing the process for free and fair elections.",
    img: "/images/about/mission.jpg",
  },
  {
    h2: "Profile",
    content:
      "Founded in 2013, Kaiser Löwe started as an local Player in the property development market. With our head office in Nkwere Ogidi (Anambra State) and Partners in Europe we are active in property development process. Areas of activity Project development, Housing, Industrial Building, Commercial Building, Public Building, Energy, Real Estate, Facility Management Our business philosophy is based on continuity and organic growth, on team spirit, respect and partnership. For us, high tech, tradition and diligence go hand in hand with a sense for the more pleasant things in life. Quality management The quality of our services is our first and foremost selling point. Throughout the company we operate to ISO 9001 and work only with suppliers who meet the same standards. Our quality management is not only confined to the technical parts, it extends to the definition and monitoring of all company-related processes. The continuous improvement of these processes is our obligation. In terms of Compliance Management we follow international rules of cooperation. In terms of environmental aspects we strive to operate economically as well as sustainably with a strong focus on saving resources.",
    img: "/images/about/profile.jpg",
  },
];

export const training = [
  {
    h2: "Welder",
    list: [
      "Introduction and Safety",
      "Oxy-fuel Cutting",
      "Welding and Brazing",
    ],
    img: "/images/training/welding.jpg",
  },
  {
    h2: "Carpenter",
    list: [
      "Introduction and Safety",
      "Building methods and construction technology",
      "Material handling",
    ],
    img: "/images/training/carpentry.jpg",
  },
  {
    h2: "Electrical Worker",
    list: ["Introduction and Safety", "Installation", "Electrical maintenance"],
    img: "/images/training/electrician.jpg",
  },
  {
    h2: "Floor Tiler",
    list: ["Introduction and Safety", "Material handling", "Building methods"],
    img: "/images/training/floor-tiler.jpg",
  },
];

export const services = [
  {
    h3: "Project Development",
    p: "From land to Building – with Kaiser Löwe you enter soon into your new house! We develop a round concept, plan and organize the implementation.",
    img: "/images/services/drawing.jpg",
  },
  {
    h3: "Planning and Building",
    p: "Are you seeking a partner for property development and building? Look no further than Kaiser Löwe LTD.",
    img: "/images/services/building.jpg",
  },
  {
    h3: "Energy",
    p: "Kaiser Lowe is known for better Energy building, Powerstation, Solarenergy, Windenergy, etc.",
    img: "/images/services/energy.jpg",
  },
  {
    h3: "Real Estate",
    p: "With Kaiser Löwe you are at the safe side…. Trust is the most important thing to build up a successful cooperation.",
    img: "/images/services/estate.jpg",
  },
  {
    h3: "Facilities Management",
    p: "We manage your Buildings, Building Technology, Building Cleaning, Security Services, Catering, Garden and landscape services.",
    img: "/images/services/management.jpg",
  },
  {
    h3: "Road Construction",
    p: "We construct Roads, Road Infrastructures, Traffic safety, Tunnels, Bridges etc. contact us today for a better service.",
    img: "/images/services/road.jpg",
  },
];

export const portfolio = [
  {
    work: "construction project",
    img: "/images/portfolio/construction.jpg",
  },
  {
    work: "house renovation project",
    img: "/images/portfolio/renovation.jpg",
  },
  { work: "architecture project", img: "/images/portfolio/architecture.jpg" },
  {
    work: "interior design project",
    img: "/images/portfolio/interior-design.jpg",
  },
];

export const contact = [
  {
    h3: "Address",
    content: [
      "No 1 Pius Anolue Street Nkwere Ogidi Anambra State Nigeria",
      "RC: 110 5062",
    ],
    icon: <LocationOn fontSize="large" htmlColor="#ffffff" />,
  },
  {
    h3: "Telephone",
    content: ["+2348104080042", "+49 1521-4144270"],
    icon: <Phone fontSize="large" htmlColor="#ffffff" />,
  },
  {
    h3: "Email",
    content: ["admin@kaiserlowe.com", "info@kaiserlowe.com"],
    icon: <Email fontSize="large" htmlColor="#ffffff" />,
  },
];

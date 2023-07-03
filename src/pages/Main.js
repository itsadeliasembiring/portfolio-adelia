import React from "react";
import { useState } from "react";
// Import Component
import Home from "./home/index";
import About from "./about/index";
import Project from "./project/index";
import Experience from "./experience/index";
import Contact from "./contact/index";
import MenuDesktop from "../component/menu-desktop/index";
import MenuMobile from "../component/menu-mobile/index";

import { Box } from "@mui/material";

export default function Main() {
  const [activeButton, setActiveButton] = useState("home");
  const handleonClick = (info) => {
    setActiveButton(info);
  };
  return (
    <>
      <Box sx={{ display: "flex", width: "100%", minHeight: "100vh" }}>
        {/* Menu */}

        {/* -- Desktop */}
        <Box
          sx={{ position: "relative", display: { xs: "none", md: "block" } }}
          className="menu"
        >
          <MenuDesktop
            handleonClick={handleonClick}
            activeButton={activeButton}
          />
        </Box>
        {/* -- Mobile */}
        <Box
          className="menu"
          sx={{
            position: "relative",
            display: { xs: "block", md: "none" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MenuMobile
            handleonClick={handleonClick}
            activeButton={activeButton}
          />
        </Box>

        {/* Content */}
        <Box className="content" sx={{ width: "100%", pl: { md: 7.5 } }}>
          {activeButton === "home" ? (
            <Home />
          ) : activeButton === "about" ? (
            <About />
          ) : activeButton === "projects" ? (
            <Project />
          ) : activeButton === "experience" ? (
            <Experience />
          ) : activeButton === "contact" ? (
            <Contact />
          ) : null}
        </Box>
      </Box>
    </>
  );
}

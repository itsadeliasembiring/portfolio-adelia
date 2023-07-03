import React from "react";
// import { useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import { containerMenu, gridMenu, buttonMenu, icon } from "./styles";
// Icon
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Colors from "../../theme/Color";

export default function MenuMobile(props) {
  const resume =
    "https://docs.google.com/document/d/1Yp4Kb_dyuv7lX7etYuSc0Z1Fdm7IR0l-/edit?usp=sharing&ouid=108889228937929007579&rtpof=true&sd=true";
  return (
    <>
      <Box sx={containerMenu}>
        <Grid direction="row" spacing={{ sm: 4 }} sx={gridMenu}>
          <Grid item>
            <Button
              onClick={() => props.handleonClick("home")}
              sx={{
                ...buttonMenu,
                backgroundColor: `${
                  props.activeButton === "home" ? Colors.white : "transparent"
                }`,
                color: `${
                  props.activeButton === "home" ? Colors.darkGray : Colors.white
                }`,
              }}
            >
              <HomeOutlinedIcon sx={icon} />
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => props.handleonClick("about")}
              sx={{
                ...buttonMenu,
                backgroundColor: `${
                  props.activeButton === "about" ? Colors.white : "transparent"
                }`,

                color: `${
                  props.activeButton === "about"
                    ? Colors.darkGray
                    : Colors.white
                }`,
              }}
            >
              <PersonOutlineOutlinedIcon sx={icon} />
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => props.handleonClick("projects")}
              sx={{
                ...buttonMenu,
                backgroundColor: `${
                  props.activeButton === "projects"
                    ? Colors.white
                    : "transparent"
                }`,
                color: `${
                  props.activeButton === "projects"
                    ? Colors.darkGray
                    : Colors.white
                }`,
              }}
            >
              <BookOutlinedIcon sx={icon} />
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => props.handleonClick("experience")}
              sx={{
                ...buttonMenu,
                backgroundColor: `${
                  props.activeButton === "experience"
                    ? Colors.white
                    : "transparent"
                }`,
                color: `${
                  props.activeButton === "experience"
                    ? Colors.darkGray
                    : Colors.white
                }`,
              }}
            >
              <WorkOutlineOutlinedIcon sx={icon} />
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => props.handleonClick("contact")}
              sx={{
                ...buttonMenu,
                backgroundColor: `${
                  props.activeButton === "contact"
                    ? Colors.white
                    : "transparent"
                }`,
                color: `${
                  props.activeButton === "contact"
                    ? Colors.darkGray
                    : Colors.white
                }`,
              }}
            >
              <LocalPhoneOutlinedIcon sx={icon} />
            </Button>
          </Grid>
          <Grid item>
            <Button
              sx={{ minWidth: { xs: 55, sm: 100 }, color: Colors.white }}
              href={resume}
              target="_blank"
            >
              <DescriptionOutlinedIcon sx={icon} />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

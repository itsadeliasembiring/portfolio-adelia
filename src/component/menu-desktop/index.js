import React from "react";
import { Box, Grid, Tooltip, Button } from "@mui/material";
import { containerMenu, boxMenu, gridMenu, buttonMenu, icon } from "./styles";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Colors from "../../theme/Color";

export default function MenuDekstop(props) {
  const resume =
    "https://drive.google.com/file/d/1PpVFW3iU9Vq06TdLI4ElbxXNmSh_JKDX/view?usp=sharing";
  return (
    <>
      <Box sx={containerMenu}>
        <Box sx={boxMenu}>
          <Grid container direction={"column"} spacing={1.3} sx={gridMenu}>
            <Grid item>
              <Tooltip title="Home" placement="right">
                <Button
                  onClick={() => props.handleonClick("home")}
                  sx={{
                    ...buttonMenu,
                    backgroundColor: `${
                      props.activeButton === "home"
                        ? Colors.white
                        : "transparent"
                    }`,
                    color: `${
                      props.activeButton === "home"
                        ? Colors.darkGray
                        : Colors.white
                    }`,
                  }}
                >
                  <HomeOutlinedIcon sx={icon} />
                </Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="About" placement="right">
                <Button
                  onClick={() => props.handleonClick("about")}
                  sx={{
                    ...buttonMenu,
                    backgroundColor: `${
                      props.activeButton === "about"
                        ? Colors.white
                        : "transparent"
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
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Projects" placement="right">
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
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Experience" placement="right">
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
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Contact" placement="right">
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
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Resume" placement="right">
                <Button
                  sx={{ color: Colors.white }}
                  href={resume}
                  target="_blank"
                >
                  <DescriptionOutlinedIcon sx={icon} />
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

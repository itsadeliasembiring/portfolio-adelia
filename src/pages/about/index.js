import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { containerAbout, title, desc, button, img } from "./styles";
import techStacks from "../../assets/tech.png";

export default function About() {
  const linkResume =
    "https://docs.google.com/document/d/1Yp4Kb_dyuv7lX7etYuSc0Z1Fdm7IR0l-/edit?usp=sharing&ouid=108889228937929007579&rtpof=true&sd=true";
  return (
    <>
      <Box sx={containerAbout} data-aos="fade-down">
        <Box sx={{ display: "block", pl: 4, pr: 3 }}>
          <Typography sx={title}>About Me</Typography>

          <Typography sx={desc} mt={-1}>
            Hi! I am a Full Stack Web Developer who loves to create powerful,
            responsive, and functional websites using various technologies.
          </Typography>
          <Box sx={img}>
            <img src={techStacks} style={{ width: "100%", height: "100%" }} />
          </Box>
          <Typography sx={desc}>
            I have experience in developing websites both as part of a team and
            individually.
          </Typography>
          <Typography sx={desc} mt={1}>
            Currently, I am looking for any new opportunities to contribute my
            best skills and knowledge to solve user problems.
          </Typography>

          <Button
            variant="contained"
            className="btn"
            sx={button}
            href={linkResume}
            target="_blank"
          >
            Here's My CV!
          </Button>
        </Box>
        <Box sx={{ width: "70%" }}></Box>
      </Box>
    </>
  );
}

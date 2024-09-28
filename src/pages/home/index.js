import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import {
  containerHome,
  boxImage,
  image,
  greeting,
  title,
  role,
  desc,
  icon,
} from "./styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import avatar from "../../assets/people.png";
import circleAvatar from "../../assets/circle-avatar.png";
import styled, { keyframes } from "styled-components";

export default function Home() {
  const contact = {
    linkedin: "https://www.linkedin.com/in/adelia-account/",
    github: "https://github.com/itsadeliasembiring",
    instagram: "https://www.instagram.com/adelialistic/",
  };
  const floatAvatar = keyframes`
  33% {
    top: 0px;
  }
  66% {
    top: 7px;
  }
  100% {
    top: 0px;
  }
`;

  // const bounceText = keyframes`
  // 0%{
  //   transform: scaleX(1);
  // }
  // 40%{
  //   transform: scaleX(1.12) scaleY(0.75);
  // }
  // 55%{
  //   transform: scaleX(0.85) scaleY(1);
  // }
  // 65%{
  //   transform: scaleX(1.09) scaleY(0.85);
  // }
  // 75%{
  //   transform: scaleX(0.9)  scaleY(1);
  // }
  // 90%{
  //   transform: scaleX(1.05) scaleY(0.95);
  // }
  // 100%{
  //   transform: scaleX(1) scaleY(1);
  // }
  // `;
  const AvatarImage = styled.img`
    width: 100%;
    height: 100%;
    position: relative;
    object-fit: cover;
    z-index: 1;
    animation: ${floatAvatar} 2.5s infinite;
  `;

  return (
    <>
      <Box sx={containerHome}>
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            align="center"
            sx={{
              width: "100%",
              direction: "column",
            }}
          >
            <Box sx={boxImage} data-aos="flip-up">
              <img src={circleAvatar} style={image} alt="foto" />
              <AvatarImage src={avatar} />
            </Box>
            <Box
              sx={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
              data-aos="fade-up"
            >
              <Typography sx={greeting}>👋Hi, i'm</Typography>

              <Typography sx={title}>ADEL;A</Typography>
              <Typography sx={role}>Undergraduate Information System</Typography>
              <Typography sx={desc}>
                Creating powerful & responsive web
              </Typography>

              <Box
                sx={{
                  mt: 2,
                }}
              >
                <Grid
                  container
                  direction="row"
                  spacing={1}
                  justifyContent={"center"}
                  sx={{ display: "flex" }}
                >
                  <Grid item>
                    <Link
                      href={contact.linkedin}
                      target="_blank"
                      underline="none"
                    >
                      <LinkedInIcon className="linkedin-contact" sx={icon} />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href={contact.github}
                      target="_blank"
                      underline="none"
                    >
                      <GitHubIcon className="github-contact" sx={icon} />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href={contact.instagram}
                      target="_blank"
                      underline="none"
                    >
                      <InstagramIcon className="instagram-contact" sx={icon} />
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

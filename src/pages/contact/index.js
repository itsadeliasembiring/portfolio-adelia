import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import {
  containerContact,
  boxContent,
  title,
  desc,
  icon,
  footer,
  footerBox,
} from "./styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import footerImg from "../../assets/footer.svg";
export default function Contact() {
  const linkedin = {
    link: "https://www.linkedin.com/in/adelia-account/",
    nama: "Adelia",
  };

  const github = {
    link: "https://github.com/itsadeliasembiring",
    nama: "Itsadeliasembiring",
  };

  const instagram = {
    link: "https://www.instagram.com/adelialistic/",
    nama: "Adelialistic",
  };

  const gmail = "adeliasmilecontact@gmail.com";

  return (
    <>
      <Typography sx={title} data-aos="fade-down">
        Contact Me
      </Typography>
      <Box sx={containerContact} data-aos="fade-down">
        <Box sx={boxContent}>
          <Typography sx={desc}>
            I'm currently looking for any new opportunities, whether in
            freelance work or any other opportunities.
          </Typography>
          <Typography sx={desc} mt={1}>
            However, if you have a question or simply want to say hello, don't
            hesitate to contact me. Thank You!
          </Typography>

          <Box
            sx={{
              mt: 2,
            }}
          >
            <Typography sx={desc} fontWeight={"bold"} mb={1}>
              Connect with Me :
            </Typography>
            <Grid
              container
              direction="row"
              spacing={1}
              sx={{ display: "block" }}
            >
              <Grid item sx={{ display: "flex", alignItems: "center" }}>
                <MailOutlineRoundedIcon
                  className="linkedin-contact"
                  sx={icon}
                />
                <Typography sx={desc}>{gmail}</Typography>
              </Grid>
              <Grid item>
                <Link
                  href={linkedin.link}
                  target="_blank"
                  underline="none"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <LinkedInIcon className="linkedin-contact" sx={icon} />
                  <Typography sx={desc}>{linkedin.nama}</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href={github.link}
                  target="_blank"
                  underline="none"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <GitHubIcon className="github-contact" sx={icon} />
                  <Typography sx={desc}>{github.nama}</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href={instagram.link}
                  target="_blank"
                  underline="none"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <InstagramIcon className="instagram-contact" sx={icon} />
                  <Typography sx={desc}>{instagram.nama}</Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box sx={footer}>
          <Box sx={footerBox}>
            <img src={footerImg} alt="footer" align="center" width={"100%"} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

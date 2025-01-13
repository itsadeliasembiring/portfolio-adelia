import React from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  containerExperience,
  boxContent,
  title,
  experienceName,
  desc,
  button,
} from "./styles";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// Import Data
import experienceData from "./data";

export default function Experience() {
  return (
    <>
      <Typography sx={title} data-aos="fade-down">
        Experience
      </Typography>
      <Box
        sx={containerExperience}
        className="experience-list"
        data-aos="fade-down"
      >
        {experienceData.map((data) => (
          <Box sx={boxContent} className={data.id}>
            {/* Title */}
            <Typography sx={experienceName}>{data.title}</Typography>
            {/* Place */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocationOnOutlinedIcon sx={{ mr: 0.5 }} />
              <Typography sx={desc}>{data.place}</Typography>
            </Box>
            {/* Category & Time*/}
            <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
              <TimerOutlinedIcon sx={{ mr: 0.5 }} />
              <Typography sx={desc} mr={0.5}>
                {data.time}
              </Typography>
              <Typography sx={desc}>| {data.category}</Typography>
            </Box>
            {/* Jobdesc */}
            <Typography sx={desc} fontWeight={"bold"} mt={1}>
              Job Description :
            </Typography>
            {experienceData[0].jobdesc.map((sentence, index) => (
              <Typography sx={desc} mb={0.3} key={index}>
                {sentence}
              </Typography>
            ))}

            {/* Certificate */}
            <Button
              variant="contained"
              className="btn"
              href={data.linkCertificate}
              target="_blank"
              sx={button}
            >
              Certificate
            </Button>
          </Box>
        ))}
      </Box>
    </>
  );
}

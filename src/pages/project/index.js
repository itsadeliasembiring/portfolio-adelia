import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box, Button, Typography } from "@mui/material";
import {
  containerProject,
  boxContent,
  title,
  projectName,
  category,
  desc,
  button,
  imgMobile,
  imgLaptop,
  boxProject,
} from "./styles";
// Import Data
import projectData from "./data";

export default function Project() {
  return (
    <>
      <Typography sx={title} data-aos="fade-down">
        Project's
      </Typography>
      <Box sx={containerProject} className="projects-list" data-aos="fade-down">
        {projectData.map((data) => (
          <Box className="project" sx={boxProject}>
            <Box sx={boxContent} className={data.id}>
              <Typography sx={projectName}>{data.title}</Typography>

              <Typography sx={category}>{data.category}</Typography>
              <Box sx={imgMobile}>
                <Carousel
                  infiniteLoop={true}
                  showArrows={true}
                  showThumbs={false}
                  autoPlay={true}
                  width={"100%"}
                >
                  <div>
                    <img src={data.previewOne} />
                  </div>
                  <div>
                    <img src={data.previewTwo} />
                  </div>
                  <div>
                    <img src={data.previewThree} />
                  </div>
                </Carousel>
              </Box>
              <Typography sx={desc} mt={1}>
                {data.description}
              </Typography>
              <Typography sx={desc} mt={1} fontWeight={"bold"}>
                Tools :
              </Typography>
              <Typography sx={desc}>{data.tools}</Typography>
              <Button
                variant="contained"
                className="btn"
                href={data.linkProject}
                sx={button}
              >
                Visit Now!
              </Button>
            </Box>
            <Box sx={imgLaptop}>
              <Carousel
                infiniteLoop={true}
                showArrows={true}
                showThumbs={false}
                autoPlay={true}
                width={"100%"}
                dynamicHeight={true}
              >
                <div>
                  <img src={data.previewOne} />
                </div>
                <div>
                  <img src={data.previewTwo} />
                </div>
                <div>
                  <img src={data.previewThree} />
                </div>
              </Carousel>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}

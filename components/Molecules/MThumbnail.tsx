/** @format */

import type { NextPage } from "next";
import Image from "next/image";
import { Stack, Container, Typography, Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
// ** component
import AButton from "../Atoms/AButton";

const MThumbnail = (props: any) => {
  const { handleMouseMove } = props;
  return (
    <Container
      maxWidth="xl"
      sx={{
        maxHeight: "100%",
        backgroundColor: "secondary.main",
        paddingY: 20,
      }}
      onMouseMove={handleMouseMove}
    >
      <Container
        sx={{ maxHeight: "50vh", maxWidth: "100vw", cursor: "default" }}
      >
        <Stack
          direction={{ xs: "column-reverse", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Stack spacing={"21px"}>
            <Typography fontSize={56} fontWeight={"bold"} flexWrap={"wrap"}>
              {`Hola! I’m FA Chalik,\n I implemented\n Design to Code`}
            </Typography>
            <Typography fontSize={16} fontWeight={"regular"} flexWrap={"wrap"}>
              Let’s Collaborate on your next project.
            </Typography>
            <Stack direction={"row"} spacing={2}>
              <AButton variant={"contained"}>Hire Me</AButton>
              <AButton variant={"outlined"}>Download CV</AButton>
            </Stack>
            <Stack direction={"row"} spacing={2}>
              <LinkedInIcon />
              <InstagramIcon />
              <GitHubIcon />
            </Stack>
          </Stack>
          <Box
            component="img"
            sx={{
              width: 580,
            }}
            alt="The house from the offer."
            src={`/Images/thumbnail-pic.png`}
          />
        </Stack>
      </Container>
    </Container>
  );
};

export default MThumbnail;

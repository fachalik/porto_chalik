/** @format */

import type { NextPage } from "next";
import Image from "next/image";
import {
  Stack,
  Container,
  Typography,
  Box,
  Tooltip,
  Link,
} from "@mui/material";
import Typewriter from "typewriter-effect";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
// ** component
import AButton from "../Atoms/AButton";

const MThumbnail = (props: any) => {
  const { handleMouseMove } = props;
  const ItemIcon = ({ href, children, tooltipData }: any) => {
    return (
      <Link href={href} underline="none" target={"_blank"}>
        <Tooltip title={tooltipData}>
          <IconButton>{children}</IconButton>
        </Tooltip>
      </Link>
    );
  };
  return (
    <Container
      maxWidth={false}
      // sx={{}}
      sx={{
        backgroundColor: "secondary.main",
      }}
      onMouseMove={handleMouseMove}
      id={"home"}
    >
      <Container
        sx={{
          maxHeight: { xs: "100vh", sm: "100vh", md: "100vh" },
          marginY: { xs: 10, md: 21 },
          maxWidth: "100%",
          cursor: "default",
        }}
      >
        <Stack
          direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          spacing={{ xs: 1, sm: 2, md: 0 }}
        >
          <Stack
            spacing={"21px"}
            width={{ xs: "90vw", sm: "90vw", md: "50vw" }}
            justifyContent={"center"}
          >
            <Box
              height={{ xs: 100, sm: 250, md: 240 }}
              fontSize={{ xs: 22, sm: 50 }}
              fontWeight={"bold"}
              flexWrap={"wrap"}
              textAlign={{ xs: "center", sm: "center", md: "start" }}
            >
              <Typewriter
                options={{
                  strings: [
                    "Hola! I'm FA Chalik, I will translate your design into code.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Box>

            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              fontWeight={"regular"}
              flexWrap={"wrap"}
              textAlign={{ xs: "center", sm: "center", md: "start" }}
            >
              Let’s Collaborate on your next project.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              spacing={2}
            >
              <AButton href={"/#contact"} variant={"contained"}>
                Hire Me
              </AButton>
              <AButton
                href={process.env.NEXT_PUBLIC_CV_URL}
                variant={"outlined"}
              >
                Download CV
              </AButton>
            </Stack>
            <Stack
              direction={"row"}
              textAlign={{ xs: "center", sm: "center", md: "start" }}
              alignItems={"center"}
              justifyContent={"center"}
              spacing={2}
            >
              <ItemIcon
                href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
                tooltipData={"fachalik"}
              >
                <LinkedInIcon />
              </ItemIcon>
              <ItemIcon
                href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
                tooltipData={"fachalik"}
              >
                <InstagramIcon />
              </ItemIcon>
              <ItemIcon
                href={process.env.NEXT_PUBLIC_GITHUB_URL}
                tooltipData={"fachalik"}
              >
                <GitHubIcon />
              </ItemIcon>
            </Stack>
          </Stack>
          <Box
            component="img"
            sx={{
              maxWidth: { xs: "80vw", sm: "80vw", md: 600 },
              // width: { xs: 350, sm: 700, md: 600 },

              // height: "auto",
              objectFit: "cover",
              // backgroundSize: "cover",
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

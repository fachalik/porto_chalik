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
      maxWidth="xl"
      sx={{
        backgroundColor: "secondary.main",
      }}
      onMouseMove={handleMouseMove}
      id={"home"}
    >
      <Container
        sx={{
          maxHeight: { xs: "100vh", md: "100vh" },
          marginY: { xs: 10, md: 21 },
          maxWidth: "100vw",
          cursor: "default",
        }}
      >
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          justifyContent={"center"}
          spacing={{ xs: 1, sm: 2, md: 0 }}
        >
          <Stack
            spacing={"21px"}
            width={{ md: "50vw" }}
            justifyContent={"center"}
          >
            <Box
              height={{ xs: 100, md: 240 }}
              fontSize={{ xs: 22, sm: 50 }}
              fontWeight={"bold"}
              flexWrap={"wrap"}
              textAlign={{ xs: "center", sm: "start" }}
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
              textAlign={{ xs: "center", sm: "start" }}
            >
              Let’s Collaborate on your next project.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
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
              justifyContent={{ xs: "center", sm: "start" }}
              alignItems={"center"}
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
              width: { xs: 350, sm: 600 },
              // height: "auto",
              backgroundSize: "cover",
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

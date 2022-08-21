/** @format */

import { Fragment } from "react";
import Image from "next/image";
import {
  Stack,
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Link,
  Tooltip,
  IconButton,
} from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AButton from "../Atoms/AButton";

const MFooter = () => {
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
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        // maxHeight: "1000px",
        backgroundColor: "secondary.main",
        paddingY: { xs: 5, md: 8 },
      }}
      id={"contact"}
    >
      <Container
        sx={{
          // maxHeight: { xs: "100vh", sm: "20vh" },
          maxWidth: "100vw",
          cursor: "default",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-between"}
        >
          <Stack direction={"column"} spacing={3} width={{ md: "50vw" }}>
            <Typography
              fontSize={{ xs: 18, sm: 26 }}
              marginBottom={{ xs: 2 }}
              fontWeight={"bold"}
              flexWrap={"wrap"}
              textAlign={{ xs: "center", sm: "start" }}
            >
              {`Hire me / work together ?`}
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 18 }}
              marginBottom={{ xs: 2 }}
              fontWeight={"regular"}
              flexWrap={"wrap"}
              textAlign={{ xs: "center", sm: "start" }}
            >
              Love to hear from you, Get in touch 🙌🏼
            </Typography>
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
          <Stack
            direction={"column"}
            marginTop={{ xs: 2 }}
            spacing={3}
            width={{ md: "50vw" }}
          >
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField
              id="outlined-multiline-static"
              label="Tell me something"
              multiline
              rows={4}
            />
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <AButton variant={"contained"}>Just send</AButton>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Container>
  );
};

export default MFooter;

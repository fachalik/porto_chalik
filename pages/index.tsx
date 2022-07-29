/** @format */

import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import useWindowDimensions from "../hooks/useWindowDimensions";
import useGetAngle from "../hooks/useGetAngle";

// ** MaterialUI Component
import { Container, Box } from "@mui/material";

// ** Component
import MHeader from "../components/Molecules/MHeader";
import MThumbnail from "../components/Molecules/MThumbnail";
import MAbout from "../components/Molecules/MAbout";
import MSeparateHire from "../components/Molecules/MSeparateHire";
import MLatestWork from "../components/Molecules/MLatestWork";
import MFooter from "../components/Molecules/MFooter";

const Home: NextPage = () => {
  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Head>
        <title>FC - Portofolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MHeader />
        <MThumbnail />
        <MAbout />
        <MSeparateHire />
        <MLatestWork />
        <MFooter />
      </Box>
    </Container>
  );
};

export default Home;

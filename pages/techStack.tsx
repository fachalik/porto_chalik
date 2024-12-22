/** @format */

import React from "react";
import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";

// ** MaterialUI Component
import { Container, Box } from "@mui/material";

// ** Component
import MHeader from "../components/Molecules/MHeader";
import MFooter from "../components/Molecules/MFooter";
import MTechStack from "../components/Molecules/MTechStack";

// ** Prisma
import prisma from "../utility/db";

// Define the type for tech stack
type TechStack = {
  id: number;
  name: string;
};

type Props = {
  techStack: TechStack[];
};

const TechStackPage: NextPage<Props> = ({ techStack }) => {
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
        <title>FC - Tech stack</title>
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
        <MTechStack techStack={techStack} />
        <MFooter />
      </Box>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const techStack = await prisma.techStack.findMany({
      orderBy: { id: "asc" }, // Example: Order by ID
    });

    return {
      props: {
        techStack,
      },
    };
  } catch (error) {
    console.error("Error fetching tech stack:", error);
    return {
      props: {
        techStack: [],
      },
    };
  }
};

export default TechStackPage;

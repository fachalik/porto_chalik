/** @format */

import type { NextPage } from "next";
import Image from "next/image";
import { Stack, Container, Typography, Box, Paper } from "@mui/material";

const MAbout = () => {
  const data: any = [
    {
      image: "/Images/puti.png",
      companyName: "PUTI Telkom University",
      role: "Frontend Web Developer",
      time: "March 2022 - Now",
    },
    {
      image: "/Images/upanastudio.png",
      companyName: "Upana Studio",
      role: "Frontend Web Developer Freelance",
      time: "Feb 2022 - Now",
    },
    {
      image: "/Images/amoeba.png",
      companyName: "Amoeba Telkom",
      role: "Frontend Web Developer Intern",
      time: "Sept 2021 - Feb 2022",
    },
  ];

  const ItemWorkAt = ({ item }: any) => {
    return (
      <Paper
        elevation={3}
        sx={{
          height: 200,
          width: 350,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 80,
          }}
          alt={item.companyName}
          src={item.image}
        />
        <div>
          <h4 style={{ textAlign: "center", margin: 0 }}>{item.role}</h4>
          <h6 style={{ textAlign: "center", margin: 0 }}>{item.companyName}</h6>
          <h6 style={{ textAlign: "center", margin: 0 }}>{item.time}</h6>
        </div>
      </Paper>
    );
  };

  return (
    <Container
      sx={{
        maxHeight: "100%",
        paddingY: 20,
      }}
    >
      <Stack spacing={5} direction={"column"}>
        <Typography fontSize={32} fontWeight={"bold"} textAlign="center">
          About Me
        </Typography>
        <Typography
          fontSize={18}
          fontWeight={"regular"}
          textAlign="justify"
          flexWrap="wrap"
        >
          I am from Indonesia and a graduate of informatics at Telkom
          University. I am a frontend developer with 1+ years of experience
          handling frontend projects from small, to big projects. I have a
          diverse set of skills, ranging from design disciplines to HTML + CSS +
          Javascript. I prefer to keep learning, continue challenging myself and
          do interesting things that matter. Now I Currently working at PUTI
          Telkom University and Freelance at Upana Studio as a frontend
          developer.
        </Typography>
        <Typography fontSize={32} fontWeight={"bold"} textAlign="center">
          My Journey
        </Typography>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {data.map((item: any, idx: number) => (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ItemWorkAt item={item} />
            </div>
          ))}
          {/* <Typography fontSize={32} fontWeight={"bold"} textAlign="center">
            My Journey
          </Typography>
          <Typography fontSize={32} fontWeight={"bold"} textAlign="center">
            My Journey
          </Typography>
          <Typography fontSize={32} fontWeight={"bold"} textAlign="center">
            My Journey
          </Typography>
          <Typography fontSize={32} fontWeight={"bold"} textAlign="center">
            My Journey
          </Typography> */}
        </Stack>
      </Stack>
    </Container>
  );
};

export default MAbout;

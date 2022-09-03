/** @format */

import type { NextPage } from "next";
import Image from "next/image";
import {
  Stack,
  Container,
  Typography,
  Box,
  Paper,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { timeout } from "../../utility/utilitys";

const MAbout = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchingMyJourney = async () => {
      await setIsLoading(true);
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}journeys`)
        .then(async (response) => {
          await timeout(1000);
          await setData(response.data.data);
          await setIsLoading(false);
        })
        .catch((err) => {
          setIsError(true);
          setErrorMessage(err.message);
        });
    };
    fetchingMyJourney();
  }, []);

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
          alt={item.cloudinary_id}
          src={item.image}
        />
        <div>
          <h4 style={{ textAlign: "center", margin: 0 }}>{item.jobRole}</h4>
          <h6 style={{ textAlign: "center", margin: 0 }}>{item.companyName}</h6>
          <h6 style={{ textAlign: "center", margin: 0 }}>{item.Date}</h6>
        </div>
      </Paper>
    );
  };

  console.log(data);
  return (
    <Container
      sx={{
        maxHeight: "100%",
        paddingY: { xs: 10, md: 15 },
      }}
      id={"about"}
    >
      <Stack spacing={5} direction={"column"}>
        <Typography fontSize={32} fontWeight={"bold"} textAlign="center">
          About Me
        </Typography>
        <Typography
          px={{ xs: 2 }}
          fontSize={{ xs: 14, md: 18 }}
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
        {isLoading && (
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <CircularProgress />
          </Stack>
        )}
        {!isLoading && (
          <>
            <Typography fontSize={32} fontWeight={"bold"} textAlign="center">
              My Journey
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
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
            </Stack>
          </>
        )}
      </Stack>
    </Container>
  );
};

export default MAbout;

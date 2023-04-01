/** @format */

import { Fragment } from "react";
import Image from "next/image";
import {
  Stack,
  Container,
  Typography,
  Box,
  Grid,
  CircularProgress,
  Tooltip,
  Link,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

import { useQuery } from "react-query";
import { isArray } from "lodash";

const MLatestWork = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const fetchingLatest3 = async () => {
    try {
      const data = await axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}latest-work/get3Data`)
        .then(async (response) => {
          if (isArray(response.data.data)) return response.data.data;
        })
        .catch((err) => {
          throw new Error(err.message);
        });

      if (!data) {
        throw new Error("Internal Server Error");
      }
      return await data;
    } catch (err: any) {
      throw new Error(`${err.message} 🧑🏽‍🔧`);
    }
  };

  const { data, isSuccess, isError, isLoading } = useQuery(
    "latestWork3",
    fetchingLatest3,
    {
      onError: (error: any) => {
        setErrorMessage(`${error.message} 🧑🏽‍🔧`);
      },
    }
  );

  const ItemWorkAt = ({ item }: any) => {
    return (
      <Grid item xs={12} md={4} justifyContent={"center"} alignItems={"center"}>
        <Link href={item.link} underline="none" target={"_blank"}>
          <Tooltip title={item.link}>
            <Stack spacing={1} justifyContent={"center"}>
              <Box
                component="img"
                sx={{
                  backgroundColor: "secondary.main",
                  height: { xs: "200px", sm: "350px", md: "230px" },
                  width: { xs: "auto", md: "auto" },
                  backgroundSize: "contain",
                  borderRadius: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: 3,
                }}
                alt={item.title}
                src={item.image}
              />
              <Box>
                <Typography
                  fontSize={{ xs: 14, md: 18 }}
                  fontWeight={"bold"}
                  textAlign={{ xs: "center", md: "justify" }}
                  flexWrap="wrap"
                >
                  {item.title}
                </Typography>
                <Typography
                  fontSize={{ xs: 12, md: 16 }}
                  fontWeight={"light"}
                  textAlign={{ xs: "center", md: "justify" }}
                  flexWrap="wrap"
                >
                  {item.category}
                </Typography>
              </Box>
            </Stack>
          </Tooltip>
        </Link>
      </Grid>
    );
  };

  return (
    <Container
      sx={{
        maxHeight: "100%",
        paddingY: { xs: 10, md: 18 },
      }}
      id={"works"}
    >
      <Stack spacing={10} direction={"column"} justifyContent={"center"}>
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "center", md: "end" },
            justifyContent: { xs: "center", md: "start" },
          }}
        >
          <Typography
            fontSize={32}
            fontWeight={"bold"}
            textAlign={{ xs: "center", md: "start" }}
          >
            Latest work
          </Typography>
          <Link href={"/latestWork"}>
            <Typography
              fontSize={12}
              textAlign="start"
              mb={0.9}
              ml={2}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              See more
            </Typography>
          </Link>
        </Box>
        {isSuccess && !isLoading && (
          <Grid
            container
            spacing={{ xs: 0, md: 2 }}
            rowSpacing={{ xs: 4, md: 2.5 }}
            alignItems="center"
            justifyContent="center"
          >
            {data.map((item: any, idx: number) => (
              <ItemWorkAt item={item} key={idx} />
            ))}
          </Grid>
        )}
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

        {isError && (
          <Typography fontSize={24} textAlign="center">
            {errorMessage}
          </Typography>
        )}
      </Stack>
    </Container>
  );
};

export default MLatestWork;

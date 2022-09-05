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
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { timeout } from "../../utility/utilitys";

const MLatestWork = () => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchingLatestWork = () => {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}latest-work/get3Data`)
        .then(async (response) => {
          await timeout(1000);
          await setData(response.data.data);
          await setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsError(true);
          setIsLoading(false);
        });
    };

    fetchingLatestWork();
  }, []);

  const ItemWorkAt = ({ item }: any) => {
    return (
      <Grid item xs={2}>
        <Stack spacing={1} justifyContent={{ xs: "center", md: "start" }}>
          <Box
            sx={{
              backgroundColor: "secondary.main",
              height: { xs: "300px", md: "350px" },
              width: { xs: "80vw", md: "25vw" },
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                backgroundSize: "contain",
              }}
              alt={item.title}
              src={item.image}
            />
          </Box>
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
            {item.title}
          </Typography>
        </Stack>
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
      <Stack spacing={10} direction={"column"}>
        <Typography fontSize={32} fontWeight={"bold"} textAlign="center">
          Latest work
        </Typography>
        {!isError && !isLoading && data.length ? (
          <Grid
            container
            spacing={0}
            rowSpacing={2.5}
            alignItems="center"
            justifyContent="center"
            // style={{ minHeight: "100vh" }}
          >
            {data.map((item: any, idx: number) => (
              <ItemWorkAt item={item} key={idx} />
            ))}
          </Grid>
        ) : (
          !isError &&
          !isLoading && (
            <Typography fontSize={24} textAlign="center">
              No result found 🕵🏼‍♂️
            </Typography>
          )
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
            Something was wrong 🧑🏽‍🔧
          </Typography>
        )}
        {/* <Grid
          container
          gridRow={3}
          rowSpacing={{ xs: 4 }}
          columnSpacing={{ md: 4 }}
          sx={{ maxWidth: "100vw" }}
          direction={{ xs: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
        >
          {data.map((item: any, idx: number) => (
            <ItemWorkAt item={item} key={idx} />
          ))}
        </Grid> */}
      </Stack>
    </Container>
  );
};

export default MLatestWork;

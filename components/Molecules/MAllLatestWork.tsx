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
import { timeout } from "../../utility/utilitys";

const MAllLatestWork = () => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchingLatestWork = () => {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}latest-work`)
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
      <Grid
        item
        xs={12}
        sm={7}
        md={4}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Link href={item.link} underline="none" target={"_blank"}>
          <Tooltip title={item.link}>
            <Stack spacing={1} justifyContent={"center"}>
              <Box
                component="img"
                sx={{
                  backgroundColor: "secondary.main",
                  height: { xs: "200px", md: "230px" },
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
        <Typography fontSize={32} fontWeight={"bold"} textAlign={"center"}>
          Latest work
        </Typography>

        {!isError && !isLoading && data.length ? (
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
      </Stack>
    </Container>
  );
};

export default MAllLatestWork;

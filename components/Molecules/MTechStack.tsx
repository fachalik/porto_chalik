/** @format */

import { Fragment } from "react";
import Image from "next/image";
import {
  Stack,
  Container,
  Typography,
  Box,
  Grid,
  Tooltip,
  Link,
  CircularProgress,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { timeout } from "../../utility/utilitys";

const MTechStack = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchingTechStack = () => {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}tech-stack`)
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

    fetchingTechStack();
  }, []);

  const ItemWorkAt = ({ item }: any) => {
    return (
      <Grid xs={6} md={2} item justifyContent={"center"} alignItems={"center"}>
        <Link href={item.website} underline="none" target={"_blank"}>
          <Tooltip title={item.website}>
            <Stack justifyContent={"center"} alignItems={"center"}>
              <Box
                sx={{
                  backgroundColor: "#F3F3F3",
                  height: { xs: "150px", md: "150px" },
                  width: { xs: "150px", md: "150px" },
                  borderRadius: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": {
                    transition: "0.3s",
                    backgroundColor: "#D9D9D9",
                  },
                }}
              >
                <Box
                  component="img"
                  sx={{
                    borderRadius: 3,
                    maxWidth: "100px",
                    maxHeight: "100px",
                    marginTop: "10px",
                  }}
                  alt={item.name}
                  src={item.image}
                />
              </Box>
              <Typography marginTop={2} fontSize={12} textAlign="center">
                {item.name}
              </Typography>
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
        <Typography fontSize={32} textAlign="center">
          Heres my tech stack ‍💻
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
      </Stack>
    </Container>
  );
};

export default MTechStack;

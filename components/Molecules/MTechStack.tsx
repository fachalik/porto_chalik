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

import { useQuery } from "react-query";
import { isArray } from "lodash";

const MTechStack = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const fetchingTechStack = async () => {
    try {
      const data = await axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}tech-stack`)
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
    "techStack",
    fetchingTechStack,
    {
      onError: (error: any) => {
        setErrorMessage(`${error.message} 🧑🏽‍🔧`);
      },
    }
  );

  const ItemWorkAt = ({ item }: any) => {
    return (
      <Grid
        xs={6}
        sm={4}
        md={2}
        item
        justifyContent={"center"}
        alignItems={"center"}
      >
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
      id={"tech-stack"}
    >
      <Stack spacing={10} direction={"column"} justifyContent={"center"}>
        <Typography fontSize={32} textAlign="center">
          Heres my tech stack ‍💻
        </Typography>
        {isSuccess && !isLoading && (
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

export default MTechStack;

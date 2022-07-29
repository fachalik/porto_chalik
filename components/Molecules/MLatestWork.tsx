/** @format */

import { Fragment } from "react";
import Image from "next/image";
import { Stack, Container, Typography, Box, Grid } from "@mui/material";

const MLatestWork = () => {
  const data: any = [
    {
      image: "/Images/puti.png",
      name: "PUTI Telkom University",
      type: "Frontend Web Developer",
    },
    {
      image: "/Images/upanastudio.png",
      name: "PUTI Telkom University",
      type: "Frontend Web Developer",
    },
    {
      image: "/Images/amoeba.png",
      name: "PUTI Telkom University",
      type: "Frontend Web Developer",
    },
  ];

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
              alt={item.name}
              src={item.image}
            />
          </Box>
          <Typography
            fontSize={{ xs: 14, md: 18 }}
            fontWeight={"bold"}
            textAlign={{ xs: "center", md: "justify" }}
            flexWrap="wrap"
          >
            {item.name}
          </Typography>
          <Typography
            fontSize={{ xs: 12, md: 16 }}
            fontWeight={"light"}
            textAlign={{ xs: "center", md: "justify" }}
            flexWrap="wrap"
          >
            {item.type}
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
        <Grid
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
        </Grid>
      </Stack>
    </Container>
  );
};

export default MLatestWork;

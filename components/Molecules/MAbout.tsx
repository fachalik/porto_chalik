/** @format */

import type { NextPage } from 'next';
import Image from 'next/image';
import {
  Stack,
  Container,
  Typography,
  Box,
  Paper,
  CircularProgress,
  Grid,
} from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { isArray } from 'lodash';

const MAbout = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const data = [
    {
      jobRole: 'Frontend Developer',
      companyName: 'Infomedia Nusantara',
      Date: 'Oct 2022 - Present',
      image: './images/infomedianusantara_cover.jpeg',
    },
    {
      jobRole: 'Frontend Developer',
      companyName: 'PUTI Telkom University',
      Date: 'Mar 2022 - Oct 2022',
      image: './images/puti.png',
    },
    {
      jobRole: 'Frontend Developer',
      companyName: 'Upana Studio',
      Date: 'Feb 2022 - Jan 2023',
      image: './images/upanastudio.png',
    },
    {
      jobRole: 'Frontend Developer Intern',
      companyName: 'Amoeba X Kampus Merdeka',
      Date: 'Sep 2021 - Feb 2022',
      image: './images/amoeba.png',
    },
  ];
  // const fetchingMyJourney = async () => {
  //   try {
  //     const data = await axios
  //       .get(`${process.env.NEXT_PUBLIC_API_URL}journeys`)
  //       .then(async (response) => {
  //         if (isArray(response.data.data)) return response.data.data;
  //       })
  //       .catch((err) => {
  //         throw new Error(err.message);
  //       });

  //     if (!data) {
  //       throw new Error('Internal Server Error');
  //     }
  //     return await data;
  //   } catch (err: any) {
  //     throw new Error(`${err.message} 🧑🏽‍🔧`);
  //   }
  // };

  // const { data, isSuccess, isError, isLoading } = useQuery(
  //   'about',
  //   fetchingMyJourney,
  //   {
  //     onError: (error: any) => {
  //       setErrorMessage(`${error.message} 🧑🏽‍🔧`);
  //     },
  //   }
  // );

  const ItemWorkAt = ({ item }: any) => {
    return (
      <Paper
        elevation={3}
        sx={{
          height: 200,
          width: 350,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          sx={{
            height: { xs: '80px', sm: '80px', md: '100px' },
            width: '200px',
            objectFit: 'contain',
          }}
          alt={item.companyName}
          src={item.image}
        />
        <div>
          <h4 style={{ textAlign: 'center', margin: 0 }}>{item.jobRole}</h4>
          <h6 style={{ textAlign: 'center', margin: 0 }}>{item.companyName}</h6>
          <h6 style={{ textAlign: 'center', margin: 0 }}>{item.Date}</h6>
        </div>
      </Paper>
    );
  };

  return (
    <Container
      sx={{
        maxHeight: '100%',
        paddingY: { xs: 10, md: 15 },
      }}
      id={'about'}
    >
      <Stack spacing={5} direction={'column'}>
        <Typography
          fontSize={32}
          fontWeight={'bold'}
          textAlign="center"
          px={{ xs: 0 }}
        >
          About Me
        </Typography>
        <Typography
          fontSize={{ xs: 14, md: 18 }}
          fontWeight={'regular'}
          textAlign="justify"
          flexWrap="wrap"
        >
          I am from Indonesia and a graduate of informatics at Telkom
          University. I am a frontend developer with 1+ years of experience
          handling frontend projects from small, to big projects. I have a
          diverse set of skills, ranging from design disciplines to HTML + CSS +
          Javascript. I prefer to keep learning, continue challenging myself and
          do interesting things that matter. Now I Currently working at
          Infomedia Nusantara as frontend programmer.
        </Typography>

        <Stack spacing={5} direction={'column'} py={{ xs: 0, md: 10 }}>
          <Typography
            fontSize={32}
            fontWeight={'bold'}
            textAlign="center"
            px={{ xs: 0 }}
          >
            My Journey
          </Typography>
          {/* {!isLoading && ( */}
          <Grid
            container
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="center"
            alignItems="center"
          >
            {data.map((item: any, idx: number) => (
              <Grid
                item
                xs={4}
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '10px',
                }}
              >
                <ItemWorkAt item={item} />
              </Grid>
            ))}
          </Grid>
          {/* )} */}
          {/* {isLoading && (
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
          )} */}
        </Stack>
      </Stack>
    </Container>
  );
};

export default MAbout;

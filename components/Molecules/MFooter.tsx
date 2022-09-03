/** @format */

import { Fragment } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Stack,
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Link,
  Tooltip,
  IconButton,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AButton from "../Atoms/AButton";

const schema = yup
  .object({
    name: yup.string().required("name is required"),
    email: yup.string().email("email wrong").required("mail is required"),
    message: yup.string().required("message required"),
  })
  .required();
interface IFormInputs {
  name: string;
  email: string;
  message: string;
}

const MFooter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(schema) });

  const ItemIcon = ({ href, children, tooltipData }: any) => {
    return (
      <Link href={href} underline="none" target={"_blank"}>
        <Tooltip title={tooltipData}>
          <IconButton>{children}</IconButton>
        </Tooltip>
      </Link>
    );
  };

  const onSubmit = async (data: IFormInputs) => {
    await setIsLoading(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}get-in-touch`, data)
      .then((response) => {
        console.log(response);
        setIsSend(true);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
        setIsLoading(false);
      });
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        // maxHeight: "1000px",
        backgroundColor: "secondary.main",
        paddingY: { xs: 5, md: 8 },
      }}
      id={"contact"}
    >
      <Container
        sx={{
          // maxHeight: { xs: "100vh", sm: "20vh" },
          maxWidth: "100vw",
          cursor: "default",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-between"}
        >
          <Stack direction={"column"} spacing={3} width={{ md: "50vw" }}>
            <Typography
              fontSize={{ xs: 18, sm: 26 }}
              marginBottom={{ xs: 2 }}
              fontWeight={"bold"}
              flexWrap={"wrap"}
              textAlign={{ xs: "center", sm: "start" }}
            >
              {`Hire me / work together ?`}
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 18 }}
              marginBottom={{ xs: 2 }}
              fontWeight={"regular"}
              flexWrap={"wrap"}
              textAlign={{ xs: "center", sm: "start" }}
            >
              Love to hear from you, Get in touch 🙌🏼
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={{ xs: "center", sm: "start" }}
              alignItems={"center"}
              spacing={2}
            >
              <ItemIcon
                href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
                tooltipData={"fachalik"}
              >
                <LinkedInIcon />
              </ItemIcon>
              <ItemIcon
                href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
                tooltipData={"fachalik"}
              >
                <InstagramIcon />
              </ItemIcon>
              <ItemIcon
                href={process.env.NEXT_PUBLIC_GITHUB_URL}
                tooltipData={"fachalik"}
              >
                <GitHubIcon />
              </ItemIcon>
            </Stack>
          </Stack>
          {!isSend && !isError && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack
                direction={"column"}
                marginTop={{ xs: 2 }}
                spacing={3}
                width={{ md: "50vw" }}
              >
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      {...field}
                      error={errors.name?.message !== undefined}
                    />
                  )}
                />
                <p style={{ color: "red", margin: 0 }}>
                  {errors.name?.message}
                </p>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      {...field}
                      error={errors.email?.message !== undefined}
                    />
                  )}
                />
                <p style={{ color: "red", margin: 0 }}>
                  {errors.email?.message}
                </p>
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="outlined-multiline-static"
                      label="Tell me something"
                      multiline
                      rows={4}
                      {...field}
                      error={errors.message?.message !== undefined}
                    />
                  )}
                />
                <p style={{ color: "red", margin: 0 }}>
                  {errors.message?.message}
                </p>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <AButton type={"submit"} variant={"contained"}>
                    Just send
                  </AButton>
                </Box>
              </Stack>
            </form>
          )}
          {isSend && (
            <Box
              mt={{ xs: 3, md: 0 }}
              width={{ md: "50vw" }}
              sx={{
                borderRadius: 1,
                backgroundColor: "white",
                paddingY: { xs: 5, md: 8 },
              }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              Thank you 🫶
            </Box>
          )}
          {isError && (
            <Box
              mt={{ xs: 3, md: 0 }}
              width={{ md: "50vw" }}
              sx={{
                borderRadius: 1,
                backgroundColor: "white",
                paddingY: { xs: 5, md: 8 },
              }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              Something error in services 🫣
            </Box>
          )}
        </Stack>
      </Container>
    </Container>
  );
};

export default MFooter;

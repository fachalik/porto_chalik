/** @format */
import { Stack, Container, Typography, Box } from "@mui/material";
// ** component
import AButton from "../Atoms/AButton";

const MSeparateHire = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        maxHeight: "100%",
        backgroundColor: "secondary.main",
        paddingY: { xs: 5, md: 8 },
      }}
    >
      <Container
        sx={{
          maxHeight: { xs: "100vh", sm: "20vh" },
          maxWidth: "100vw",
          cursor: "default",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-between"}
        >
          <Typography
            fontSize={{ xs: 24, sm: 42 }}
            marginBottom={{ xs: 2 }}
            fontWeight={"bold"}
            flexWrap={"wrap"}
            textAlign={{ xs: "center", sm: "start" }}
          >
            {`Hire me / work together ?`}
          </Typography>

          <AButton variant={"contained"} href={"/#contact"}>
            Check This
          </AButton>
        </Stack>
      </Container>
    </Container>
  );
};

export default MSeparateHire;

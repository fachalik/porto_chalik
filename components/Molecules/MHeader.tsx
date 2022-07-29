/** @format */

import type { NextPage } from "next";
import { Button, Container, Toolbar, Box, AppBar } from "@mui/material";

import Link from "next/link";

import ALogo from "../Atoms/ALogo";

const MHeader = (props: any) => {
  const navItems = ["Home", "About", "Works", "Tech Stack", "Contact"];
  return (
    <Container sx={{ maxHeight: "50vh", maxWidth: "100vw" }}>
      <AppBar
        position="static"
        component="nav"
        style={{ background: "#ffffff" }}
        elevation={0}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "space-between" },
          }}
        >
          <ALogo />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link
                scroll={false}
                href={`/#${item.toLowerCase()}`}
                passHref
                key={item}
              >
                <Button
                  sx={{
                    color: "black",
                    textTransform: "capitalize",
                    fontWeight: "bold",
                  }}
                >
                  {item}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default MHeader;

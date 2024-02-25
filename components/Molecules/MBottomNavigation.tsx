/** @format */

import React, { useEffect } from "react";
import { BottomNavigation, BottomNavigationAction, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import { useRouter } from "next/router";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function MBottomNavigation() {
  const router = useRouter();
  const [value, setValue] = React.useState<number>(0);
  // const [active, setActive] = React.useState<boolean>(false);
  const dimension: any = useWindowDimensions();
  // console.log(dimension);

  console.log(router.pathname);

  useEffect(() => {
    if (router.pathname === "/") return setValue(0);
    if (router.pathname === "/techStack") return setValue(1);
    if (router.pathname === "/latestWork") return setValue(2);
  }, []);

  return (
    <Stack
      direction={"row"}
      sx={{
        zIndex: 100,
        display: { xs: "block", sm: "block", md: "none" },
        position: "fixed",
        bottom: "0px",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          // Router.push();
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          onClick={() => router.push("/")}
        />
        <BottomNavigationAction
          label="Tech Stack"
          icon={<BuildIcon />}
          onClick={() => router.push("/techStack")}
        />
        <BottomNavigationAction
          label="Project"
          icon={<HomeRepairServiceIcon />}
          onClick={() => router.push("/latestWork")}
        />
      </BottomNavigation>
    </Stack>
  );
}

export default MBottomNavigation;

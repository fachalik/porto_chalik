/** @format */

import React, { useEffect } from "react";
import { BottomNavigation, BottomNavigationAction, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import { useRouter } from "next/router";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function MBottomNavigation() {
  const router = useRouter();
  const [value, setValue] = React.useState<number>(0);
  const [active, setActive] = React.useState<boolean>(false);
  const dimension: any = useWindowDimensions();
  console.log(dimension);

  useEffect(() => {
    dimension !== null && dimension.width <= 450 && setActive(true);
    if (active) {
      if (value === 0) router.push("/");
      if (value === 1) router.push("/techStack");
    }
  }, [value, active, dimension]);

  return (
    <Stack
      direction={"row"}
      sx={{
        zIndex: 100,
        display: { xs: "block", sm: "none" },
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
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Tech Stack" icon={<BuildIcon />} />
      </BottomNavigation>
    </Stack>
  );
}

export default MBottomNavigation;

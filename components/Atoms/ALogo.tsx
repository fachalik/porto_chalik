/** @format */
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const ALogo = (props: any) => {
  const [angle, setAngle] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (angle === 360) {
        setAngle(0);
      } else {
        setAngle((angle) => angle + 1);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [angle]);

  return (
    <Link scroll={false} href={`/`} passHref>
      <Box>
        <Box
          sx={{
            width: 45,
            height: 45,
            backgroundColor: "black",
            borderRadius: 99,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            fontSize={"14px"}
            fontWeight={"bold"}
            component="div"
            color="white"
            sx={{ transform: `rotate(${angle}deg)` }}
          >
            FC
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default ALogo;

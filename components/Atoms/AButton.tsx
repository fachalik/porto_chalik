/** @format */
import React, { FC } from "react";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

interface IProps {
  children: any;
  variant?: any;
  href?: string;
  type?: any;
}
const AButton: FC<IProps> = (props) => {
  const { children, variant, href, type = "button" } = props;
  return (
    <>
      {href ? (
        <Link scroll={false} href={href} passHref>
          <Button
            type={type}
            variant={variant}
            sx={{ minWidth: 235, minHeight: 55 }}
          >
            <Typography fontSize={{ xs: 12, md: 16 }} fontWeight="bold">
              {children}
            </Typography>
          </Button>
        </Link>
      ) : (
        <Button
          type={type}
          variant={variant}
          sx={{ minWidth: 235, minHeight: 55 }}
        >
          <Typography fontSize={{ xs: 12, md: 16 }} fontWeight="bold">
            {children}
          </Typography>
        </Button>
      )}
    </>
  );
};

export default AButton;

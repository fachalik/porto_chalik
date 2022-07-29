/** @format */
import React, { FC } from "react";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

interface IProps {
  children: any;
  variant?: any;
  href: string;
}
const AButton: FC<IProps> = (props) => {
  const { children, variant, href } = props;
  return (
    <>
      {href ? (
        <Link scroll={false} href={href} passHref>
          <Button variant={variant} sx={{ minWidth: 235, minHeight: 55 }}>
            <Typography fontSize={{ xs: 12, md: 16 }} fontWeight="bold">
              {children}
            </Typography>
          </Button>
        </Link>
      ) : (
        <Button variant={variant} sx={{ minWidth: 235, minHeight: 55 }}>
          <Typography fontSize={{ xs: 12, md: 16 }} fontWeight="bold">
            {children}
          </Typography>
        </Button>
      )}
    </>
  );
};

export default AButton;

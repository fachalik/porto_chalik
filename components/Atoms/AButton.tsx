/** @format */
import { Box, Button, Typography } from "@mui/material";

const AButton = (props: any) => {
  const { children, variant } = props;
  return (
    <Button variant={variant} sx={{ minWidth: 235, minHeight: 55 }}>
      <Typography fontSize={16} fontWeight="bold">
        {children}
      </Typography>
    </Button>
  );
};

export default AButton;

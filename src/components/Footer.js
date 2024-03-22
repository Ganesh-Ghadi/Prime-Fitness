import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#D2F9D2">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <FitnessCenterIcon
          style={{ width: "50px", height: "50px", color: "35e335" }}
        />
        <Typography variant="h5" pb="40px" >
          Made By Ganesh Ghadi
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;

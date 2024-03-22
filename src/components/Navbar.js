import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const Navbar = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{
          gap: { sm: "122px", xs: "40px" },
          mt: { sm: "32px", xs: "20px" },
          justifyContent: "none",
        }}
        px="20px"
      >
        <Link>
          <FitnessCenterIcon
            style={{
              height: "48px",
              width: "48px",
              margin: "0 20px",
              color: "#35e335",
            }}
          />
        </Link>
        <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#3a1212",
              borderBottom: "3px solid #35E335",
            }}
          >
            Home
          </Link>
          <a
            href="#exercises"
            style={{ textDecoration: "none", color: "#3a1212" }}
          >
            Exercises
          </a>
        </Stack>
      </Stack>
    </>
  );
};

export default Navbar;

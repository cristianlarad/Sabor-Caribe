import NavBar2 from "@/components/NavBar2";
import Principales from "@/components/Principales";
import { Typography } from "@mui/material";
import React from "react";

const PlatosPricncipales = () => {
  return (
    <>
      <NavBar2 />
      <div className="grid">
        <Typography className="text-center" variant="h4">
          Platos Principales
        </Typography>
      </div>
      <div className="  columns-2  place-items-center">
        <Principales />
      </div>
    </>
  );
};

export default PlatosPricncipales;

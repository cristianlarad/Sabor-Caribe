import Entrada from "@/components/Entrada";
import { Typography } from "@mui/material";
import React from "react";

import NavBar2 from "@/components/NavBar2";

const Entradas = () => {
  return (
    <>
      <NavBar2 />
      <div className="grid">
        <Typography className="text-center" variant="h4">
          Entradas
        </Typography>
      </div>
      <div className="  columns-2  place-items-center">
        <Entrada />
      </div>
    </>
  );
};

export default Entradas;

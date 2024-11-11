import React, { useState } from "react";
import NavBar2 from "@/components/NavBar2";
import Entrada from "@/components/Entrada";
import { Typography } from "@mui/material";
import Principales from "@/components/Principales";
import Postre from "@/components/Postre";

export default function Menu() {
  return (
    <div>
      <NavBar2 />
      <Typography className="text-center" variant="h4">
        Entradas
      </Typography>
      <div className=" columns-2 mt-1 place-items-center">
        <Entrada />
      </div>
      <Typography className="text-center" variant="h4">
        Principales
      </Typography>
      <div className=" columns-2 mt-1 place-items-center">
        <Principales />
      </div>
      <Typography className="text-center" variant="h4">
        Postre
      </Typography>
      <div className=" columns-2 mt-1 place-items-center">
        <Postre />
      </div>
    </div>
  );
}

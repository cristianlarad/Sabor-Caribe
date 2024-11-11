import Postre from "@/components/Postre";
import { Typography } from "@mui/material";
import React from "react";

import NavBar2 from "@/components/NavBar2";

const Postres = () => {
  return (
    <>
      <NavBar2 />
      <div className="grid">
        <Typography className="text-center" variant="h4">
          Postres
        </Typography>
      </div>
      <div className="  columns-2  place-items-center">
        <Postre />
      </div>
    </>
  );
};

export default Postres;

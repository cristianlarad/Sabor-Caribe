import { Card, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const NavBar2 = () => {
  return (
    <Toolbar color="transparent" className=" justify-center gap-5 ">
      <Card className="bg-verde-menta p-1">
        <Link href="/menu">
          <Typography
            className="text-slate-50 hover:text-azul-caribe"
            variant="body1"
          >
            Todos
          </Typography>
        </Link>
      </Card>
      <Card className="bg-verde-menta p-1">
        <Link href="/menu/entradas">
          <Typography
            className="text-slate-50 hover:text-azul-caribe"
            variant="body1"
          >
            Entradas
          </Typography>
        </Link>
      </Card>
      <Card className="bg-verde-menta p-1">
        <Link href="/menu/platos_principales">
          <Typography
            className="text-slate-50 hover:text-azul-caribe"
            variant="body1"
          >
            Platos Principales
          </Typography>
        </Link>
      </Card>
      <Card className="bg-verde-menta p-1">
        <Link href="/menu/postres">
          <Typography
            className="text-slate-50 hover:text-azul-caribe"
            variant="body1"
          >
            Postres
          </Typography>
        </Link>
      </Card>
    </Toolbar>
  );
};

export default NavBar2;

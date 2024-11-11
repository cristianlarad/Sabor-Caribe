"use client";

import { AppBar, Toolbar } from "@mui/material";
import Link from "next/link";
import React from "react";
import DiningIcon from "@mui/icons-material/Dining";

const NavBar = () => {
  return (
    <Toolbar className="">
      <AppBar className="  flex items-center justify-between p-5  bg-verde-menta  ">
        <div className="flex items-center space-x-4  ">
          <Link href="/" className=" hover:text-azul-caribe font-semibold">
            Home
          </Link>
          <Link href="/menu" className=" hover:text-azul-caribe font-semibold">
            Menu
          </Link>
          <Link
            href="/reservar"
            className=" hover:text-azul-caribe font-semibold"
          >
            Reservar
          </Link>
          <Link
            href="/informacion"
            className=" hover:text-azul-caribe font-semibold"
          >
            Informacion
          </Link>
          <div className="ml-10 ">
            <Link href="/pedidos">
              <DiningIcon color="success" />
            </Link>
          </div>
        </div>
      </AppBar>
    </Toolbar>
  );
};

export default NavBar;

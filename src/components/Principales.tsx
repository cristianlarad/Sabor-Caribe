import React from "react";
import { pb } from "@/lib/pocketbase";
import { Box, Button, Card, Typography } from "@mui/material";

import Image from "next/image";

import Valoracion from "./Valoracion";
import { Cancel, CheckCircle } from "@mui/icons-material";

export default async function Principales() {
  const principallist = await pb.collection("Platos_Principales").getList();

  return (
    <div>
      {principallist.items.map((entrada) => (
        <Card className="flex mt-3 h-56 bg-verde-menta p-3" key={entrada.id}>
          <Image
            width={200}
            height={200}
            alt="imagen"
            src={`http://localhost:8090/api/files/${entrada.collectionId}/${entrada.id}/${entrada.foto}`}
          />
          <Box className="ml-2">
            <Typography variant="h5">{entrada.nombre}</Typography>
            <Typography className="mt-4" variant="body1">
              {entrada.precio} USD
            </Typography>
            {entrada.disponible === true ? (
              <CheckCircle style={{ color: "green" }} />
            ) : (
              <Cancel style={{ color: "red" }} />
            )}
            <Valoracion valoracion={entrada.valoracion} />
            <form>
              <label>Cantidad</label>
              <select className="cursor-pointer bg-transparent">
                <option value="">selecciona</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <input
                className="bg-azul-caribe ml-5 mt-3 block uppercase p-2 rounded-md border-none text-white hover:scale-105 hover:cursor-pointer"
                type="submit"
                value="hacer pedido"
              />
            </form>
          </Box>
        </Card>
      ))}
    </div>
  );
}

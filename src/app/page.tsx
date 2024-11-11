"use client";

import { pb } from "@/lib/pocketbase";
import {
  Box,
  Typography,
  Container,
  Card,
  Divider,
  Button,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
export default function Menu() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = pb.authStore.isValid;
    if (!isAuthenticated) {
      router.push("/iniciar");
    }
  }, [router]);

  const handlelogout = () => {
    pb.authStore.clear();
    router.push("/auth");
  };

  return (
    <Container>
      <Box>
        <div className=" items-center gap-4">
          <Typography variant="h4">Sabores del Caribe</Typography>
        </div>
        <div>
          <Card className="bg-verde-menta">
            <Typography className="mt-2" variant="h6">
              Bienvenidos a
              <Divider />
              Sabores del Caribe
              <Divider />
              un rincón del paraíso culinario en el corazón de La Habana, donde
              cada platillo es una celebración de la rica herencia y diversidad
              cultural del Caribe. Nuestro restaurante está dedicado a ofrecer a
              nuestros comensales una experiencia gastronómica inolvidable,
              fusionando ingredientes frescos y de alta calidad con recetas
              tradicionales transmitidas de generación en generación.
              <Divider />
              Desde el momento en que entras por nuestras puertas, serás
              recibido por un ambiente cálido y acogedor que refleja la vibrante
              energía de las islas caribeñas. Las paredes están adornadas con
              arte local y fotografías que capturan la esencia de la vida
              tropical, transportándote instantáneamente a un oasis de sabores y
              colores
            </Typography>
          </Card>
        </div>
        <Divider />
      </Box>
      <Container className="flex col-span-3 mt-3 gap-3">
        <Card>
          <Image
            src="/sabores1.png"
            width={259}
            height={194}
            alt="sabores caribe"
          />
        </Card>
        <Card>
          <Image
            src="/sabores1.png"
            width={259}
            height={194}
            alt="sabores caribe"
          />
        </Card>
        <Card>
          <Image
            src="/sabores1.png"
            width={259}
            height={194}
            alt="sabores caribe"
          />
        </Card>
        <Card>
          <Image
            src="/sabores1.png"
            width={259}
            height={194}
            alt="sabores caribe"
          />
        </Card>
      </Container>
      <Button onClick={handlelogout}>cerrar cesion</Button>
    </Container>
  );
}

"use client";

import {
  formatDateToPocketBase,
  formatearFechayHora,
} from "@/helpers/FormatDate";
import { pb } from "@/lib/pocketbase";
import {
  Box,
  Button,
  Card,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Reserva {
  dia: string;
  fecha_y_hora: string;
  personas: number;
  nombre: string;
}

export default function Reservar() {
  const [dia, setDia] = useState<string>("");
  const [fechaYHora, setFechaYHora] = useState<string>("");
  const [personas, setPersonas] = useState<number>(1);
  const [mensaje, setMensaje] = useState<string>("");
  const [nombre, setNombre] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formateDate = formatDateToPocketBase(fechaYHora);
    const data: Reserva = {
      dia,
      fecha_y_hora: formateDate,
      personas,
      nombre,
    };

    try {
      await pb.collection("reservar").create(data);
      setMensaje(
        `usted a reservado para el dia ${dia}  ${formatearFechayHora(
          fechaYHora
        )} con ${personas} personas `
      );

      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error: any) {
      console.error("error al reservar", error.message);
      setMensaje("hubo un error al crear reserva");
    }
  };

  return (
    <Box component="div" className="flex justify-center items-center">
      <Card
        component="form"
        onSubmit={handleSubmit}
        className="w-64 p-5 mt-5 bg-verde-menta "
      >
        <Typography variant="h4" gutterBottom className="text-center">
          Reservar
        </Typography>
        <TextField
          className="mt-2"
          required
          label="Nombre de la reseva"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          fullWidth
        />
        <Select
          className="mt-2"
          required
          label="Día"
          value={dia}
          onChange={(e) => setDia(e.target.value as string)}
          fullWidth
        >
          <MenuItem value="lunes">Lunes</MenuItem>{" "}
          <MenuItem value="martes">Martes</MenuItem>{" "}
          <MenuItem value="miércoles">Miércoles</MenuItem>{" "}
          <MenuItem value="jueves">Jueves</MenuItem>{" "}
          <MenuItem value="viernes">Viernes</MenuItem>{" "}
          <MenuItem value="sábado">Sábado</MenuItem>{" "}
        </Select>
        <TextField
          className="mt-2"
          required
          label=""
          type="datetime-local"
          value={fechaYHora}
          onChange={(e) => setFechaYHora(e.target.value)}
          fullWidth
        />
        <Select
          className="mt-2"
          required
          label="Personas"
          value={personas}
          onChange={(e) => setPersonas(Number(e.target.value))}
          fullWidth
        >
          {" "}
          {Array.from({ length: 10 }, (_, i) => (
            <MenuItem key={i + 1} value={i + 1}>
              {i + 1}
            </MenuItem>
          ))}
        </Select>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="mt-2"
        >
          Hacer Reserva
        </Button>
        {mensaje && <Typography sx={{ mt: 2 }}>{mensaje}</Typography>}
      </Card>
    </Box>
  );
}

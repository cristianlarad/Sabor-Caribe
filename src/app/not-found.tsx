"use client";
import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useRouter } from "next/navigation";

const NotFound: React.FC = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <Container maxWidth="md" style={{ textAlign: "center", marginTop: "50px" }}>
      <ErrorOutlineIcon style={{ fontSize: "100px", color: "red" }} />
      <Typography variant="h2" style={{ marginTop: "20px", color: "#333" }}>
        404 - Página No Encontrada
      </Typography>
      <Typography variant="body1" style={{ marginTop: "20px", color: "#555" }}>
        Lo sentimos, pero la página que buscas no existe. Tal vez escribiste mal
        la dirección o la página ha sido movida a otra URL.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "40px" }}
        onClick={handleBackToHome}
      >
        Volver a la página principal
      </Button>
    </Container>
  );
};

export default NotFound;

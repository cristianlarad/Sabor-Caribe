// pages/login.tsx
import Iniciarsecion from "@/components/iniciarsecion";
import { Button, Card } from "@mui/material";
import Link from "next/link";
import React from "react";

const Iniciar: React.FC = () => {
  return (
    <div className=" mt-5 flex justify-center items-center ">
      <Card className="w-64 center gap-4 p-4">
        <h1 className="text-3xl font-bold mb-4">Inicio de Sesión</h1>
        <Iniciarsecion />
        <Link href="/auth">
          <Button>registrarse</Button>
        </Link>
      </Card>
    </div>
  );
};

export default Iniciar;

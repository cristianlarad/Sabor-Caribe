// pages/auth.tsx
import React from "react";
import Login from "../../components/Login";
import { Button, Card } from "@mui/material";
import Link from "next/link";

const Auth: React.FC = () => {
  return (
    <div className=" mt-5 flex justify-center items-center ">
      <Card className=" w-64 center gap-4 p-4">
        <h1 className="text-3xl font-bold mb-4">Autenticación</h1>
        <Login />
        <Link href="/iniciar">
          <Button>iniciar cesion</Button>
        </Link>
      </Card>
    </div>
  );
};

export default Auth;

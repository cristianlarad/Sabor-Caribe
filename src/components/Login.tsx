"use client";
import React, { useState } from "react";
import PocketBase from "pocketbase";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

const pb = new PocketBase("http://127.0.0.1:8090");

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      username: username,
      email: email,
      emailVisibility: true,
      password: password,
      passwordConfirm: password,
      name: username,
    };

    try {
      await pb.collection("users").create(data);
      setMessage("Usuario registrado con éxito. Verifica tu email.");
      router.push("/");
    } catch (error) {
      setMessage("Error al registrar el usuario.");
      console.error("Error:", error);
    }
  };

  return (
    <div className=" items-center gap-4">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button
          variant="contained"
          className="bg-amber-800 rounded-md mt-3 w-36"
          type="submit"
        >
          Registrar
        </Button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;

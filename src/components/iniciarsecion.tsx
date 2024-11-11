"use client";
import React, { useState } from "react";
import PocketBase from "pocketbase";
import { useRouter } from "next/navigation";

const pb = new PocketBase("http://127.0.0.1:8090");

const Iniciarsecion: React.FC = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await pb.collection("users").authWithPassword(user, password);
      document.cookie = pb.authStore.exportToCookie();
      setMessage("Inicio de sesión exitoso.");
      router.push("/"); // Redirige a la página de inicio después de iniciar sesión
    } catch (error) {
      setMessage("Error al iniciar sesión.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="gap-5">
      <h2 className="mt-1">Inicio de Sesión</h2>
      <form onSubmit={handleLogin}>
        <div className="mt-4">
          <label>
            User: <br />
          </label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
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
        <button type="submit">Iniciar Sesión</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Iniciarsecion;

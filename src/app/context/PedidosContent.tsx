"use client";
import { createContext, FC, ReactNode, useContext, useState } from "react";
interface Entrada {
  id: string;
  nombre: string;
  precio: number;
  cantidad: number;
  foto: File;
}

interface ContextProps {
  pedidos: Entrada[];
  addToPedidos: (entrada: Entrada) => void;
}
const PedidosContext = createContext<ContextProps | undefined>(undefined);

export const PedidosProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [pedidos, setPedidos] = useState<Entrada[]>([]);

  const addToPedidos = (entrada: Entrada) => {
    setPedidos([...pedidos, entrada]);
  };

  return (
    <PedidosContext.Provider value={{ pedidos, addToPedidos }}>
      {children}
    </PedidosContext.Provider>
  );
};

export const usePedidos = () => {
  const context = useContext(PedidosContext);
  if (context === undefined) {
    throw new Error("usePedidos no sirve");
  }
  return context;
};

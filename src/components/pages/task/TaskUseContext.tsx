"use client";
import { createContext, useState } from "react";

export const CreateTaskContext = createContext<any>(null);

export default function TaskUseContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [createTask, setCreateTask] = useState(false);

  return (
    <CreateTaskContext.Provider value={{ createTask, setCreateTask }}>
      {children}
    </CreateTaskContext.Provider>
  );
}

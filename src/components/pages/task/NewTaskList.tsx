"use client";
import { useContext } from "react";
import NewTask from "./NewTask";
import { CreateTaskContext } from "./TaskUseContext";

export default function NewTaskList() {
  const { createTask } = useContext(CreateTaskContext);

  return (
    <div className="flex flex-col">
      {createTask && <NewTask />}
    </div>
  );
}

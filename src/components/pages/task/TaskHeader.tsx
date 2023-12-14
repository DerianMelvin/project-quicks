"use client";
import ExpandMoreIcon from "@/components/icons/ExpandMoreIcon";
import { useContext, useState } from "react";
import { CreateTaskContext } from "./TaskUseContext";

export default function TaskHeader() {
  const { setCreateTask } = useContext(CreateTaskContext);

  const [viewDropdown, setViewDropdown] = useState(false);

  const [currentDropdown, setCurrentDropdown] = useState("My Tasks");
  const taskDropdown = ["Personal Errands", "Urgent To-Do"];

  const closeDropDown = () => setViewDropdown((prev) => !prev);

  return (
    <div className="w-full flex justify-between gap-3 font-bold text-primary-darkGray">
      {/* My Tasks */}
      <div className="relative flex flex-col items-center gap-2 ml-28">
        <button
          onClick={() => closeDropDown()}
          className="px-3 py-[7px] flex items-center gap-2 border rounded-md border-primary-gray"
        >
          <span>{currentDropdown}</span>
          <ExpandMoreIcon />
        </button>

        {viewDropdown && (
          <ul className="absolute top-12 w-72 flex flex-col border rounded-md border-primary-gray bg-white">
            {taskDropdown.map((task) => (
              <li
                key={task}
                onClick={() => {
                  closeDropDown();
                  setCurrentDropdown(task);
                }}
                className="px-3 py-[6px] cursor-pointer border-b border-primary-gray first:rounded-t-md last:rounded-b-md last:border-transparent hover:bg-primary-white"
              >
                {task}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* New Task */}
      <button
        onClick={() => setCreateTask(true)}
        className="min-w-fit px-4 py-2 rounded-md font-bold bg-primary-blue text-white"
      >
        New Task
      </button>
    </div>
  );
}

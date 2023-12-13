"use client";
import ExpandMoreIcon from "@/components/icons/ExpandMoreIcon";
import { useState } from "react";

export default function TaskHeader() {
  const [viewDropdown, setViewDropdown] = useState(false);

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
          <span>My Tasks</span>
          <ExpandMoreIcon />
        </button>

        {viewDropdown && (
          <ul className="absolute top-12 w-72 flex flex-col border rounded-md border-primary-gray">
            {taskDropdown.map((task) => (
              <li
                key={task}
                onClick={() => closeDropDown()}
                className="px-3 py-[6px] cursor-pointer border-b border-primary-gray last:border-transparent"
              >
                {task}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* New Task */}
      <button className="min-w-fit px-4 py-2 rounded-md font-bold bg-primary-blue text-white">
        New Task
      </button>
    </div>
  );
}

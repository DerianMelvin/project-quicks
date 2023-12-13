"use client";
import ExpandMoreIcon from "@/components/icons/ExpandMoreIcon";
import MoreHorizontalIcon from "@/components/icons/MoreHorizontalIcon";
import { useState } from "react";
import TaskDetails from "./TaskDetails";
import CheckboxCheckedIcon from "@/components/icons/CheckboxCheckedIcon";
import CheckboxIcon from "@/components/icons/CheckboxIcon";

export default function Task() {
  const [viewDetails, setViewDetails] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col gap-2 border-b py-[22px] border-primary-gray text-primary-darkGray">
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-5">
          {isChecked ? (
            <button
              onClick={() => setIsChecked((prev) => !prev)}
              className="w-[18px] h-[18px] flex"
            >
              <CheckboxCheckedIcon />
            </button>
          ) : (
            <button
              onClick={() => setIsChecked((prev) => !prev)}
              className="w-[18px] h-[18px] flex"
            >
              <CheckboxIcon />
            </button>
          )}

          <h2 className="max-w-sm font-bold line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            eius ipsa tempora eveniet nihil, pariatur, a minima eaque dolores
            autem commodi voluptatibus exercitationem laudantium laboriosam
            ratione corporis alias eos vero.
          </h2>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <span className="text-indicator-red">2 Days Left</span>
          <span className="">12/06/2021</span>

          <button
            onClick={() => setViewDetails((prev) => !prev)}
            className={`w-4 flex justify-center py-2 ${
              viewDetails && "rotate-180"
            }`}
          >
            <ExpandMoreIcon />
          </button>

          <button className="w-4 flex justify-center py-2">
            <MoreHorizontalIcon />
          </button>
        </div>
      </div>

      {viewDetails && <TaskDetails />}
    </div>
  );
}

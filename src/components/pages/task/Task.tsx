"use client";
import ExpandMoreIcon from "@/components/icons/ExpandMoreIcon";
import MoreHorizontalIcon from "@/components/icons/MoreHorizontalIcon";
import { useState } from "react";
import TaskDetails from "./TaskDetails";
import CheckboxCheckedIcon from "@/components/icons/CheckboxCheckedIcon";
import CheckboxIcon from "@/components/icons/CheckboxIcon";
import { Post } from "@/types/dummyApi/GetPost";
import { taskDateFormat } from "@/utils/FormatDate";

export default function Task({ post }: { post: Post }) {
  const { text, owner, publishDate } = post;

  const [viewDetails, setViewDetails] = useState(false);
  const [viewOptions, setViewOptions] = useState(false);
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

          <h2
            className={`max-w-sm font-bold line-clamp-2 ${
              isChecked && "line-through text-primary-gray"
            }`}
          >
            {text}
          </h2>
        </div>

        <div className="relative flex items-center gap-4 text-sm">
          <span className="text-indicator-red">2 Days Left</span>
          <span className="">
            {taskDateFormat.format(new Date(publishDate))}
          </span>

          <button
            onClick={() => setViewDetails((prev) => !prev)}
            className={`w-4 flex justify-center py-2 ${
              viewDetails && "rotate-180"
            }`}
          >
            <ExpandMoreIcon />
          </button>

          <button
            onClick={() => setViewOptions((prev) => !prev)}
            className="w-4 flex justify-center py-2"
          >
            <MoreHorizontalIcon />
          </button>

          {viewOptions && (
            <button className="absolute right-0 top-7 w-32 px-3 py-2 text-left text-base rounded-md border border-primary-gray text-indicator-red bg-white">
              Delete
            </button>
          )}
        </div>
      </div>

      {viewDetails && <TaskDetails post={post} />}
    </div>
  );
}

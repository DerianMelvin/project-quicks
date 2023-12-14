import CheckboxCheckedIcon from "@/components/icons/CheckboxCheckedIcon";
import CheckboxIcon from "@/components/icons/CheckboxIcon";
import ExpandMoreIcon from "@/components/icons/ExpandMoreIcon";
import MoreHorizontalIcon from "@/components/icons/MoreHorizontalIcon";
import { useContext, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import NewTaskDetails from "./NewTaskDetails";
import { CreateTaskContext } from "./TaskUseContext";

export default function NewTask() {
  const { setCreateTask } = useContext(CreateTaskContext);

  const [viewDetails, setViewDetails] = useState(true);
  const [viewOptions, setViewOptions] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col gap-2 py-[22px] text-primary-darkGray">
      <div className="flex items-center justify-between">
        <div className="w-full flex items-center gap-5">
          {isChecked ? (
            <button
              onClick={() => setIsChecked((prev) => !prev)}
              className="w-[18px] h-[18px] flex items-center"
            >
              <CheckboxCheckedIcon />
            </button>
          ) : (
            <button
              onClick={() => setIsChecked((prev) => !prev)}
              className="w-[18px] h-[18px] flex items-center"
            >
              <CheckboxIcon />
            </button>
          )}

          <ReactTextareaAutosize
            maxRows={3}
            placeholder="Type Task Title"
            className="grow max-w-sm px-3 py-2 border rounded-md resize-none bg-transparent placeholder-primary-darkGray border-primary-gray"
          />
        </div>

        <div className="relative flex items-center gap-4 text-sm">
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
            <button
              onClick={() => setCreateTask(false)}
              className="absolute right-0 top-7 w-32 px-3 py-2 text-left text-base rounded-md border border-primary-gray text-indicator-red bg-white"
            >
              Delete
            </button>
          )}
        </div>
      </div>

      {viewDetails && <NewTaskDetails />}
    </div>
  );
}

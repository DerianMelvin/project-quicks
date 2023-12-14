import EditIcon from "@/components/icons/EditIcon";
import ScheduleIcon from "@/components/icons/ScheduleIcon";
import { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

export default function NewTaskDetails() {
  const [editDetails, setEditDetails] = useState(false);
  const [hasDescription, setHasDescription] = useState(false);
  const [hasDate, setHasDate] = useState(false);

  return (
    <div className="flex flex-col gap-3 pl-9">
      {/* Schedule */}
      <div className="flex items-center gap-6">
        <div className="w-5 flex">
          <ScheduleIcon
            colorFill={hasDate ? "fill-primary-blue" : "fill-primary-darkGray"}
          />
        </div>
        <input
          type="date"
          name="schedule"
          onChange={(e) => {
            if (e.target.value.length > 0) {
              setHasDate(true);
            } else {
              setHasDate(false);
            }
          }}
          className="px-3 py-1 border rounded-md border-primary-gray"
        />
      </div>

      {/* Details */}
      <div className="flex items-start gap-6">
        <button
          onClick={() => setEditDetails((prev) => !prev)}
          className="w-5 flex translate-y-1"
        >
          <EditIcon
            colorFill={
              hasDescription ? "fill-primary-blue" : "fill-primary-darkGray"
            }
          />
        </button>

        <ReactTextareaAutosize
          maxRows={3}
          onClick={() => setEditDetails(true)}
          onChange={(e) => {
            if (e.target.value.length > 0) {
              setHasDescription(true);
            } else {
              setHasDescription(false);
            }
          }}
          readOnly={!editDetails}
          placeholder="No Description"
          className={`w-5/6 resize-none bg-transparent placeholder-primary-darkGray ${
            editDetails && "px-2 py-1 border rounded-md border-primary-gray"
          }`}
        />
      </div>
    </div>
  );
}

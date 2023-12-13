import EditIcon from "@/components/icons/EditIcon";
import ScheduleIcon from "@/components/icons/ScheduleIcon";
import { Post } from "@/types/dummyApi/GetPost";
import { taskDateFormat } from "@/utils/FormatDate";
import { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

export default function TaskDetails({ post }: { post: Post }) {
  const { text, publishDate } = post;

  // Convert date to input-usable format
  const [day, month, year] = taskDateFormat
    .format(new Date(publishDate))
    .split("/");
  const getDate = `${year}-${month}-${day}`;

  const [editDetails, setEditDetails] = useState(false);

  return (
    <div className="flex flex-col gap-3 pl-9">
      {/* Schedule */}
      <div className="flex items-center gap-6">
        <div className="w-5 flex">
          <ScheduleIcon colorFill={getDate && "fill-primary-blue"} />
        </div>
        <input
          type="date"
          name="schedule"
          id="scheduleInput"
          defaultValue={getDate}
          className="px-3 py-1 border rounded-md border-primary-gray"
        />
      </div>

      {/* Details */}
      <div className="flex items-start gap-6">
        <button
          onClick={() => setEditDetails((prev) => !prev)}
          className="w-5 flex translate-y-1"
        >
          <EditIcon colorFill={text && "fill-primary-blue"} />
        </button>

        <ReactTextareaAutosize
          maxRows={3}
          onClick={() => setEditDetails(true)}
          readOnly={!editDetails}
          placeholder="No Description"
          defaultValue={text}
          className={`w-5/6 resize-none bg-transparent placeholder-primary-darkGray ${
            editDetails && "px-2 py-1 border rounded-md border-primary-gray"
          }`}
        />
      </div>
    </div>
  );
}

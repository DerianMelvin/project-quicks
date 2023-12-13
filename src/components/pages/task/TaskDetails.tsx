import EditIcon from "@/components/icons/EditIcon";
import ScheduleIcon from "@/components/icons/ScheduleIcon";
import ReactTextareaAutosize from "react-textarea-autosize";

export default function TaskDetails() {
  return (
    <div className="flex flex-col gap-3 pl-9">
      <div className="flex items-center gap-6">
        <div className="w-5 flex">
          <ScheduleIcon />
        </div>
        <input
          type="date"
          name="schedule"
          className="px-3 py-1 border rounded-md border-primary-gray"
        />
      </div>

      <div className="flex items-start gap-6">
        <button className="w-5 flex translate-y-1">
          <EditIcon />
        </button>

        <ReactTextareaAutosize
          maxRows={3}
          disabled={true}
          className="w-5/6 resize-none bg-transparent px-3 py-2 border rounded-md border-primary-gray"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi iure
          autem explicabo illum vero reiciendis, harum nemo impedit aliquam.
          Inventore sint aliquam ex ut unde vero vitae rerum quas fugiat.
        </ReactTextareaAutosize>
      </div>
    </div>
  );
}

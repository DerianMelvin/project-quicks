import MoreHorizontalIcon from "@/components/icons/MoreHorizontalIcon";
import { Comment } from "@/types/dummyApi/GetPostComment";
import { chatboxDateFormat } from "@/utils/FormatDate";

type ChatBoxType = { comment: Comment };

export default function ChatBox({ comment }: ChatBoxType) {
  const { owner, message, publishDate } = comment;

  return (
    <div className="flex flex-col self-start">
      <span className="text-sm font-bold text-chats-yellow">{`${owner.firstName} ${owner.lastName}`}</span>
      <div className="flex items-start gap-2">
        <div className="max-w-[518px] flex flex-col gap-2 p-[10px] rounded-md text-primary-darkGray bg-chats-yellowLight">
          <p>{message}</p>
          <span className="text-sm">
            {chatboxDateFormat.format(new Date(publishDate))}
          </span>
        </div>
        <button className="max-w-[14px] py-1 flex">
          <MoreHorizontalIcon />
        </button>
      </div>
    </div>
  );
}

"use client";
import MoreHorizontalIcon from "@/components/icons/MoreHorizontalIcon";
import { Comment } from "@/types/dummyApi/GetPostComment";
import { chatboxDateFormat } from "@/utils/FormatDate";
import { useState } from "react";

type ChatBoxType = {
  comment: Comment;
  ownerIdList: string[];
};

export default function ChatBox({ comment, ownerIdList }: ChatBoxType) {
  const { owner, message, publishDate } = comment;

  // State to view / hide more options menu
  const [viewChatOptions, setViewChatOptions] = useState(false);

  // Set color based on owner index
  const getOwnerIndex = ownerIdList.findIndex((val) => val == owner.id);
  const setTextColor =
    getOwnerIndex % 2 === 0 ? "text-chats-yellow" : "text-chats-green";
  const setBackgroundColor =
    getOwnerIndex % 2 === 0 ? "bg-chats-yellowLight" : "bg-chats-greenLight";

  return (
    <div className="flex flex-col self-start">
      <span
        className={`text-sm font-bold ${setTextColor}`}
      >{`${owner.firstName} ${owner.lastName}`}</span>
      <div className="flex items-start gap-2">
        <div
          className={`max-w-[518px] flex flex-col gap-2 p-[10px] rounded-md text-primary-darkGray ${setBackgroundColor}`}
        >
          <p>{message}</p>
          <span className="text-sm">
            {chatboxDateFormat.format(new Date(publishDate))}
          </span>
        </div>
        <div className="relative flex flex-col">
          <button
            onClick={() => setViewChatOptions((prev) => !prev)}
            className="max-w-[14px] py-1 flex"
          >
            <MoreHorizontalIcon />
          </button>

          {viewChatOptions && (
            <div className="absolute top-4 w-[126px] flex flex-col rounded-md border border-[#BDBDBD]">
              <button
                onClick={() => setViewChatOptions((prev) => !prev)}
                className="w-full px-4 py-2 text-left border-b border-[#BDBDBD] text-primary-blue"
              >
                Edit
              </button>
              <button
                onClick={() => setViewChatOptions((prev) => !prev)}
                className="w-full px-4 py-2 text-left text-indicator-red"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

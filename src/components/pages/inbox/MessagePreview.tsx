import PersonIcon from "@/components/icons/PersonIcon";
import { Post } from "@/types/dummyApi/GetPost";
import { inboxDateFormat } from "@/utils/FormatDate";
import Link from "next/link";

export default function MessagePreview({ post }: { post: Post }) {
  const { id, text, publishDate } = post;
  const { firstName, lastName } = post.owner;

  return (
    <Link
      href={`/inbox/${id}`}
      key={id}
      className="w-full flex items-start gap-8 py-[22px] cursor-pointer border-b border-primary-gray last:border-transparent hover:bg-[#F2F2F2]"
    >
      {/* Icon */}
      <div className="relative flex items-center translate-y-1">
        <div className="w-[34px] h-[34px] flex items-center justify-center rounded-full bg-primary-white">
          <PersonIcon colorFill="fill-primary-darkGray" />
        </div>

        <div className="absolute left-4 w-[34px] h-[34px] flex items-center justify-center rounded-full bg-primary-blue">
          <PersonIcon colorFill="fill-white" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <h2 className="text-base font-bold text-primary-blue">{text}</h2>
          <span className="text-sm text-primary-darkGray">
            {inboxDateFormat.format(new Date(publishDate))}
          </span>
        </div>

        <div className="flex flex-col text-sm text-primary-darkGray">
          <span className="font-bold">{`${firstName} ${lastName}:`}</span>
          <p>{text}</p>
        </div>
      </div>
    </Link>
  );
}

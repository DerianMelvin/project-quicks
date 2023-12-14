import ArrowBackIcon from "@/components/icons/ArrowBackIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import Link from "next/link";

export default function SkeletonMessageHeader() {
  return (
    <div className="flex items-center justify-between gap-5 px-[29px] py-5 border-b border-primary-white">
      <div className="flex items-center gap-4">
        <Link href={"/inbox"} className="min-w-fit p-1">
          <ArrowBackIcon />
        </Link>

        <div className="flex flex-col">
          <h1 className="font-bold line-clamp-2 text-primary-blue">...</h1>
          <span className="text-sm text-primary-darkGray">...</span>
        </div>
      </div>

      <Link href={"/inbox"} className="min-w-fit p-1">
        <CloseIcon />
      </Link>
    </div>
  );
}

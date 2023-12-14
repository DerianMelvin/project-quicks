import MiniLoadingIcon from "@/components/icons/MiniLoadingIcon";
import SkeletonMessageHeader from "@/components/pages/inbox/[id]/SkeletonMessageHeader";
import SkeletonMessageInput from "@/components/pages/inbox/[id]/SkeletonMessageInput";

export default function InboxMessageLoading() {
  return (
    <main className="w-[734px] h-[737px] flex flex-col rounded-md overflow-y-auto bg-white">
      <SkeletonMessageHeader />

      <div className="w-full h-full grow flex flex-col items-center gap-3 px-[29px] py-3 overflow-y-auto"></div>

      <div className="flex items-center gap-3 mx-7 px-3 py-2 rounded-md bg-[#E9F3FF]">
        <div className="animate-spin">
          <MiniLoadingIcon />
        </div>
        <span className="text-sm font-bold text-primary-darkGray">Please wait while we connect you with one of our team ...</span>
      </div>

      <SkeletonMessageInput />
    </main>
  );
}

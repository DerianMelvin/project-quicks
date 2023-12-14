import SkeletonTaskHeader from "@/components/pages/task/SkeletonTaskHeader";
import LoadingCard from "@/components/shared/LoadingCard";

export default function TaskLoading() {
  return (
    <main className="w-[734px] h-[737px] flex flex-col px-8 py-6 rounded-md overflow-y-auto bg-white">
      <SkeletonTaskHeader />
      
      <LoadingCard title="Loading Task List ..." />
    </main>
  );
}

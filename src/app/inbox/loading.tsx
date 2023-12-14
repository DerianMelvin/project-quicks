import SearchBar from "@/components/pages/inbox/SearchBar";
import LoadingCard from "@/components/shared/LoadingCard";

export default function InboxLoading() {
  return (
    <main className="w-[734px] h-[737px] flex flex-col items-center px-8 py-6 rounded-md overflow-y-auto bg-white">
      <SearchBar />

      <LoadingCard title="Loading Chats ..." />
    </main>
  )
}

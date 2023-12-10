"use client";
import InboxButton from "@/components/InboxButton";
import MenuButton from "@/components/MenuButton";
import TaskButton from "@/components/TaskButton";

export default function Home() {
  const buttonSize = 68;

  return (
    <main className="w-full h-full px-[34px] py-[27px] flex items-end justify-end">
      <nav className="flex items-stretch justify-end gap-[26px] text-primary-white">
        <button className="flex flex-col items-center justify-center gap-2">
          <span className="font-bold">Task</span>
          <TaskButton size={buttonSize} />
        </button>
        
        <button className="flex flex-col items-center justify-center gap-2">
          <span className="font-bold">Inbox</span>
          <InboxButton size={buttonSize} />
        </button>
        
        <button className="flex flex-col items-center justify-center self-end gap-2">
          <MenuButton size={buttonSize} />
        </button>
      </nav>
    </main>
  );
}

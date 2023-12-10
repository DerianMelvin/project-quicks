"use client";
import MenuButton from "@/components/MenuButton";

export default function Home() {
  return (
    <main className="w-full h-full px-[34px] py-[27px] flex items-end justify-end">
      <button onClick={() => console.log("Menu clicked")}>
        <MenuButton size={68} />
      </button>
    </main>
  );
}

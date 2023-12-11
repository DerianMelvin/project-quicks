"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import TaskIcon from "../icons/TaskIcon";
import InboxIcon from "../icons/InboxIcon";
import TaskSelectedIcon from "../icons/TaskSelectedIcon";
import InboxSelectedIcon from "../icons/InboxSelectedIcon";
import MenuIcon from "../icons/MenuIcon";

export default function NavigationLinks() {
  const router = useRouter();

  // Get current pathname
  const pathname = usePathname();
  const isHomepage = pathname == "/";
  const isInboxPage = pathname == "/inbox";
  const isTaskPage = pathname == "/task";

  const [viewMenu, setViewMenu] = useState(isHomepage ? false : true);
  
  const returnToHomepage = () => {
    router.push("/");
    setViewMenu(false);
  };

  return (
    <nav className="z-50 flex items-stretch justify-end gap-[26px] text-primary-white">
      {viewMenu && (
        <>
          {/* Task Page */}
          <Link
            href={"/task"}
            className="flex flex-col items-center justify-center gap-2"
          >
            {isHomepage && <span className="font-bold">Task</span>}

            <button className="w-[68px] h-[68px] rounded-full bg-primary-white flex flex-col items-center justify-center self-end gap-2">
              <TaskIcon />
            </button>
          </Link>

          {/* Inbox Page */}
          <Link
            href={"/inbox"}
            className="flex flex-col items-center justify-center gap-2"
          >
            {isHomepage && <span className="font-bold">Inbox</span>}

            <button className="w-[68px] h-[68px] rounded-full bg-primary-white flex flex-col items-center justify-center self-end gap-2">
              <InboxIcon />
            </button>
          </Link>
        </>
      )}

      {isTaskPage ? (
        <div className="relative flex flex-col items-center justify-center self-end gap-2 ml-5">
          <button
            onClick={() => returnToHomepage()}
            className="-z-10 absolute top-0 w-[68px] h-[68px] rounded-full bg-primary-darkGray -translate-x-5"
          ></button>

          <div className="w-[68px] h-[68px] rounded-full bg-indicator-orange flex flex-col items-center justify-center">
            <TaskSelectedIcon />
          </div>
        </div>
      ) : isInboxPage ? (
        <div className="relative flex flex-col items-center justify-center self-end gap-2 ml-5">
          <button
            onClick={() => returnToHomepage()}
            className="-z-10 absolute top-0 w-[68px] h-[68px] rounded-full bg-primary-darkGray -translate-x-5"
          ></button>

          <div className="w-[68px] h-[68px] rounded-full bg-indicator-violet flex flex-col items-center justify-center">
            <InboxSelectedIcon />
          </div>
        </div>
      ) : (
        <button
          onClick={() => setViewMenu((prev) => !prev)}
          className="w-[68px] h-[68px] rounded-full bg-primary-blue flex flex-col items-center justify-center self-end gap-2"
        >
          <MenuIcon />
        </button>
      )}
    </nav>
  );
}

import NewTaskList from "@/components/pages/task/NewTaskList";
import TaskHeader from "@/components/pages/task/TaskHeader";
import TaskList from "@/components/pages/task/TaskList";
import TaskUseContext from "@/components/pages/task/TaskUseContext";

export default function TaskPage() {
  return (
    <main className="w-[734px] h-[737px] flex flex-col px-8 py-6 rounded-md overflow-y-auto bg-white">
      <TaskUseContext>
        <TaskHeader />
        
        <TaskList />

        <NewTaskList />
      </TaskUseContext>
    </main>
  );
}

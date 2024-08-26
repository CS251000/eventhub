"use client";


import TaskInput from "./TaskInput";

export default function AssignedHero() {
  return (
    <div className="flex items-center justify-between bg-gray-900 text-white">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight px-4">
          TASKS
        </h2>
      </div>
      <TaskInput/>
      
    </div>
  );
}

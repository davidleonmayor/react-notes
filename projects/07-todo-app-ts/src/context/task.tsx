import React, { createContext, useReducer, useState, ReactNode } from "react";

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskProviderProps {
  children: ReactNode;
}

interface TaskContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

interface Iaction {
  type: string;
  payload: Task;
}

function reducer(state: Task[], action: Iaction): Task[] | undefined {
  switch (action.type) {
    case "ADD_TASK":
      {
        return [...state, action.payload];
      }
      break;
    case "REMOVE_TASK":
      {
        return state.filter((task) => task.id !== action.payload.id);
      }
      break;
    // default: {
    // }
  }
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const initialState: Task[] = [
    {
      id: 1,
      title: "Learn React",
      description: "Learn React and TypeScript",
      completed: false,
    },
    {
      id: 2,
      title: "Learn React Native",
      description: "Learn React Native and TypeScript",
      completed: false,
    },
    {
      id: 3,
      title: "Learn Node",
      description: "Learn Node and TypeScript",
      completed: false,
    },
  ];
  const [tasks, dispatch] = useReducer(reducer, initialState);

  const addTask = (task: Task) => {
    dispatch({ type: "ADD_TASK", payload: task });
  };

  const removeTask = (task: Task) => {
    dispatch({ type: "REMOVE_TASK", payload: task });
  };

  const value = {
    tasks,
    addTask,
    removeTask,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export default TaskProvider;
export { TaskContext };

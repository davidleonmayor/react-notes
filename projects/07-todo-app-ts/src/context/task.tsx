import React, { createContext, useReducer } from "react";

export interface ITask {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface ITaskContext {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  removeTask: (task: ITask) => void;
  removeAllTask: () => void;
  updateTask: (task: ITask) => void;
}

interface IAction {
  type: string;
  payload?: ITask;
}

interface ITaskProviderProps {
  children: React.ReactNode;
}

function reducer(state: ITask[], action: IAction): ITask[] {
  switch (action.type) {
    case "ADD_TASK":
      {
        if (action.payload) return [...state, action.payload];
        return state;
      }
      break;
    case "REMOVE_TASK":
      {
        if (action.payload) {
          return state.filter((task) => task.id !== action.payload.id);
        }
        return state;
      }
      break;
    case "UPDATE_TASK":
      {
        const eje = state.map((task) =>
          task.id === action.payload?.id ? action.payload : task
        );
        console.log(eje);
        return eje;
      }
      break;
    case "REMOVE_ALL_TASK":
      {
        return [];
      }
      break;
    default:
      return state;
  }
}

const TaskContext = createContext<ITaskContext | undefined>(undefined);

function TaskProvider({
  children,
}: ITaskProviderProps): React.ReactElement<ITaskContext | undefined> {
  const initialState: ITask[] = [
    // {
    //   id: 1,
    //   title: "Learn React Native",
    //   description: "Learn React Native and TypeScript",
    //   completed: false,
    // },
  ];
  const [tasks, dispatch] = useReducer(reducer, initialState);

  const addTask = (task: ITask) => {
    dispatch({ type: "ADD_TASK", payload: task });
  };

  const removeTask = (task: ITask) => {
    dispatch({ type: "REMOVE_TASK", payload: task });
  };

  const updateTask = (task: ITask) => {
    dispatch({ type: "UPDATE_TASK", payload: task });
  };

  const removeAllTask = () => dispatch({ type: "REMOVE_ALL_TASK" });

  const value = {
    tasks,
    addTask,
    removeTask,
    updateTask,
    removeAllTask,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export default TaskProvider;
export { TaskContext };

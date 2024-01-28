import React, { createContext, useReducer, useEffect } from "react";

export interface ITask {
  id: number;
  title: string;
  description: string;
  completed: string;
}
// TODO: fintrar por completados, no completados, todos
export interface Ifilter {
  // option: "all" | "completed" | "uncompleted";
  option: string;
  value: string;
}

export interface ITaskContext {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  removeTask: (task: ITask) => void;
  removeAllTask: () => void;
  updateTask: (task: ITask) => void;
  filterTask: (filter: Ifilter) => void;
}

interface IAction {
  type: string;
  // payload?: ITask | Ifilter;  // TODO: el payload es de tipo ITask o Ifilter, pero no se puede hacer un OR en typescript
  payload?: ITask;
}

interface ITaskProviderProps {
  children: React.ReactNode;
}

const initialState: ITask[] = [
  // {
  //   id: 1,
  //   title: "Learn React Native",
  //   description: "Learn React Native and TypeScript",
  //   completed: "uncompleted",
  // },
  // {
  //   id: 2,
  //   title: "Learn React",
  //   description: "Learn React and TypeScript",
  //   completed: "completed",
  // },
  // {
  //   id: 3,
  //   title: "Learn TypeScript",
  //   description: "Learn TypeScript and React",
  //   completed: "uncompleted",
  // },
];

function TaskProvider({
  children,
}: ITaskProviderProps): React.ReactElement<ITaskContext | undefined> {
  const [tasks, dispatch] = useReducer(reducer, initialState);
  const [copiedTasks, setCopiedTasks] = React.useState<ITask[]>(tasks);
  const [chageTask, setChangeTask] = React.useState<boolean>(false);

  const addTask = (task: ITask) => {
    dispatch({ type: "ADD_TASK", payload: task });
    setChangeTask((prev) => !prev);
  };

  const removeTask = (task: ITask) => {
    dispatch({ type: "REMOVE_TASK", payload: task });
    setChangeTask((prev) => !prev);
  };

  const updateTask = (task: ITask) => {
    dispatch({ type: "UPDATE_TASK", payload: task });
    setChangeTask((prev) => !prev);
  };

  const removeAllTask = () => {
    dispatch({ type: "REMOVE_ALL_TASK" });
    setChangeTask((prev) => !prev);
  };

  // TODO: se necesita actualizar la copia con el estado cunado se agrega, elimina o edita una tarea. Pero no con el filtro ya que excluye las tareas que no cumplen con el filtro
  useEffect(() => {
    setCopiedTasks(tasks);
    console.log({ tasks, copiedTasks });
  }, [chageTask]);

  const filterTask = (filter: Ifilter) => {
    const { option, value } = filter;
    let filteredTasks = copiedTasks;

    if (value) {
      filteredTasks = filteredTasks.filter((task) =>
        task.title.toLowerCase().includes(value.toLowerCase())
      );
    }
    switch (option) {
      case "completed":
        filteredTasks = filteredTasks.filter(
          (task) => task.completed === "completed"
        );
        break;

      case "uncompleted":
        filteredTasks = filteredTasks.filter(
          (task) => task.completed === "uncompleted"
        );
        break;
      default:
        filteredTasks = filteredTasks.filter((task) => task);
        break;
    }

    dispatch({ type: "MANAGE_TASKS", payload: filteredTasks });
  };

  const value = {
    tasks,
    addTask,
    removeTask,
    updateTask,
    removeAllTask,
    filterTask,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

function reducer(state: ITask[], action: IAction): ITask[] {
  switch (action.type) {
    case "MANAGE_TASKS":
      {
        return action.payload;
      }
      break;
    case "ADD_TASK":
      if (action.payload) return [...state, action.payload];
      return state;
    case "REMOVE_TASK":
      if (action.payload) {
        return state.filter((task) => task.id !== action.payload.id);
      }
      return state;
    case "UPDATE_TASK":
      return state.map((task) =>
        task.id === action.payload?.id ? action.payload : task
      );
    case "REMOVE_ALL_TASK":
      return [];
    case "FILTER_TASK":
      if (action.payload) {
        const { option, value } = action.payload;
        let filteredTasks = initialState;
        if (value) {
          filteredTasks = filteredTasks.filter((task) =>
            task.title.toLowerCase().includes(value.toLowerCase())
          );
        }
        switch (option) {
          case "completed":
            filteredTasks = filteredTasks.filter(
              (task) => task.completed === "completed"
            );
            return filteredTasks;

          case "uncompleted":
            filteredTasks = filteredTasks.filter(
              (task) => task.completed === "uncompleted"
            );
            return filteredTasks;
          default:
            filteredTasks = filteredTasks.filter((task) => task);
            return filteredTasks;
        }
      }
      return state;
    default:
      return state;
  }
}

const TaskContext = createContext<ITaskContext | undefined>(undefined);

export default TaskProvider;
export { TaskContext };

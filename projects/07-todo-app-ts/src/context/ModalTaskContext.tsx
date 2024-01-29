import React, { createContext, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { type ITask } from "./task";

export interface IModalContext {
  task: ITask;
  isOpen: boolean;
  mode: "add" | "update" | null;
  setMode: React.Dispatch<React.SetStateAction<"add" | "update" | null>>;
  onOpen: () => void;
  onClose: () => void;
  updateModalContent: (task: ITask) => void;
}

interface IModalTaskProviderProps {
  children: React.ReactNode;
}

const ModalTaskContext = createContext<IModalContext | undefined>(undefined);

function ModalTaskProvider({
  children,
}: IModalTaskProviderProps): React.ReactElement<IModalContext | undefined> {
  const [task, setTask] = useState<ITask>({
    id: 1,
    title: "Learn React",
    description: "Learn React and TypeScript",
    completed: false,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mode, setMode] = useState<"add" | "update" | null>("add");

  const updateModalContent = (task: ITask) => {
    console.log(task);
    setTask(task);
  };

  const value = {
    task,
    updateModalContent,
    mode,
    setMode,
    isOpen,
    onOpen,
    onClose,
  };

  return (
    <ModalTaskContext.Provider value={value}>
      {children}
    </ModalTaskContext.Provider>
  );
}

export default ModalTaskProvider;
export { ModalTaskContext };

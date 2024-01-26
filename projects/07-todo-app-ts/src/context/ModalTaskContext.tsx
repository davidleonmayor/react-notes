import React, { createContext, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Task } from "./task";

interface ModalContextType {
  isOpen: boolean;
  onOpen: void;
  onClose: void;
}

const ModalTaskContext = createContext<ModalContextType | null>(null);

const ModalTaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [task, setTask] = useState<Task>({
    id: 1,
    title: "Learn React",
    description: "Learn React and TypeScript",
    completed: false,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const value = {
    task,
    setTask,
    isOpen,
    onOpen,
    onClose,
  };

  return (
    <ModalTaskContext.Provider value={value}>
      {children}
    </ModalTaskContext.Provider>
  );
};

export default ModalTaskProvider;
export { ModalTaskContext };

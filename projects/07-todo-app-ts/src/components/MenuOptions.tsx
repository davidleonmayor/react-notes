import { useContext, useRef } from "react";
import { useColorMode, IconButton, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Moon, Sun, Check, Garbage, Plus } from "../assets/Icons";
import { TaskContext } from "../context/task";
import { ModalTaskContext } from "../context/ModalTaskContext";

const MotionIconButton = motion(IconButton);

function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <MotionIconButton
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <Moon /> : <Sun />}
      whileTap={{ scale: 1 }}
    />
  );
}

function MenuOptions() {
  const { onOpen } = useContext(ModalTaskContext);
  const { addTask, removeALLTask } = useContext(TaskContext);

  const identificadorTarea = useRef<number>(3);

  const handlePlusButton = () => {
    const newID = identificadorTarea.current + 1;
    addTask({
      id: newID,
      title: "TASK",
      description: "task",
      completed: false,
    });
    identificadorTarea.current = newID; // Update the ref after using it
    onOpen();
  };

  return (
    <>
      <ThemeToggleButton />

      <Flex direction="row" justify="space-between" align="center">
        <Check />
        <div onClick={removeALLTask}>
          <Garbage />
        </div>
        <div onClick={handlePlusButton}>
          <Plus />
        </div>
        {/* <MagnifyingGlass /> */}
      </Flex>
    </>
  );
}

export default MenuOptions;

import { useContext } from "react";
import { useColorMode, IconButton, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Moon, Sun, Check, Garbage, Plus } from "../assets/Icons";
import { ITaskContext, TaskContext } from "../context/task";
import { IModalContext, ModalTaskContext } from "../context/ModalTaskContext";

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
  const { onOpen, setMode } = useContext(ModalTaskContext) as IModalContext;
  const { removeAllTask } = useContext(TaskContext) as ITaskContext;

  const handlePlusButton = () => {
    setMode("add");
    onOpen();
  };

  return (
    <>
      <ThemeToggleButton />

      <Flex direction="row" justify="space-between" align="center">
        <Check />
        <div onClick={removeAllTask}>
          <Garbage />
        </div>
        <div onClick={handlePlusButton}>
          <Plus />
        </div>
      </Flex>
    </>
  );
}

export default MenuOptions;

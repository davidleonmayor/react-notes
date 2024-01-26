import React, { useContext } from "react";
import { /*Button,*/ IconButton, Flex } from "@chakra-ui/react";
import {
  Moon,
  Sun,
  Check,
  Garbage,
  // MagnifyingGlass,
  Plus,
} from "../assets/Icons";
import { useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { TaskContext } from "../context/task";

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
  const { addTask } = useContext(TaskContext);

  const handlePlusButton = () => {
    addTask({
      title: "TASK",
      description: "task",
      completed: false,
    });
  };
  return (
    <>
      <ThemeToggleButton />

      <Flex direction="row" justify="space-between" align="center">
        <Check />
        <Garbage />
        <div onClick={handlePlusButton}>
          <Plus />
        </div>
        {/* <MagnifyingGlass /> */}
      </Flex>
    </>
  );
}

export default MenuOptions;

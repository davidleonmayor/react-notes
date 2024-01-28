import React, { useContext, useState, useEffect, useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";
import { IModalContext, ModalTaskContext } from "../context/ModalTaskContext";
import { ITask, ITaskContext, TaskContext } from "../context/task";

function ModalTaskContent() {
  const { task, updateModalContent, isOpen, onClose, mode } = useContext(
    ModalTaskContext
  ) as IModalContext;
  const { addTask, updateTask } = useContext(TaskContext) as ITaskContext;
  const [taskContent, setTaskContent] = useState<ITask>(task);
  const [newTaskContent, setNewTaskContent] = useState<ITask>({
    id: 0,
    title: "",
    description: "",
    completed: "uncompleted",
  });
  const initialIDTask = useRef(0);

  useEffect(() => {
    setTaskContent(task);
    console.log({ task, taskContent });
  }, [task]);

  const handleAddeModal = () => {
    const newInitialIDTask = initialIDTask.current + 1;
    addTask({ ...newTaskContent, id: newInitialIDTask });
    setNewTaskContent({
      id: newInitialIDTask,
      title: "",
      description: "",
      completed: "uncompleted",
    });
    onClose();
    initialIDTask.current = newInitialIDTask;
  };

  const handleUpdateModal = () => {
    updateTask(taskContent);
    updateModalContent({
      ...taskContent,
      title: "",
      description: "",
      completed: "uncompleted",
    });
    setTaskContent({
      ...taskContent,
      title: "",
      description: "",
      completed: "uncompleted",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (mode === "add") {
      setNewTaskContent({
        ...newTaskContent,
        [e.target.name]: e.target.value,
      });
    } else {
      setTaskContent({
        ...taskContent,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setTaskContent({
      ...taskContent,
      completed: e.target.value,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={() => {}}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {mode === "add" ? null : (
            <select
              name="option"
              value={taskContent.completed}
              onChange={handleSelectChange}
            >
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          )}
          <Input
            variant="flushed"
            placeholder="Title"
            name="title"
            value={mode === "add" ? newTaskContent.title : taskContent.title}
            onChange={handleInputChange}
          />
        </ModalHeader>
        <ModalCloseButton
          onClick={() => {
            onClose();
            updateModalContent({
              ...taskContent,
              title: "",
              description: "",
            });
          }}
        />
        <ModalBody>
          <Input
            variant="flushed"
            placeholder="description"
            name="description"
            value={
              mode === "add"
                ? newTaskContent.description
                : taskContent.description
            }
            onChange={handleInputChange}
            overflow="scroll"
            resize="vertical"
          />
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              if (mode === "add") {
                handleAddeModal();
              } else {
                handleUpdateModal();
              }
              onClose();
            }}
          >
            {mode === "add" ? "Add" : "Update"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalTaskContent;

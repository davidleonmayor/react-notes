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
  const { addTask, updateTask } = useContext(TaskContext) as ITaskContext; // TODO: metodo para actualizar la tarea
  const [taskContent, setTaskContent] = useState<ITask>(task);
  console.log({ task, taskContent });
  const initialIDTask = useRef(0);

  useEffect(() => {
    setTaskContent(task);
  }, [task]);

  const handleAddeModal = () => {
    const newInitialIDTask = initialIDTask.current + 1;
    // console.log({ ...taskContent, id: newInitialIDTask });
    addTask({ ...taskContent, id: newInitialIDTask });
    setTaskContent({
      id: newInitialIDTask,
      title: "",
      description: "",
      completed: false,
    });
    onClose();
    initialIDTask.current = newInitialIDTask;
  };

  const handleUpdateModal = () => {
    console.log(taskContent);
    updateTask(taskContent);
    updateModalContent(taskContent);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskContent({
      ...taskContent,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={() => {}}>
      {/* onClose={onClose}*/}
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Input
            variant="flushed"
            placeholder="Title"
            name="title"
            value={taskContent.title}
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
        />{" "}
        {/* componente para cerrar la modal  */}
        <ModalBody>
          <Input
            variant="flushed"
            placeholder="description"
            name="description"
            value={taskContent.description}
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
          {/* <Button
            onClick={() => {
              console.log(taskContent);
              updateTask(taskContent);
              updateModalContent(taskContent);
            }}
            variant="ghost"
          >
            Update
          </Button> */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalTaskContent;

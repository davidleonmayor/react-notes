import { useContext } from "react";
import {
  Card,
  // CardHeader,
  CardBody,
  // CardFooter,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Flex,
  Spacer,
  Icon,
} from "@chakra-ui/react";
import { Pencil, Garbage } from "../assets/Icons";
import { type ITaskContext, type ITask, TaskContext } from "../context/task";
import {
  type IModalContext,
  ModalTaskContext,
} from "../context/ModalTaskContext";

function Task(props: ITask) {
  const { onOpen, updateModalContent, /*mode,*/ setMode } = useContext(
    ModalTaskContext
  ) as IModalContext;
  const { removeTask } = useContext(TaskContext) as ITaskContext;

  const handleOpenTaskContent = () => {
    updateModalContent(props);
    console.log(props);
    setMode("update");
    onOpen();
  };

  const handleGarbageButton = () => {
    removeTask(props);
  };

  return (
    <Flex onClick={handleOpenTaskContent} align="center">
      <Icon
        viewBox="0 0 200 200"
        color={props.completed === "completed" ? "green.500" : "red.500"}
      >
        <path
          fill="currentColor"
          d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
        />
      </Icon>

      <Box>
        <Heading size="xs" textTransform="uppercase">
          {props.title}
        </Heading>
        <Text pt="2" fontSize="sm">
          {props.description}
        </Text>
      </Box>
      <Spacer />
      <Flex align="center" direction="column">
        {/* <div onClick={(e) => e.stopPropagation()}>
          <Pencil />
        </div> */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            handleGarbageButton();
          }}
        >
          <Garbage />
        </div>
      </Flex>
    </Flex>
  );
}

function Tasks() {
  const { tasks } = useContext(TaskContext) as ITaskContext;

  return (
    <Card>
      {/* <CardHeader>
        <Heading size="md">Your Notes</Heading>
      </CardHeader> */}

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {tasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Tasks;

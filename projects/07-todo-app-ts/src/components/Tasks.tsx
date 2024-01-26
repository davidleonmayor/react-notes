import React, { useContext } from "react";
import { TaskContext } from "../context/task";
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

function Task(props) {
  const { removeTask } = useContext(TaskContext);
  const { id, title, description, completed } = props;

  return (
    <Flex align="center">
      <Icon viewBox="0 0 200 200" color="red.500">
        <path
          fill="currentColor"
          d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
        />
      </Icon>

      <Box>
        <Heading size="xs" textTransform="uppercase">
          {title}
        </Heading>
        <Text pt="2" fontSize="sm">
          {description}
        </Text>
      </Box>
      <Spacer />
      <Flex align="center" direction="column">
        <Pencil />
        <div onClick={() => removeTask(props)}>
          <Garbage />
        </div>
      </Flex>
    </Flex>
  );
}

function Tasks() {
  const { tasks } = useContext(TaskContext);

  return (
    <Card>
      {/* <CardHeader>
        <Heading size="md">Your Notes</Heading>
      </CardHeader> */}

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {tasks.map((task) => (
            <Task {...task} />
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Tasks;

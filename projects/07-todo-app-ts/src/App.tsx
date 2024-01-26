import { Box } from "@chakra-ui/react";
import MenuOptions from "./components/MenuOptions";
import Tasks from "./components/Tasks";
import FilterVarTasks from "./components/FilterVarTasks";
import ModalTaskContent from "./components/ModalTaskContent";
import TaskProvider from "./context/task";

function App() {
  return (
    <TaskProvider>
      <MenuOptions />
      <Box m={10} /> {/* This will give a margin of 4 units on all sides */}
      <FilterVarTasks />
      {/* <Box m={4} /> This will give a margin of 4 units on all sides */}
      <ModalTaskContent />
      {/* <Box m={4} /> This will give a margin of 4 units on all sides */}
      <Tasks />
    </TaskProvider>
  );
}

export default App;

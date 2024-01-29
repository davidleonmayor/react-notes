import { Box } from "@chakra-ui/react";
import MenuOptions from "./components/MenuOptions";
import Tasks from "./components/Tasks";
import FilterVarTasks from "./components/FilterVarTasks";
import ModalTaskContent from "./components/ModalTaskContent";
import TaskProvider from "./context/task";
import ModalTaskProvider from "./context/ModalTaskContext";

function App() {
  return (
    <ModalTaskProvider>
      <TaskProvider>
        <MenuOptions />
        <hr />
        <Box m={10} />
        <FilterVarTasks />
        <ModalTaskContent />
        <Tasks />
      </TaskProvider>
    </ModalTaskProvider>
  );
}

export default App;

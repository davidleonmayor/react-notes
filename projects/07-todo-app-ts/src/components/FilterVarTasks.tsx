import { useContext } from "react";
import { Input, Flex } from "@chakra-ui/react";
import { TaskContext } from "../context/task";

function FilterVarTasks() {
  const { removeALLTask } = useContext(TaskContext);

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value as Filter);
  };

  return (
    <Flex gap={5}>
      {/* <select value={filter} onChange={handleFilter}> */}
      <select>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
      {/* <span> Filter</span> */}
      <Input placeholder="Basic usage" />
    </Flex>
  );
}

export default FilterVarTasks;
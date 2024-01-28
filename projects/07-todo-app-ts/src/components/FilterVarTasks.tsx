import { useContext, useState, useEffect } from "react";
import { Input, Flex } from "@chakra-ui/react";
import { type ITaskContext, Ifilter, TaskContext } from "../context/task";

function FilterVarTasks() {
  const { filterTask } = useContext(TaskContext) as ITaskContext;
  const [filter, setFilter] = useState<Ifilter>({
    option: "all",
    value: "",
  });

  const handleFilter = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    console.log("filtro: ", filter);
    filterTask(filter);
  }, [filter]);

  return (
    <Flex gap={5}>
      <select name="option" value={filter.option} onChange={handleFilter}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
      <Input
        name="value"
        value={filter.value}
        onChange={handleFilter}
        placeholder="workout"
      />
    </Flex>
  );
}

export default FilterVarTasks;

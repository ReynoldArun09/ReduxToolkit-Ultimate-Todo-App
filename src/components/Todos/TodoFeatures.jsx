/* eslint-disable react-hooks/exhaustive-deps */
import { OctagonX, SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import {
  clearSearch,
  deleteAllTodo,
  searchTodos,
  sortSelect,
  updatedAllTodo,
} from "@/redux/features/TodoSlice";
import { useEffect, useState } from "react";

export default function TodoFeatures() {
  const [search, setSearch] = useState("");
  const [val, setVal] = useState("")
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch(deleteAllTodo());
  };
  const handleCompletedAll = () => {
    dispatch(updatedAllTodo());
  };

  const handleSearch = () => {
    dispatch(searchTodos(search));
  };

  const handleClearSearch = () => {
    dispatch(clearSearch());
    setSearch("");
  };

  const handleChange = (value) => {
    setVal(value)
  }

  useEffect(() => {
    dispatch(sortSelect(val))
  }, [val])

  return (
    <section className="space-y-3 lg:flex justify-between items-center">
      <div className="mt-1">
        <Select onValueChange={handleChange}>
          <SelectTrigger>
            <SelectValue placeholder="default"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-2 items-center">
        <Button onClick={handleDeleteAll}>Delete All Todos</Button>
        <Button onClick={handleCompletedAll}>Mark All Completed</Button>
      </div>
      <div className="flex gap-2">
        <Input
          placeholder="Search todos here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={handleSearch}>
          <SearchIcon />
        </Button>
        <Button className="flex gap-1" onClick={handleClearSearch}>
          <OctagonX size={15} />
          <span className="text-sm">Clear</span>
        </Button>
      </div>
    </section>
  );
}

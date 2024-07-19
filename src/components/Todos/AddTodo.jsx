import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useDispatch } from "react-redux";
import { addTodo } from "@/redux/features/TodoSlice";
import { useState } from "react";
import {toast} from 'sonner'


export default function AddTodo() {
  const [todoval, setTodoVal] = useState("")
  const dispatch = useDispatch()
  const handleAddTodo = () => {
    if(todoval.length < 4) {
      toast.error('Minimum for 4 letter needed.')
      return
    }
    const id = self.crypto.randomUUID()
    dispatch(addTodo({
      id: id,
      todo: todoval,
      completed: false,
    }))
    setTodoVal("")
    toast.success("Todo Task Added.")
  }

  return (
    <section className="flex gap-2">
      <Input placeholder="add todo here..." type="text" value={todoval} onChange={(e) => setTodoVal(e.target.value)}/>
      <Button onClick={handleAddTodo}>
        <PlusIcon />
      </Button>
    </section>
  )
}

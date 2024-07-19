/* eslint-disable react/prop-types */
import { Check, Trash, X } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, setTodosAgain, updateTodo } from "@/redux/features/TodoSlice";
import {toast} from 'sonner'


export default function TodoItem({todoData, index}) {
  const dispatch = useDispatch()
  const {filteredTodos} = useSelector((store) => store.Todos)

  const handleDelete = () => {
    dispatch(deleteTodo(todoData.id))
    toast.success("Todo Task Deleted.")
  }

  const handleCompleted = () => {
    dispatch(updateTodo(todoData.id))
  }

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', index)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrag = (e, newIndex) => {
    const draggedIndex = e.dataTransfer.getData('text/plain')
    let data = [...filteredTodos]
    const draggedItem = data[draggedIndex]
    data.splice(draggedIndex, 1)
    data.splice(newIndex, 0, draggedItem)
    dispatch(setTodosAgain(data))
  }

  return (
    <div key={todoData.id}
    draggable
    onDragStart={handleDragStart}
    onDragOver={handleDragOver}
    onDrag={handleDrag}
    className="flex justify-between items-center py-4 border-b-[1px] cursor-pointer">
      <div className='flex gap-2'>
        <span className='font-bold'>{index+1} .</span>
        <p className={todoData.completed ? 'line-through' : 'font-md'}>{todoData.todo}</p>
      </div>
      <div className="flex gap-2 items-center">
        <Button variant="outline" size="icon" onClick={handleCompleted}>
          {todoData.completed ? <X size={15} className='text-yellow-500'/> : <Check size={15} className='text-green-600'/>}
        </Button>
        <Button variant="outline" size="icon" onClick={handleDelete}>
          <Trash size={15} className='text-red-600'/>
        </Button>
      </div>
    </div>
  )
}

import { useSelector } from "react-redux"
import TodoItem from "./TodoItem"


export default function TodosList() {
  const {filteredTodos} = useSelector((store) => store.Todos)
  return (
    <section>
      <ul>
        {filteredTodos?.map((todo, index) => (
          <TodoItem key={todo.id} todoData={todo} index={index}/>
        ))}
      </ul>
    </section>
  )
}

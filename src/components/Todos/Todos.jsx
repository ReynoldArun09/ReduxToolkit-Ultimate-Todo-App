import Theme from "../Theme/Theme";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import AddTodo from "./AddTodo";
import TodoFeatures from "./TodoFeatures";
import TodosList from "./TodosList";

export default function Todos() {

  return (
    <Card className="w-fit mx-auto md:w-[80vw] lg:w-[80vw] mt-10 xl:w-[60vw] 2xl:w-[50vw]">
      <CardHeader>
        <CardTitle className="font-bold flex justify-center gap-8 items-center">
          Advanced Todo App
          <Theme />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <AddTodo />
        <TodoFeatures />
        <TodosList />
      </CardContent>
    </Card>
  );
}

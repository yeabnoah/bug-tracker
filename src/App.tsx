import { useRecoilState, useRecoilValue } from "recoil";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import todoAtom, { CategoryType, filteredTodos, todoCategoryFilterAtom, TodoInterface } from "./store/atoms/Todos";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useRecoilState(todoAtom);
  const [inputTodo, setInputTodo] = useState("");
  const [todoCategory, setTodoCategory] = useState("");
  const [todoCategoryFilter, setTodoCategoryFilter] = useRecoilState(todoCategoryFilterAtom);

  const handleSubmit = () => {
    if (inputTodo && todoCategory) {
      const newTodo: TodoInterface = {
        title: inputTodo,
        category: todoCategory as CategoryType
      };
      setTodos([...todos, newTodo]);
      setInputTodo("");
      setTodoCategory("");
    }
  };

  const additional = "all"

  const filteredTodoList = useRecoilValue(filteredTodos);

  return (
    <div className='flex flex-row items-center justify-center min-h-screen'>
      <Card className="border-none shadow-sm shadow-white/5">
        <CardHeader className="flex flex-row justify-center gap-3 items-center">
          <Input value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} placeholder="Enter todo here" className="mt-1" />
          <Selector todoCategory={todoCategory} setTodoCategory={setTodoCategory} />
          <Button onClick={handleSubmit} className="bg-teal-500 text-black hover:bg-teal-500/80">Add Todos</Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row items-center gap-3">
            <Selector todoCategory={todoCategoryFilter!} setTodoCategory={setTodoCategoryFilter} />
            <CardTitle className="my-5">Filter Todos</CardTitle>
          </div>

          <div className="flex flex-col gap-3">
            {filteredTodoList.map((todo, index) => (
              <div key={index} className="flex flex-col border p-3 rounded-lg bg-white/5 border-none">
                <Label className="text-xl">{todo.title}</Label>
                <Label className={`
                                ${todo.category === "home" && 'bg-green-400'} 
                                ${todo.category === "work" && 'bg-red-400'}
                                ${todo.category === "school" && 'bg-purple-400'}  
                                justify-end flex flex-row text-base w-fit text-end rounded mt-2 opacity-85 text-black px-5`}>
                  {todo.category}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;

const Selector = ({ todoCategory, setTodoCategory }: {
  todoCategory: string;
  setTodoCategory: (todoCategory: string) => void;
}) => {
  const typeOfTodos = ["work", "school", "home"];

  return (
    <div>
      <Select value={todoCategory} onValueChange={setTodoCategory}>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          {typeOfTodos.map((each, index) => (
            <SelectItem key={index} value={each}>
              {each}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

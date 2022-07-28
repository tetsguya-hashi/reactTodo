import { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";


export const App = () => {
  const [todoText, setTodoText] = useState('')
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [sudemiaru, setSudemiaru] = useState(false)
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    setSudemiaru(false);
    if (!todoText) return;
    if (incompleteTodos.includes(todoText)) {
      setSudemiaru(true);
      return;
    }


    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
    document.getElementById('add-text').focus();
  }
  const setTodo = (todo, index, updateTodo) => {
    const newTodos = todo;
    newTodos.splice(index, 1);
    updateTodo(newTodos)
  }
  const onClickDelete = (index) => {
    setTodo([...incompleteTodos], index, setIncompleteTodos)
  }
  const onClickComplete = (index) => {
    setTodo([...incompleteTodos], index, setIncompleteTodos);
    const newTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newTodos);
  }
  const returnTodo = (index) => {
    setTodo([...completeTodos], index, setCompleteTodos);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  }
  return (
    <div className="container">
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} disabled={incompleteTodos.length >= 5} />
      {incompleteTodos.length >= 5 && <p>登録できるTodoは５個までです。</p>}
      {sudemiaru && <p>このTodoは登録されています！！</p>}
      <IncompleteTodo incompleteTodos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
      <CompleteTodo completeTodos={completeTodos} returnTodo={returnTodo} />
    </div>
  );
}


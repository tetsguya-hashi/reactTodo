import { useState } from "react";


export const App = () => {
  const [todoText, setTodoText] = useState('')
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (!todoText) return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
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
      <div className="input-area">
        <input type="text" placeholder="TODOを入力" id="add-text" value={todoText} onChange={onChangeTodoText} />
        <button id="add-button" onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul id="incomplete-list">
          {
            incompleteTodos.map((todo, index) => {
              return (
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              )
            })
          }
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul id="complete-list">
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => returnTodo(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );

}


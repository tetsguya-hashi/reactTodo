export const CompleteTodo = (props) => {
  const { completeTodos, returnTodo } = props;
  return (
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
  )
}
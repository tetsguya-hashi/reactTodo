
const style = {
  marginTop: '20px',
  backgroundColor: '#c1ffff',
  padding: '10px',
  marginBottom: '20px',
  width: '60%',
  borderRadius: '8px'
}

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input autoFocus disabled={disabled} type="text" placeholder="TODOを入力" id="add-text" value={todoText} onChange={onChange} />
      <button disabled={disabled} id="add-button" onClick={onClick}>追加</button>
    </div>
  )
}
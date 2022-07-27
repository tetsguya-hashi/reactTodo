const Colorfullmessage = (props) => {
  const { color, message } = props;
  const contentStyle = {
    color: color,
    fontSize: '26px'
  }
  return (
    <p style={contentStyle}>{message}</p>
  );
}

export default Colorfullmessage;
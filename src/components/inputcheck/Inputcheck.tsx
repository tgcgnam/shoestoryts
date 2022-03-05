interface iType {
  title: string;
  name: string;
  type: string;
  handleChange: (e: EventInit) => void;
  handleError: (e: EventInit) => void;
}
function Inputcheck(props: iType) {
  return (
    <div className="name">
      <span>{props.title}</span>
      <br />
      <input
        onChange={props.handleChange}
        onBlur={props.handleError}
        type={props.type}
        name={props.name}
      />
    </div>
  );
}

export default Inputcheck;

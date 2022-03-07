import styled from "styled-components";

const InputStyle = styled.input`
  width: 100%;
  max-width: 300px;
`;

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
      <InputStyle
        style={{ width: "300px" }}
        onChange={props.handleChange}
        onBlur={props.handleError}
        type={props.type}
        name={props.name}
      />
    </div>
  );
}

export default Inputcheck;

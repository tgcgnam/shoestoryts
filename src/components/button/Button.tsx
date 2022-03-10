import styled from "styled-components";

const BtnStyle = styled.button`
  border: none;
  background-color: #ec2a21;
  color: white;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  cursor: pointer;
  padding: 7px 20px;

  :hover {
    background-color: #ff00007a;
    color: white;
  }
`;

function ButtonAnt({
  text,
  onclick,
}: {
  text: string;
  onclick: React.MouseEventHandler<HTMLElement> | undefined;
}) {
  return <BtnStyle onClick={onclick}>{text}</BtnStyle>;
}

export default ButtonAnt;

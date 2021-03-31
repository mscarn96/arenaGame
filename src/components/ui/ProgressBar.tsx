import styled from "styled-components";

interface ContainterProps {
  width: number;
}

interface FillerProps {
  bgcolor: string;
  completed: number;
}

interface OtherProps {
  bgcolor: string;
  current: number;
  total: number;
}

type Props = ContainterProps & OtherProps;

const Container = styled.div<ContainterProps>`
  height: 20px;
  width: ${(props) => props.width}%;
  background-color: #e0e0de;
  border: 1px solid black;
  border-radius: 50px;
  margin: 10px;

  @media (min-width: 768px) {
    height: 25px;
  }
  @media (min-width: 1024px) {
    height: 30px;
  }
`;
const Label = styled.span`
  padding: 5px;
  color: black;
  font-weight: bold;
`;

const Filler = styled.div<FillerProps>`
  height: 100%;
  width: ${(props) => props.completed}%;
  background-color: ${(props) => props.bgcolor};
  border-radius: inherit;
  text-align: center;
  transition: width 1s ease-in-out;
  font-family: sans-serif;
`;

const ProgressBar = (props: Props) => {
  const { bgcolor, current, total, width } = props;

  const completed = Math.round((current / total) * 100);

  return (
    <Container width={width}>
      <Filler completed={completed} bgcolor={bgcolor}>
        <Label>{`${completed}%`}</Label>
      </Filler>
    </Container>
  );
};

export default ProgressBar;

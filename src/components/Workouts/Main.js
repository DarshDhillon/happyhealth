import styled from 'styled-components';

const Main = ({ children }) => {
  return (
    <Container>
      <TempDiv></TempDiv>
      {children}
    </Container>
  );
};

export default Main;

const Container = styled.main`
  /* border: 1px solid red; */
  padding: 3rem 0;
  /* height: 1000px; */
  width: 100%;
  background: linear-gradient(#e8f2f7, #f0e9f3);
`;

const TempDiv = styled.div`
  background-color: lightgreen;
  height: 400px;
`;

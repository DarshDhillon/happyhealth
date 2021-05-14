import styled from 'styled-components';

const NotFound = () => {
  return (
    <Container>
      <Heading>
        Seems you've taken a wrong turn! Click our logo to head home...
      </Heading>
      <NotFoundImage
        src={require('./../images/notFound/notFound.svg').default}
      />
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(#e8f2f7, #f0e9f3);
  padding: 4rem 2rem;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--mainPurple);
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NotFoundImage = styled.img`
  width: 35vw;
`;

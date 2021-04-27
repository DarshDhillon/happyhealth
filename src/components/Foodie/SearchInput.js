import styled from 'styled-components';

const SearchInput = () => {
  return (
    <Container>
      <FoodSearchInput placeholder='search for recipes...' autoFocus />
      <SearchButton>GO</SearchButton>
    </Container>
  );
};

export default SearchInput;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;
  max-width: 80%;
  margin: 0 auto;
`;

const FoodSearchInput = styled.input`
  padding: 0.8rem;
  width: 40%;
  font-size: 1.5rem;
  outline: none;
  border: none;
  border-radius: 0.5rem 0 0 0.5rem;
  background: #fcfcfc;

  &::placeholder {
    font-weight: 400;
    text-align: center;
  }

  @media screen and (max-width: 1100px) {
    width: 70%;
  }
`;

const SearchButton = styled.button`
  padding: 0.8rem;
  font-size: 1.5rem;
  border: none;
  background: #76e276;
  border-radius: 0 0.5rem 0.5rem 0;
  font-weight: 500;
  color: #fff;
  transition: transform 0.3s ease-in-out;

  &:hover {
    font-weight: 700;
  }
`;

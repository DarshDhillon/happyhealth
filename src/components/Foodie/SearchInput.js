import { useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import { FoodieContext } from '../../context/Foodie/FoodieProvider';

const SearchInput = () => {
  const [inputState, setInputState] = useState('');
  const inputRef = useRef();
  const { handleFetch } = useContext(FoodieContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleFetch(inputState);
    setInputState('');
    inputRef.current.focus();
  };

  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <Wrapper>
          <FoodSearchInput
            ref={inputRef}
            value={inputState}
            onChange={(e) => setInputState(e.target.value)}
            placeholder='search for recipes...'
            autoFocus
          />
          <SearchButton>GO</SearchButton>
        </Wrapper>
      </Form>
    </Container>
  );
};

export default SearchInput;

const Container = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  padding-top: 3rem;
  max-width: 80%;
  margin: 0 auto;
  /* border: 1px solid red; */
`;

const Wrapper = styled.div`
  display: flex;
`;

const Form = styled.form`
  width: 50%;
  /* border: 1px solid black; */

  /* @media screen and (max-width: 1100px) {
    width: 60%;
  } */

  @media screen and (max-width: 1100px) {
    width: 80%;
  }
`;

const FoodSearchInput = styled.input`
  padding: 0.8rem;
  width: 100%;
  font-size: 1.5rem;
  outline: none;
  border: none;
  border-radius: 0.5rem 0 0 0.5rem;
  background: #fcfcfc;

  &::placeholder {
    font-weight: 400;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
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
  cursor: pointer;

  &:hover {
    font-weight: 700;
  }
`;

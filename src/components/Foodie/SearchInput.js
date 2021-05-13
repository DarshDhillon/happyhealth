import { useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import { FoodieContext } from '../../context/Foodie/FoodieProvider';
import FilterOptions from './FilterOptions';

const SearchInput = () => {
  const [inputState, setInputState] = useState({
    searchTerm: '',
  });
  const inputRef = useRef();
  const { handleFetch } = useContext(FoodieContext);

  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleFetch(inputState);
    setInputState({ searchTerm: '' });
    inputRef.current.focus();
    setShowFilterOptions((prev) => !prev);
  };

  const handleInputChange = (e) => {
    setInputState((prev) => ({ ...prev, searchTerm: e.target.value }));
    !showFilterOptions && setShowFilterOptions(true);
  };

  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <FormWrapper>
          <FoodSearchInput
            name='recipeSearch'
            required
            ref={inputRef}
            value={inputState.searchTerm}
            onChange={handleInputChange}
            placeholder='search for recipes...'
            autoFocus
            autoComplete='off'
          />
          <SearchButton>GO</SearchButton>
        </FormWrapper>
        <FilterOptions
          setInputState={setInputState}
          showFilterOptions={showFilterOptions}
        />
      </Form>
    </Container>
  );
};

export default SearchInput;

const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  /* align-items: center; */
  justify-content: center;
  padding-top: 3rem;
  max-width: 80%;
  margin: 0 auto;
`;

const FormWrapper = styled.div`
  display: flex;
`;

const Form = styled.form`
  /* border: 1px solid black; */
  width: 50%;

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

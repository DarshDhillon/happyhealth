// import { useState } from 'react';
import styled from 'styled-components';

const FilterOptions = ({ setInputState, showFilterOptions }) => {
  // const [showSearchOptions, setShowSearchOptions] = useState(false);

  const handleFilterOptions = (e) => {
    e.target.checked
      ? setInputState((prev) => {
          return {
            ...prev,
            [e.target.name]: e.target.value,
          };
        })
      : setInputState((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  return (
    <Container showFilterOptions={showFilterOptions}>
      <SectionWrapper>
        {/* <FilterOptionsWrapper
          onClick={() => setShowSearchOptions((prev) => !prev)}
        >
          <span>
            <FiFilter />
          </span>
        </FilterOptionsWrapper> */}
        <Options>
          <OptionWrapper>
            <label htmlFor='filterVeg'>Vegetarian</label>
            {/* <ImCheckboxUnchecked />
            <ImCheckboxChecked /> */}
            <input
              id='filterVeg'
              name='filterVeg'
              value='health=vegetarian'
              type='checkbox'
              onChange={handleFilterOptions}
            />
          </OptionWrapper>
          <OptionWrapper>
            <label htmlFor='filterLowFat'>Low-fat</label>
            <input
              id='filterLowFat'
              name='filterLowFat'
              value='diet=low-fat'
              type='checkbox'
              onChange={handleFilterOptions}
            />
          </OptionWrapper>
          <OptionWrapper>
            <label htmlFor='filterHighProtein'>High Protein</label>
            <input
              id='filterHighProtein'
              name='filterHighProtein'
              value='diet=high-protein'
              type='checkbox'
              onChange={handleFilterOptions}
            />
          </OptionWrapper>
        </Options>
      </SectionWrapper>
    </Container>
  );
};

export default FilterOptions;

const Container = styled.div`
  /* border: 1px solid red; */
  /* height: 200px; */
  /* background-color: #fff; */
  opacity: ${({ showFilterOptions }) => (showFilterOptions ? '1' : '0')};
  /* opacity: 0; */
  width: 100%;
  padding: 0.8rem;
  border-radius: 0.2rem;
  transition: all 0.3s ease-in-out;
  /* cursor: pointer; */

  /* @media screen and (max-width: 768px) {
    width: 400px;
  }

  @media screen and (max-width: 400px) {
    width: 300px;
  } */
`;

const SectionWrapper = styled.div`
  /* display: flex; */
  /* border: 1px solid blue; */
`;

// const FilterOptionsWrapper = styled.div`
//   /* border: 1px solid white; */
//   padding: 0.2rem 0;
//   height: 20%;
//   /* background-color: #dfa5df; */
//   /* margin: 0 auto; */
//   border-radius: 0.5rem;
//   /* margin: 1rem 0; */
//   /* text-align: center; */
//   display: flex;
//   justify-content: center;
//   /* border-bottom: 1px solid black; */

//   span {
//     cursor: pointer;
//   }
// `;

const Options = styled.div`
  /* border: 1px solid green; */
  height: 50%;
  opacity: 1;
  /* ${({ showSearchOptions }) => (showSearchOptions ? '1' : '0')}; */
  /* overflow-y: hidden; */
  /* background-color: lightgray; */
  /* margin: 0 auto; */
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.4s ease-in-out;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const OptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  label {
    cursor: pointer;
    font-size: 1.2rem;
    margin-right: 0.2rem;
    user-select: none;
    color: var(--mainPurple);
  }
  input {
    height: 20px;
    width: 20px;

    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    border: 1px solid var(--mainBlue);
    border-radius: 4px;
    outline: none;
    transition-duration: 0.3s;
    background-color: #fff;
    cursor: pointer;

    :checked {
      /* border: 1px solid #41b883; */
      background-color: var(--mainBlue);
    }
  }
`;

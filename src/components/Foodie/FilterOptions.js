import styled from 'styled-components';

const FilterOptions = ({ setInputState, showFilterOptions }) => {
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
        <Options>
          <OptionWrapper>
            <label htmlFor='filterVeg'>Vegetarian</label>
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
  visibility: ${({ showFilterOptions }) =>
    showFilterOptions ? 'visible' : 'hidden'};
  opacity: ${({ showFilterOptions }) => (showFilterOptions ? '1' : '0')};
  width: 100%;
  padding: 0.8rem;
  border-radius: 0.2rem;
  transition: all 0.3s ease-in-out;
`;

const SectionWrapper = styled.div``;

const Options = styled.div`
  height: 50%;
  opacity: 1;
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
      background-color: var(--mainBlue);
    }
  }
`;

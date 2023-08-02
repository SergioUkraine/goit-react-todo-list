import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({ getFilterQ, filter }) => {
  return (
    <FilterContainer>
      <FilterLabel>
        <FilterInput
          type="text"
          name="filter"
          onChange={getFilterQ}
          value={filter}
        />
      </FilterLabel>
    </FilterContainer>
  );
};

export default Filter;

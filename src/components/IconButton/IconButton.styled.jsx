import styled from '@emotion/styled';

export const Button = styled.button`
  margin: 0;
  padding: 5px;
  border-radius: 50%;
  border-color: transparent;
  color: white;
  font: inherit;
  background-color: aqua;
  cursor: pointer;
  &:hover {
    background-color: coral;
  }

  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

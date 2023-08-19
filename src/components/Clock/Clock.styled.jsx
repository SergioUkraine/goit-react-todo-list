import styled from '@emotion/styled';

export const ClockTimer = styled.div`
  position: fixed;
  top: 10px;
  left: 230px;
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border: solid transparent 1px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  &:hover {
    color: white;
    background-color: blue;
  }
`;

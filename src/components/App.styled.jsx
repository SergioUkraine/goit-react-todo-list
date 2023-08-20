import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 10px;
  padding-top: 60px;
`;

export const ModalButton = styled.button`
  position: fixed;
  top: 10px;
  left: 10px;
  width: 200px;
  height: 40px;
  margin-bottom: 10px;
  border: solid transparent 1px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  &:hover {
    color: white;
    background-color: orange;
  }
`;

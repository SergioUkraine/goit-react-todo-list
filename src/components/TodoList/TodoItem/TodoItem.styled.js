import styled from '@emotion/styled';

export const ListItem = styled.li`
  width: 500px;
  padding: 5px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid black 2px;
  border-radius: 4px;
  background-color: ${props => (props.done ? 'grey' : 'azure')};
`;

export const Checkbox = styled.input`
  margin: 0 20px;
  transform: scale(1.5);
  cursor: pointer;
`;
export const Task = styled.div`
  width: 100%;
  padding: 5px;
  text-decoration: ${props => (props.done ? 'line-through' : 'none')};
`;

export const Name = styled.p`
  text-align: center;
  font-weight: 500;
`;

export const Description = styled.p``;

export const DeleteButton = styled.button`
  height: 30px;
  width: 100px;
  border-radius: 4px;
  border-color: transparent;
  &:hover {
    background-color: red;
    color: white;
  }
`;

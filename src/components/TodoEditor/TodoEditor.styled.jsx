import styled from '@emotion/styled';

export const EditorForm = styled.form`
  width: 400px;
  padding: 10px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid black 2px;
  border-radius: 4px;
`;

export const Label = styled.label`
  width: 100%;
  margin-bottom: 10px;
`;

export const TaskName = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 5px;
  border: solid black 1px;
  border-radius: 4px;
`;

export const TaskDescription = styled.textarea`
  width: 100%;
  resize: none;
  margin-top: 5px;
  border: solid black 1px;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  width: 80%;
  height: 40px;
  margin-bottom: 10px;
  border: solid transparent 1px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  &:hover {
    color: white;
    background-color: green;
  }
`;

export const ClearButton = styled.button`
  width: 80%;
  height: 40px;
  border: solid transparent 1px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  &:hover {
    color: white;
    background-color: red;
  }
`;

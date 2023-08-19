import styled from '@emotion/styled';

export const ControlContaoner = styled.div`
  padding: 10px;
`;

export const TabButton = styled.button`
  width: 70px;
  height: 30px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  background-color: ${props => props.active && 'yellow'};
  border-radius: 4px;
`;

export const ContentContainer = styled.div`
  padding: 10px;
`;

export const ContentTitle = styled.h2`
  padding: 0;
  margin: 0;
`;

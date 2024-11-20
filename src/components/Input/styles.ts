import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  width: 80%;
`;

export const BaseInput = styled.input`
  background: transparent;
  border: 1px solid color ${(props) => props.theme.colors['base-header']};
  border-radius: 20px;
  width: 80%;
  height: 72px;
  padding-left: 7px;
`;
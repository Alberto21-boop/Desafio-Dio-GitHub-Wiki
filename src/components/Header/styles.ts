import styled from 'styled-components';

export const Headercontainer = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.theme.colors['base-header']};
  color: ${(props) => props.theme.colors['base-input-background']};
`
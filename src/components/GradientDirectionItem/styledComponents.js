import styled from 'styled-components'

export const PositionBtn = styled.button`
  background-color: ${props => (props.active ? '#ffffff' : '#ededed')};
  border-radius: 8px;
  opacity: ${props => (props.active ? 1 : 0.5)};
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: #334155;
  margin-right: 10px;
  width: 100px;
  height: 40px;
`

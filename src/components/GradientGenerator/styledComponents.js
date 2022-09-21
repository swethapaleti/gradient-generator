import styled from 'styled-components'

export const BackgroundDiv = styled.div`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.first},
    ${props => props.second}
  );
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  color: #ffffff;
  opacity: 0.8;
  font-size: 36px;
`

export const Text = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  opacity: 0.7;
`

export const Label = styled.label`
  color: white;
  opacity: 0.8;
  font-size: 20px;
  font-weight: 500;
`

export const ColorInput = styled.input`
  background-color: transparent;
  border: none;
  width: 100px;
  height: 50px;
`

export const GenerateBtn = styled.button`
  background-color: #00c9b7;
  border-radius: 10px;
  border: 0px;
  font-weight: 600;
  color: #1e293b;
  font-size: 15px;
  width: 120px;
  height: 46px;
`

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ColorDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`

export const DirectionList = styled.ul`
  list-style-type: none;
  display: flex;
`

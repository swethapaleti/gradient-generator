import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  BackgroundDiv,
  GenerateBtn,
  Text,
  ColorDiv,
  FlexDiv,
  Label,
  ColorInput,
  Heading,
  DirectionList,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeId: gradientDirectionsList[0].value,
    direction: gradientDirectionsList[0].value,
    leftInput: '#8ae323',
    rightInput: '#014f7b',
    leftText: '#8ae323',
    rightText: '#014f7b',
  }

  changeColor = value => {
    this.setState({
      activeId: value,
    })
  }

  generate = () => {
    const {leftInput, rightInput, activeId} = this.state
    this.setState({
      leftText: leftInput,
      rightText: rightInput,
      direction: activeId,
    })
  }

  leftChange = event => {
    this.setState({leftInput: event.target.value})
  }

  rightChange = event => {
    this.setState({rightInput: event.target.value})
  }

  render() {
    const {
      activeId,
      direction,
      leftInput,
      rightInput,
      leftText,
      rightText,
    } = this.state

    return (
      <BackgroundDiv
        data-testid="gradientGenerator"
        direction={direction}
        first={leftText}
        second={rightText}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Text>Choose Direction</Text>
        <DirectionList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              changeColor={this.changeColor}
              item={each}
              active={each.value === activeId}
              key={each.directionId}
            />
          ))}
        </DirectionList>
        <Text>Pick the Colors</Text>
        <FlexDiv>
          <ColorDiv>
            <Label as="p">{leftInput}</Label>
            <ColorInput
              onChange={this.leftChange}
              value={leftInput}
              type="color"
            />
          </ColorDiv>
          <ColorDiv>
            <Label as="p">{rightInput}</Label>
            <ColorInput
              onChange={this.rightChange}
              value={rightInput}
              type="color"
            />
          </ColorDiv>
        </FlexDiv>
        <GenerateBtn onClick={this.generate} type="button">
          Generate
        </GenerateBtn>
      </BackgroundDiv>
    )
  }
}

export default GradientGenerator

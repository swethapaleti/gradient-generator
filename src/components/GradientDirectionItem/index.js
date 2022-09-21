import {PositionBtn} from './styledComponents'

const GradientDirectionItem = props => {
  const {item, changeColor, active} = props
  const {value, displayText} = item

  const changeBtn = () => {
    changeColor(value)
  }

  return (
    <li>
      <PositionBtn active={active} onClick={changeBtn} type="button">
        {displayText}
      </PositionBtn>
    </li>
  )
}

export default GradientDirectionItem
